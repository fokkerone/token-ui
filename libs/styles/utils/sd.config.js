const StyleDictionary = require('style-dictionary');

//const handlebars = require('handlebars');
const fs = require('fs');
const _ = require('lodash');

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  matcher: function (token) {
    // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
    return (
      token.attributes.category === 'font' ||
      token.attributes.category === 'margin'
    );
  },
  transformer: function (token) {
    return `${token.value}`;
  },
});

StyleDictionary.registerTransform({
  name: 'ratio/REF',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return (
      token.type === 'spacing' ||
      token.type === 'sizing' ||
      token.type === 'fontSizes'
    );
  },
  transformer: function (token) {
    //console.log('REF - -->', token.value);
    // eslint-disable-next-line no-eval
    return `${eval(token.value)}`;
  },
});

StyleDictionary.registerTransform({
  name: 'make/rem',
  type: 'value',
  transitive: false,
  matcher: function (token) {
    return (
      token.type === 'spacing' ||
      token.type === 'sizing' ||
      token.type === 'borderRadius' ||
      token.type === 'fontSizes'
    );
  },
  transformer: StyleDictionary.transform['size/pxToRem'].transformer,
});

StyleDictionary.registerTransform({
  name: 'make/em',
  type: 'value',
  transitive: false,
  matcher: function (token) {
    return token.type === 'other';
  },
  transformer: (Token) => {
    console.log('OTHER', Token);
    if (Token.attributes.type === 'breakpoints') {
      Token.value = Token.original.value / 16 + 'em';
    }
    return Token.value;
  },
});

StyleDictionary.registerTransform({
  name: 'hexRGB/hexRGBA',
  type: 'value',
  matcher: function (token) {
    return token.group === 'color';
  },
  transformer: function (token) {
    // for sake of simplicity, in this example we assume colors are always in the format #xxxxxx
    return token.value.replace(/^#/, '#FF');
  },
});

StyleDictionary.registerTransform({
  name: 'unitless/dp-sp',
  type: 'value',
  matcher: function (token) {
    return token.group === 'typography' || token.group === 'spacing';
  },
  transformer: function (token) {
    // in Android font sizes are expressed in "sp" units
    let unit = token.group === 'typography' ? 'sp' : 'dp';
    return `${token.value}${unit}`;
  },
});

StyleDictionary.registerTransform({
  // this is a silly example, to show how you can apply transform to names
  name: 'name/squiggle',
  type: 'name',
  // notice: if you don't specify a matcher, the transformation will be applied to all the tokens
  transformer: function (token) {
    return token.path.join('~');
  },
});

// Typography Objects

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'figma/flatten-properties',
  matcher: ({ type }) => {
    return ['typography', 'composition', 'boxShadow'].includes(type);
  },
  transformer: ({ value, name, type }) => {
    if (!value) return;

    const entries = Object.entries(value);

    const flattendedValue = entries.reduce(
      (acc, [key, v], index) =>
        `${
          acc ? `${acc}\n  ` : ''
        }--${type}-${name}-${StyleDictionary.transform[
          'name/cti/kebab'
        ].transformer({ path: [key] }, { prefix: '' })}: ${v}${
          index + 1 === entries.length ? '' : ';'
        }`,
      `${name.includes(type) ? '' : `${type}-`}${name}-group;`
    );

    return flattendedValue;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom/web',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: [
    'attribute/cti',
    'name/cti/constant',
    'size/px',
    'color/css',
    'time/seconds',
    'ratio/REF',
  ],
});

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: [
    'attribute/cti',
    'name/cti/constant',
    'size/px',
    'color/css',
    'time/seconds',
    'ratio/REF',
  ],
});

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: [
    'figma/flatten-properties',
    'attribute/cti',
    'name/cti/kebab',
    'make/rem',
    'make/em',
    // 'color/css',
    // 'time/seconds',
    // 'color/css',
  ],
});

// You can use the .registerParser() method like this

StyleDictionary.registerFormat({
  name: 'scssvars',
  formatter: _.template(fs.readFileSync(__dirname + '/varsvarsvars.template')),
});

StyleDictionary.registerFormat({
  name: 'scssvar_local_global',
  formatter: function ({ dictionary, options }) {
    let dict = {};

    // Reorganize Dictionary on Component/Root level
    dictionary.allProperties.map((prop) => {
      if (!dict[prop.attributes.category]) dict[prop.attributes.category] = {};

      dict[prop.attributes.category][prop.name] = prop;
    });

    // Assign as global or local Css variable
    let cssvars = '';

    for (const [key, value] of Object.entries(dict)) {
      cssvars += `%${key} {\n`;

      for (const [k, v] of Object.entries(value)) {
        if (dictionary.usesReference(v.original.value)) {
          // console.log(k, v.value.replace, v.value);
          const reference = dictionary.getReferences(v.original.value);
          // eslint-disable-next-line no-loop-func
          reference.forEach((ref) => {
            // value should be a string that contains the resolved reference
            // because Style Dictionary resolved this in the resolution step.
            // Here we are undoing that by replacing the value with
            // the reference's name
            if (ref.value && ref.name) {
              v.value = v.value.replace(ref.value, function () {
                return `var(--${ref.name})`;
              });
            }
          });
          cssvars += `\t--${v.name}: ${v.value};\n`; //--${prop.name}: ${prop.value};
        } else {
          cssvars += `\t--${v.name}: ${v.value};\n`; //--${prop.name}: ${prop.value};
        }
      }
      cssvars += '}\n';
    }

    return cssvars;
  },
});

module.exports = {
  // Or you can add parsers directly on the configuration object here like this:
  // parsers: [{
  //   pattern: /\.json$/,
  //   parse: ({contents, filePath}) => {}
  // }],
  source: ['./libs/styles/figmatokens/**/*.json'],

  platforms: {
    /*
    scss: {
      transformGroup: 'scss',
      prefix: '',
      outputReferences: false,
      buildPath: './libs/styles/src/tokens/',
      files: [
        {
          destination: '_scssvars.scss',
          format: 'scssvars',
        },
      ],
      //actions: ['copy_assets'],
    },

    web: {
      transformGroup: 'custom/web',
      buildPath: './libs/styles/src/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'FromFigma2JS',
        },
      ],
    },
*/
    css: {
      transformGroup: 'custom/css',
      buildPath: './libs/styles/src/tokens/',
      basePxFontSize: 16,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            scale: 12,
            outputReferences: true,
          },
        },
      ],
    },

    scssvariables: {
      transformGroup: 'custom/css',
      buildPath: './libs/styles/src/tokens/',
      basePxFontSize: 16,
      files: [
        {
          destination: '_variables.scss',
          format: 'scssvar_local_global',
          options: {
            scale: 12,
            outputReferences: true,
          },
        },
      ],
    },
  },
};

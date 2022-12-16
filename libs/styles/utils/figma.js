function figmaCompatibilityParser(tokens) {
  // Recursively goes through values and trims `.value` away from it
  // Since reference values in figma tokens plugin trim this
  // Also trims away the name prop, figma tokens plugins does grouping itself
  const _trim = (_obj) => {
    Object.keys(_obj).forEach((key) => {
      if (key === 'value') {
        const val = _obj[key];
        const reg = /^\{(.*)\}$/g;
        const matches = reg.exec(val);
        if (matches && matches[1]) {
          _obj[key] = val.replace('.value', '');
        }
      } else if (key === 'name') {
        delete _obj[key];
      } else if (typeof _obj[key] === 'object') {
        _trim(_obj[key]);
      }
    });
  };

  // In order for reference tokens to work in the figma plugin
  // we actually want the original value as the value instead of the
  // resolved final value that style-dictionary gives us.
  const _original = (_obj) => {
    Object.keys(_obj).forEach((key) => {
      if (key === 'original') {
        _obj.value = _obj.original.value;
      } else if (typeof _obj[key] === 'object') {
        _original(_obj[key]);
      }
    });
  };

  // Move `"global": true` marked token files to "global" tokenset,
  // e.g. base tokens like colors, spacing, typography etc.
  // other files will be its own tokenset,
  // these are usually tokens for individual UI components
  const _global = (_obj) => {
    console.log(_obj);
    _obj.global = {};
    Object.keys(_obj).forEach((key) => {
      if (typeof _obj[key] === 'object') {
        Object.keys(_obj[key]).forEach((_key) => {
          if (_key === 'global' && _obj[key][_key] === true) {
            delete _obj[key][_key];
            _obj.global[key] = _obj[key];
            delete _obj[key];
          }
        });
      }
    });
  };

  const newObj = { ...tokens }; // clone original
  _trim(newObj);
  _global(newObj);
  _original(newObj);

  return newObj;
}

module.exports = figmaCompatibilityParser;

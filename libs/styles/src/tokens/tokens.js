

const Tokens = {
    
        "sizing" : {
                AVATAR_SMALL: 24, 
                CHIPS_XL: 18, 
                CHIPS_L: 14, 
                CHIPS_M: 12, 
                CHIPS_S: 9, 
                GLOBAL_4: 4, 
                GLOBAL_8: 8, 
                GLOBAL_12: 12, 
                GLOBAL_16: 16, 
                GLOBAL_20: 20, 
                GLOBAL_24: 24, 
                GLOBAL_32: 32, 
                GLOBAL_40: 40, 
                GLOBAL_48: 48, 
                GLOBAL_56: 56, 
                GLOBAL_64: 64, 
                GLOBAL_256: 256, 
                GLOBAL_512: 512, 
                SCALE: 8, 
                INPUT_SIZE_SMALL: 32, 
                INPUT_SIZE_MEDIUM: 40, 
                INPUT_SIZE_LARGE: 48, 
        },
    
        "color" : {
                AVATAR_DEFAULT_BG: "#1d36b9" , 
                COLOR_DESCRIPTION: "#000000" , 
                COLOR_BACKGROUND: "#ffffff" , 
                COLOR_TEAL_100: "#ffaddd" , 
                COLOR_TEAL_200: "#fe5cbb" , 
                COLOR_TEAL_300: "#d2087d" , 
                COLOR_TEAL_400: "#b6076d" , 
                COLOR_TEAL_500: "#880552" , 
                COLOR_TEAL_600: "#ac0667" , 
                COLOR_TEAL_700: "#250116" , 
                COLOR_TEAL_800: "#250116" , 
                COLOR_TEAL_900: "#250116" , 
                COLOR_TEAL_1000: "#410226" , 
                COLOR_TEAL_1100: "#250116" , 
                COLOR_BRAND_100: "#b9c4fb" , 
                COLOR_BRAND_200: "#8395f7" , 
                COLOR_BRAND_300: "#4662f3" , 
                COLOR_BRAND_400: "#1d36b9" , 
                COLOR_BRAND_500: "#192fa1" , 
                COLOR_BRAND_600: "#152989" , 
                COLOR_BRAND_700: "#080f33" , 
                COLOR_BRAND_800: "#111f6a" , 
                COLOR_BRAND_900: "#101e65" , 
                COLOR_BRAND_1000: "#0b1547" , 
                COLOR_BRAND_1100: "#080f33" , 
                COLOR_GRAY01_100: "#e9e9e9" , 
                COLOR_GRAY01_200: "#d9d9d9" , 
                COLOR_GRAY01_300: "#b5b5b5" , 
                COLOR_GRAY01_400: "#949494" , 
                COLOR_GRAY01_500: "#767676" , 
                COLOR_GRAY01_600: "#595959" , 
                COLOR_GRAY01_700: "#3d3d3d" , 
                COLOR_GRAY01_800: "#373737" , 
                COLOR_GRAY01_900: "#323232" , 
                COLOR_GRAY01_1000: "#2c2c2c" , 
                COLOR_GRAY01_1100: "#212121" , 
                COLOR_LIGHTPURPLE_100: "#eee6fc" , 
                COLOR_LIGHTPURPLE_200: "#e1d4fb" , 
                COLOR_LIGHTPURPLE_300: "#c3a7f6" , 
                COLOR_LIGHTPURPLE_400: "#a77ff2" , 
                COLOR_LIGHTPURPLE_500: "#8a55ee" , 
                COLOR_LIGHTPURPLE_600: "#6723e9" , 
                COLOR_LIGHTPURPLE_700: "#4306b5" , 
                COLOR_LIGHTPURPLE_800: "#3d06a5" , 
                COLOR_LIGHTPURPLE_900: "#380596" , 
                COLOR_LIGHTPURPLE_1000: "#320588" , 
                COLOR_LIGHTPURPLE_1100: "#27046a" , 
                COLOR_SHAMROCKGREEN100: "#8efbf9" , 
                COLOR_SHAMROCKGREEN200: "#07f2ed" , 
                COLOR_SHAMROCKGREEN300: "#06cac5" , 
                COLOR_SHAMROCKGREEN400: "#05a5a2" , 
                COLOR_SHAMROCKGREEN500: "#048481" , 
                COLOR_SHAMROCKGREEN600: "#036361" , 
                COLOR_SHAMROCKGREEN700: "#024443" , 
                COLOR_SHAMROCKGREEN800: "#023e3d" , 
                COLOR_SHAMROCKGREEN900: "#023937" , 
                COLOR_SHAMROCKGREEN1000: "#013231" , 
                COLOR_SHAMROCKGREEN1100: "#012626" , 
                COLOR_SEMANTIC_STATE_HOVER_DEFAULT: "#380596" , 
                COLOR_SEMANTIC_STATE_HOVER_ALERT: "#ff8900" , 
                COLOR_SEMANTIC_STATE_DISABLED_DEFAULT: "#c3a7f6" , 
                COLOR_SEMANTIC_ALERT: "#ff8900" , 
                COLOR_SEMANTIC_WHITE: "#ffffff" , 
                COLOR_SEMANTIC_DEFAULT: "#4306b5" , 
                COLOR_SEMANTIC_ACTIVE: "#595959" , 
                COLOR_0_SEMANTIC_DISABLED: "#ffafaf" , 
        },
    
        "typography" : {
                BUTTON_DEFAULT_FONTFAMILY: "Inter" , 
                BUTTON_DEFAULT_FONTSIZE: 14, 
                BUTTON_DEFAULT_LINEHEIGHT: 16, 
                BUTTON_DEFAULT_FONTWEIGHT: "Semi Bold" , 
                BUTTON_SMALL_FONTFAMILY: "Inter" , 
                BUTTON_SMALL_FONTSIZE: 10, 
                BUTTON_SMALL_LINEHEIGHT: 16, 
                BUTTON_SMALL_FONTWEIGHT: "Bold" , 
                BUTTON_SMALL_TEXTCASE: "Uppercase" , 
                BUTTON_LARGE_FONTFAMILY: "Inter" , 
                BUTTON_LARGE_FONTSIZE: 18, 
                BUTTON_LARGE_LINEHEIGHT: 24, 
                BUTTON_LARGE_FONTWEIGHT: "Semi Bold" , 
                BUTTON_HUGE_FONTFAMILY: "Inter" , 
                BUTTON_HUGE_FONTSIZE: 24, 
                BUTTON_HUGE_LINEHEIGHT: 32, 
                BUTTON_HUGE_FONTWEIGHT: "Semi Bold" , 
                TYPO_COMPONENTS_SMALL_FONTFAMILY: "Inter" , 
                TYPO_COMPONENTS_SMALL_FONTWEIGHT: "Medium" , 
                TYPO_COMPONENTS_SMALL_FONTSIZE: 9, 
                TYPO_COMPONENTS_SMALL_TEXTCASE: "Uppercase" , 
                TYPO_COMPONENTS_SMALL_LINEHEIGHT: 16, 
                TYPO_COMPONENTS_MEDIUM_FONTFAMILY: "Inter" , 
                TYPO_COMPONENTS_MEDIUM_FONTWEIGHT: "Medium" , 
                TYPO_COMPONENTS_MEDIUM_FONTSIZE: 12, 
                TYPO_COMPONENTS_MEDIUM_LINEHEIGHT: 16, 
                TYPO_COMPONENTS_NORMAL_FONTFAMILY: "Inter" , 
                TYPO_COMPONENTS_NORMAL_FONTWEIGHT: "Regular" , 
                TYPO_COMPONENTS_NORMAL_FONTSIZE: 16, 
                TYPO_COMPONENTS_NORMAL_LINEHEIGHT: 24, 
                TYPO_COMPONENTS_LARGE_FONTFAMILY: "Inter" , 
                TYPO_COMPONENTS_LARGE_FONTWEIGHT: "Semi Bold" , 
                TYPO_COMPONENTS_LARGE_FONTSIZE: 14, 
                TYPO_COMPONENTS_LARGE_LINEHEIGHT: 16, 
                TYPO_COMPONENTS_HUGE_FONTFAMILY: "Inter" , 
                TYPO_COMPONENTS_HUGE_FONTWEIGHT: "Semi Bold" , 
                TYPO_COMPONENTS_HUGE_FONTSIZE: 18, 
                TYPO_COMPONENTS_HUGE_LINEHEIGHT: , 
                TYPO_HEADER_H1_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H1_FONTWEIGHT: "Extra Bold" , 
                TYPO_HEADER_H1_LINEHEIGHT: 160, 
                TYPO_HEADER_H1_FONTSIZE: 4, 
                TYPO_HEADER_H2_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H2_FONTWEIGHT: "Extra Bold" , 
                TYPO_HEADER_H2_LINEHEIGHT: 150, 
                TYPO_HEADER_H2_FONTSIZE: 4, 
                TYPO_HEADER_H3_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H3_FONTWEIGHT: "Bold" , 
                TYPO_HEADER_H3_LINEHEIGHT: 140, 
                TYPO_HEADER_H3_FONTSIZE: 3, 
                TYPO_HEADER_H4_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H4_FONTWEIGHT: "Bold" , 
                TYPO_HEADER_H4_LINEHEIGHT: 125, 
                TYPO_HEADER_H4_FONTSIZE: 2, 
                TYPO_HEADER_H5_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H5_FONTWEIGHT: "Bold" , 
                TYPO_HEADER_H5_LINEHEIGHT: 125, 
                TYPO_HEADER_H5_FONTSIZE: 1, 
                TYPO_HEADER_H6_FONTFAMILY: "Inter" , 
                TYPO_HEADER_H6_FONTWEIGHT: "Bold" , 
                TYPO_HEADER_H6_LINEHEIGHT: 125, 
                TYPO_HEADER_H6_FONTSIZE: 1, 
                TYPO_SIZES_XXL_FONTFAMILY: "Inter" , 
                TYPO_SIZES_XXL_FONTWEIGHT: "Extra Bold" , 
                TYPO_SIZES_XXL_LINEHEIGHT: 125, 
                TYPO_SIZES_XXL_FONTSIZE: 16, 
                TYPO_SIZES_LARGE_FONTFAMILY: "Inter" , 
                TYPO_SIZES_LARGE_FONTWEIGHT: "Extra Bold" , 
                TYPO_SIZES_LARGE_LINEHEIGHT: 125, 
                TYPO_SIZES_LARGE_FONTSIZE: 16, 
                TYPO_SIZES_HUGE_FONTFAMILY: "Inter" , 
                TYPO_SIZES_HUGE_FONTWEIGHT: "Extra Bold" , 
                TYPO_SIZES_HUGE_LINEHEIGHT: 125, 
                TYPO_SIZES_HUGE_FONTSIZE: 16, 
        },
    
        "fontSizes" : {
                FONTSIZE_BUTTON_HUGE: 12, 
                60PX: 60, 
                BASE: 16, 
                COMPONENTS_HUGE: 24, 
                COMPONENTS_MD: 12, 
        },
    
        "borderWidth" : {
                BORDER_1: 1, 
                BORDER_2: 2, 
                BORDER_3: 3, 
                CHECKBOX_BORDERWIDTH_SMALL: 1, 
                CHECKBOX_BORDERWIDTH_MEDIUM: 1, 
                CHECKBOX_BORDERWIDTH_LARGE: 2, 
                CHECKBOX_BORDERWIDTH_HUGE: 3, 
        },
    
        "borderRadius" : {
                BORDER_RADIUS_100: 100, 
                BORDER_RADIUS_SMALL: 1, 
                BORDER_RADIUS_MEDIUM: 2, 
                BORDER_RADIUS_LARGE: 3, 
                BORDER_RADIUS_HUGE: 4, 
                BORDER_RADIUS_NONE: 0, 
                SMALL: 1, 
                RADII_SM: 2, 
                RADII_MD: 3, 
                RADII_LG: 4, 
                RADII_PILL: 100, 
                RADII_NONE: 0, 
        },
    
        "spacing" : {
                MEDIUM: 6, 
                LARGE: 8, 
                CHECKBOX_HUGE: 10, 
                SPACING_GLOBAL_1: 1, 
                SPACING_GLOBAL_2: 2, 
                SPACING_GLOBAL_3: 3, 
                SPACING_GLOBAL_4: 4, 
                SPACING_GLOBAL_6: 6, 
                SPACING_GLOBAL_8: 8, 
                SPACING_GLOBAL_12: 12, 
                SPACING_GLOBAL_16: 16, 
                SPACING_GLOBAL_24: 24, 
                SPACING_GLOBAL_32: 32, 
                SPACING_GLOBAL_40: 40, 
                SPACING_GLOBAL_64: 64, 
                LOREM: 999, 
        },
    
        "fontWeights" : {
                SANS_500: "Semi Bold" , 
                SANS_800: "Extra Bold" , 
                SANS_MEDIUM: "Medium" , 
                SANS_BOLD: "Bold" , 
                SANS_LIGHT: "light" , 
        },
    
        "fontFamilies" : {
                SANS: "Inter" , 
        },
    
        "lineHeights" : {
                LINEHEIGHT_ONETHIRD: 1.45, 
        },
    
        "boxShadow" : {
                SHADOWS_DROPSHADOW_FOCUS_X: 0, 
                SHADOWS_DROPSHADOW_FOCUS_Y: 0, 
                SHADOWS_DROPSHADOW_FOCUS_BLUR: 0, 
                SHADOWS_DROPSHADOW_FOCUS_SPREAD: 2, 
                SHADOWS_DROPSHADOW_FOCUS_COLOR: "#8395f7" , 
                SHADOWS_DROPSHADOW_FOCUS_TYPE: "dropShadow" , 
        },
    
} 

export default Tokens
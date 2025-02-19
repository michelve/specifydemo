/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'Color styles-Test colour style': 'linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, rgb(179, 244, 255) 32.499998807907104%, rgb(0, 0, 0) 100%)'
      },
      fontFamily: {
        'Text styles-Input label': 'Inter',
        'Text styles-Input text': 'Inter',
        'Text styles-Button': 'Inter'
      },
      fontWeight: {
        'Text styles-Input label': 'medium',
        'Text styles-Input text': 'regular',
        'Text styles-Button': 'medium'
      },
      textIndent: {
        'Text styles-Input label': '0px',
        'Text styles-Input text': '0px',
        'Text styles-Button': '0px'
      },
      fontSize: {
        'Text styles-Input label': '20px',
        'Text styles-Input text': '16px',
        'Text styles-Button': '18px'
      },
      lineHeight: {
        'Text styles-Input label': '24px',
        'Text styles-Input text': '20px',
        'Text styles-Button': '20px'
      },
      letterSpacing: {
        'Text styles-Input label': '0%',
        'Text styles-Input text': '0%',
        'Text styles-Button': '0%'
      },
      spacing: {
        'base-base-radius-lg': '12px',
        'base-base-radius-md': '8px',
        'base-base-radius-sm': '4px',
        'base-base-size-2xl': '24px',
        'base-base-size-2xs': '1px',
        'base-base-size-lg': '12px',
        'base-base-size-md': '8px',
        'base-base-size-none': '0px',
        'base-base-size-sm': '4px',
        'base-base-size-xl': '16px',
        'base-base-size-xs': '2px',
        'base-base-font-linespacing-2xl': '32px',
        'base-base-font-linespacing-lg': '24px',
        'base-base-font-linespacing-md': '20px',
        'base-base-font-linespacing-xl': '28px',
        'base-base-font-size-2xl': '24px',
        'base-base-font-size-3xl': '32px',
        'base-base-font-size-lg': '18px',
        'base-base-font-size-md': '16px',
        'base-base-font-size-xl': '20px',
        'base-base-font-weight-bold': '800px',
        'base-base-font-weight-regular': '400px',
        'base-base-font-weight-semibold': '500px',
        'base-base-font-weight-thin': '100px',
        'global-global-animation-duration': '200px',
        'global-global-size-border-width': '1px',
        'global-global-size-shadow-blur': '4px',
        'global-global-size-shadow-spread': '0px',
        'global-global-size-shadow-xOffset': '0px',
        'global-global-size-shadow-yOffset': '2px',
        'specify-ver': '89px'
      },
      colors: {
        base: {
          base: {
            colour: {
              blue: {
                '100': 'rgb(189, 221, 255)',
                '200': 'rgb(139, 196, 255)',
                '300': 'rgb(1, 119, 204)',
                '400': 'rgb(0, 41, 76)'
              },
              grey: {
                '100': 'rgb(217, 217, 217)',
                '200': 'rgb(191, 191, 191)',
                '300': 'rgb(116, 116, 116)',
                '400': 'rgb(40, 40, 40)'
              },
              pink: {
                '100': 'rgb(255, 198, 224)',
                '200': 'rgb(255, 154, 203)',
                '300': 'rgb(205, 0, 135)',
                '400': 'rgb(77, 0, 48)'
              },
              static: {
                black: 'rgb(0, 0, 0)',
                'black@10': 'rgba(0, 0, 0, 0.1)',
                'black@30': 'rgba(0, 0, 0, 0.3)',
                'black@50': 'rgba(0, 0, 0, 0.5)',
                transparent: 'rgba(255, 255, 255, 0)',
                white: 'rgb(255, 255, 255)'
              }
            }
          }
        },
        brand: {
          brand: {
            colour: {
              accent: {
                '100': 'rgb(189, 221, 255)',
                '200': 'rgb(139, 196, 255)',
                '300': 'rgb(1, 119, 204)',
                '400': 'rgb(0, 41, 76)'
              },
              primary: {
                '100': 'rgb(255, 198, 224)',
                '200': 'rgb(255, 154, 203)',
                '300': 'rgb(205, 0, 135)',
                '400': 'rgb(77, 0, 48)'
              }
            }
          }
        },
        global: {
          global: {
            colour: {
              iconOnLight: 'rgb(40, 40, 40)',
              shadow: 'rgba(0, 0, 0, 0.3)',
              textOnLight: 'rgb(40, 40, 40)',
              action: {
                background: 'rgb(205, 0, 135)',
                iconOnBg: 'rgb(255, 255, 255)',
                textOnBg: 'rgb(255, 255, 255)'
              }
            }
          }
        }
      }
    }
  }
}
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const MyPreset = definePreset(Aura, {
  semantic: {
    radius: {
      sm: "4px",
      base: "6px",
      lg: "8px",
    },
    shadow: {
      /* xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      xxl: "0 25px 50px -12px rgb(0 0 0 / 0.25)", */
    },
    colors: {
      global: {
        main: "#4a2e7d",
        secondary: "#4a2e7d80",
        text: "#474343",
        bgLight: "#ffffff",
        bgGray: "#b4b2b2",
        grayTable: "#525252",
        warning: "#f59e0b",
        success: "#00c247",
        error: "#dc2626",
        information: "#3b82f6",
        black: "#0c0c0c",
        white: "#ffffff",
        dashTabHover: "#f5f7f7",
        dashTabActive: "#e8ebeb",
        dashTabBorder: "#dddddd",
        dashIcon: "#a4a4a4",
      },
      primary: {
        50: "#efeeff",
        100: "#e3e0ff",
        200: "#cfc8fd",
        300: "#b2a6fb",
        400: "#9e83f6",
        500: "#8e65ef",
        600: "#8248e3",
        700: "#723ac8",
        800: "#5c31a2",
        900: "#4a2e7d", // Basic color
        950: "#2e1c4a",
      },
      text: {
        50: "#f8f7f7",
        100: "#efefef",
        200: "#dddada",
        300: "#bfbaba",
        400: "#9b9595",
        500: "#7f7878",
        600: "#686161",
        700: "#554f4f",
        800: "#474343", // Basic color
        900: "#3f3c3b",
        950: "#2a2727",
      },
      warning: {
        50: "#fff8eb",
        100: "#feeac7",
        200: "#fdd28a",
        300: "#fcbb4d",
        400: "#fbab24",
        500: "#f59e0b", // Basic color
        600: "#d98b06",
        700: "#b47409",
        800: "#92610e",
        900: "#78510f",
        950: "#452c03",
      },
      success: {
        50: "#eefff3",
        100: "#d7ffe5",
        200: "#b2ffcd",
        300: "#76ffa7",
        400: "#33f579",
        500: "#09de56",
        600: "#00c247", // Basic color
        700: "#049139",
        800: "#0a7131",
        900: "#0a5d2b",
        950: "#003415",
      },
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626", // Basic color
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      info: {
        50: "#eff5ff",
        100: "#dbe8fe",
        200: "#bfd7fe",
        300: "#93bbfd",
        400: "#609afa",
        500: "#3b82f6", // Basic color
        600: "#2570eb",
        700: "#1d64d8",
        800: "#1e55af",
        900: "#1e478a",
        950: "#172e54",
      },
    },
  },
  components: {
    accordion: {
      colorScheme: {
        light: {
          header: {
            color: "{colors.global.black}",
            activeColor: "{colors.global.main}",
            hoverColor: "{colors.primary.700}",
            activeHoverColor: "{colors.primary.700}",
            fontWeight: "normal",
            toggleIcon: {
              color: "{colors.global.black}",
              hoverColor: "{colors.primary.700}",
              activeColor: "{colors.global.main}",
              activeHoverColor: "{colors.primary.700}",
            },
          },
          panel: {
            borderColor: "{colors.global.main}",
          },
          content: {
            color: "{colors.global.text}",
          },
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            background: "{colors.global.white}",
            focusBorderColor: "{colors.primary.800}",
            color: "{colors.global.black}",
            placeholderColor: "{colors.global.bgGray}",
            focusRing: {
              style: "solid",
              width: "2px",
              color: "{colors.primary.200}",
              offset: "0px",
            },
            invalidBorderColor: "{colors.global.error}",
            invalidPlaceholderColor: "{colors.global.error}",
          },
        },
      },
    },
    textarea: {
      colorScheme: {
        light: {
          root: {
            background: "{colors.global.white}",
            focusBorderColor: "{colors.primary.800}",
            color: "{colors.global.black}",
            placeholderColor: "{colors.global.bgGray}",
            focusRing: {
              style: "solid",
              width: "2px",
              color: "{colors.primary.200}",
              offset: "0px",
            },
            invalidBorderColor: "{colors.global.error}",
            invalidPlaceholderColor: "{colors.global.error}",
          },
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          root: {
            checkedBackground: "{colors.global.main}",
            checkedHoverBackground: "{colors.global.main}",
            checkedBorderColor: "{colors.global.main}",
            checkedHoverBorderColor: "{colors.primary.400}",
            invalidBorderColor: "{colors.global.error}",
          },
        },
      },
    },
    toast: {
      colorScheme: {
        light: {
          root: {
            borderWidth: "1px",
          },
          info: {
            background: "{colors.info.50}",
            borderColor: "{colors.global.information}",
            color: "{colors.global.information}",
            detailColor: "{colors.global.text}",
            closeButton: {
              hoverBackground: "{colors.info.100}",
            },
          },
          success: {
            background: "{colors.success.50}",
            borderColor: "{colors.global.success}",
            color: "{colors.global.success}",
            detailColor: "{colors.global.text}",
            closeButton: {
              hoverBackground: "{colors.success.100}",
            },
          },
          warn: {
            background: "{colors.warning.50}",
            borderColor: "{colors.global.warning}",
            color: "{colors.global.warning}",
            detailColor: "{colors.global.text}",
            closeButton: {
              hoverBackground: "{colors.warning.100}",
            },
          },
          error: {
            background: "{colors.error.50}",
            borderColor: "{colors.global.error}",
            color: "{colors.global.error}",
            detailColor: "{colors.global.text}",
            closeButton: {
              hoverBackground: "{colors.error.100}",
            },
          },
        },
      },
    },
    tabs: {
      colorScheme: {
        light: {
          tablist: {
            background: "{colors.global.white}",
            borderColor: "{colors.global.dashTabBorder}",
          },
          tab: {
            borderColor: "{colors.global.dashTabBorder}",
            hoverBorderColor: "{colors.primary.400}",
            hoverBackground: "{colors.global.dashTabHover}",
            hoverColor: "{colors.primary.400}",
            activeBorderColor: "{colors.primary.700}",
            activeColor: "{colors.primary.700}",
          },
          activeBar: {
            background: "{colors.primary.700}",
          },
          tabpanel: {
            background: "{colors.global.white}",
            color: "{colors.global.text}",
            padding: "16px 18px",
          },
        },
      },
    },
    /* select: {
      colorScheme: {
        light: {
          root: {
            background: '{colors.global.white}',
            filledBackground: '{colors.global.white}',
            filledHoverBackground: '{colors.global.white}',
            filledFocusBackground: '{colors.global.white}',
            borderColor: '{colors.global.border}',
            hoverBorderColor: '{colors.global.main}',
            focusBorderColor: '{colors.global.main}',
            invalidBorderColor: '{colors.global.error}',
            color: '{colors.text.950}',
            disabledColor: '{colors.global.grayTwo}',
            placeholderColor: '{colors.global.grayTwo}',
            invalidPlaceholderColor: '{colors.global.grayTwo}',
            shadow: '{shadow.sm}',
            borderRadius: '{radius.base}',
            focusRing: {
              width: '2px',
              style: 'solid',
              color: 'rgba(21, 128, 61, 0.2)',
            },
          },
          dropdown: {
            color: '{colors.global.icon}',
          },
          overlay: {
            background: '{colors.global.white}',
            borderColor: '{colors.global.border}',
            borderRadius: '{radius.base}',
            shadow: '{shadow.lg}',
          },
          option: {
            selectedBackground: '{colors.primary.100}',
            selectedFocusBackground: '{colors.primary.100}',
          },
          checkmark: {
            color: '{colors.global.main}',
          },
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            borderColor: '{colors.global.border}',
            hoverBorderColor: '{colors.global.main}',
            focusBorderColor: '{colors.global.main}',
            focusRing: {
              width: '2px',
              style: 'solid',
              color: 'rgba(21, 128, 61, 0.2)',
            },
          },
        },
      },
    },
    radiobutton: {
      colorScheme: {
        light: {
          root: {
            background: '{colors.global.white}',
            checkedBackground: '{colors.global.main}',
            checkedHoverBackground: '{colors.primary.500}',
            borderColor: '{colors.global.border}',
            hoverBorderColor: '{colors.global.main}',
            checkedBorderColor: '{colors.global.main}',
            checkedHoverBorderColor: '{colors.primary.500}',
            checkedFocusBorderColor: '{colors.global.main}',
            invalidBorderColor: '{colors.global.error}',
          },
          icon: {
            color: '{colors.global.white}',
          },
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          root: {
            background: '{colors.global.white}',
            checkedBackground: '{colors.global.main}',
            checkedHoverBackground: '{colors.primary.500}',
            borderColor: '{colors.global.border}',
            hoverBorderColor: '{colors.global.main}',
            checkedBorderColor: '{colors.global.main}',
            checkedHoverBorderColor: '{colors.primary.500}',
            checkedFocusBorderColor: '{colors.global.main}',
            invalidBorderColor: '{colors.global.error}',
          },
          icon: {
            color: '{colors.global.white}',
            checkedColor: '{colors.global.white}',
            checkedHoverColor: '{colors.global.white}',
          },
        },
      },
    },
    datepicker: {
      colorScheme: {
        light: {
          panel: {
            background: '{colors.global.white}',
            borderColor: '{colors.global.border}',
            color: '{colors.global.text}',
            shadow: '{shadow.lg}',
          },
          header: {
            borderColor: '{colors.global.border}',
            color: '{colors.global.text}',
          },
          inputIcon: {
            color: '{colors.global.icon}',
          },
          selectMonth: {
            hoverBackground: '{colors.primary.200}',
            color: '{colors.global.text}',
            hoverColor: '{colors.global.text}',
          },
          selectYear: {
            hoverBackground: '{colors.primary.200}',
            color: '{colors.global.text}',
            hoverColor: '{colors.global.text}',
          },
          weekDay: {
            color: '{colors.global.main}',
          },
          date: {
            hoverBackground: '{colors.primary.200}',
            selectedBackground: '{colors.global.main}',
            color: '{colors.global.text}',
            hoverColor: '{colors.global.text}',
            selectedColor: '{colors.global.white}',
          },
          today: {
            background: '{colors.global.border}',
            color: '{colors.global.text}',
          },
        },
      },
    },

     */
  },
});

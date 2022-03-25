import { createTheme } from "@mui/material";

import Color from "src/assets/colors";

export const Theme = createTheme({
  palette: {
    primary: {
      main: Color.PRIMARY,
    },
    secondary: {
      main: Color.SECONDARY,
    },
    info: {
      main: Color.INFO,
    },
    success: {
      main: Color.SUCCESS,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        autoFocus: true,
        InputLabelProps: {
          color: "primary",
        },
        InputProps: {
          autoComplete: "new-password",
          color: "secondary",
        },
        inputProps: {
          "aria-autocomplete": "list",
        },
        variant: "filled"
      }
    }
  }
});
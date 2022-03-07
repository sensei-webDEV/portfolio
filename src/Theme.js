import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
          background: "transparent !important",
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          margin: "0px 6px",
          backgroundColor: "#828495",
        },
        dotActive: {
          backgroundColor: "#4be6c9",
        },
      },
    },
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

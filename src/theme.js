import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#536DFE",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

export default theme;

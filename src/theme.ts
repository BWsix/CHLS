import { createTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: pink,
    secondary: blue,
    background: {
      default: "#000",
      paper: "#222",
    },
  },
});

export default theme;

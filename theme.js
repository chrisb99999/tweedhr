import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  containers: {
    head: {
      minHeight: "100%",
      padding: "0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
    secondaryButton: {
      color: "accent",
      fontWeight: "bold",
      fontSize: 3,
      padding: "4px 10px 4px 10px",
      margin: "0 5px 0 5px",
      cursor: "pointer",
    },
    primaryButton: {
      borderRadius: "7px",
      border: "3px solid ",
      borderColor: "secondary",
      color: "text",
      backgroundColor: "secondary",
      fontWeight: "bold",
      fontSize: 3,
      padding: "4px 10px 4px 10px",
      margin: "0 5px 0 5px",
      cursor: "pointer",
    },
  },
  styles: {
    ...roboto.styles,
  },
  colors: {
    ...roboto.colors,
    secondary: "#E0712C",
  },
};

export default theme;

import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

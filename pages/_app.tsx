import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import ResetStyle from "@styles/resetStyle";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

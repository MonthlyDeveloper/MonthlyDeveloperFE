import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { theme } from "@styles/theme";
import ResetStyle from "@styles/resetStyle";
import GlobalDialog from "@components/GlobalDialog";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <RecoilRoot>
        <ResetStyle />
        <ThemeProvider theme={theme.light}>
          <Component {...pageProps} />
          <GlobalDialog />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

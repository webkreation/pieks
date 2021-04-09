import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";

import "typeface-dosis";

import Layout from "../components/Layout";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{}}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;

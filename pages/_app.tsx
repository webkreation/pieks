import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";
import "typeface-dosis";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import React from "react";
import Head from "next/head";

import Layout from "../components/global/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/design_tokens.css";
import "../styles/fonts.css";
import "../components/global/Layout.js";
import "../styles/components.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

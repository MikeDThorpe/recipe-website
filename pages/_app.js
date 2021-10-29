import Layout from "../components/global/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/fonts.css";
import "../components/global/Layout.js";
import "../styles/components.css";
import "../styles/design_tokens.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

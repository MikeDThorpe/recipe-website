import "../styles/global.css";
import "../components/global/Layout.js"
import Layout from "../components/global/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
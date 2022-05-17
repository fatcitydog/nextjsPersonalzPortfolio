import GlobalStyle from "../globalStyles";
import Layout from "../components/Layout/Layout";

import Footer from "../components/Layout/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;

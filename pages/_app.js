import GlobalStyle from "../globalStyles";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>Yik</Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import GlobalStyle from "../globalStyles";
import Layout from "../components/layout";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// FYI: Component prop == the currently active page
function PortfolioApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default PortfolioApp;

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

// FYI: Component prop == the currently active page
function PortfolioApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default PortfolioApp;

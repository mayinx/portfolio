import Header from "./layouts/page/Header";
import Footer from "./layouts/Footer";
import Head from "next/head";

export default function PageLayout({ children, pageName }) {
  return (
    <>
      <Head>
        <title>cd-codes - {pageName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

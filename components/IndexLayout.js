import Header from "./layouts/index/Header";
import Footer from "./layouts/Footer";
import Head from "next/head";

export default function IndexLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>cd-codes - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

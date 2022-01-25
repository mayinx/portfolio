// import { useScrollHandler } from "../hooks/useScrollHandler";

import Navigation from "../Navigation";
import { FaUnsplash } from "react-icons/fa";

import { MdAttribution } from "react-icons/md";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header id="top" className={`${styles.header} shadow-lg`}>
      <Navigation />
      <div className={styles.headerOverlay}>
        <div className="d-flex text-end">
          <div className="text-white">
            <h1 className="mb-3">Chris here.</h1>
            <h4 className="mb-3">Full Stack Web Developer from Cologne</h4>
            <p> - passionate about technology | currently working on Edmeda -</p>
            <a className="btn btn-outline-light btn-lg" href="#featured" role="button">
              More
            </a>
          </div>
        </div>
      </div>

      <div className={styles.headerPicAttribution}>
        <span>Photo by&nbsp;</span>
        <a
          className="link-light"
          target="_blank"
          href="https://unsplash.com/@xps?utm_source=cdco.dev&utm_medium=referral"
          rel="noreferrer"
        >
          <MdAttribution /> <span>XPS</span>
        </a>
        <span>&nbsp;/&nbsp;</span>
        <a
          className="link-light"
          target="_blank"
          href="https://unsplash.com/?utm_source=cdco.dev&utm_medium=referral"
          rel="noreferrer"
        >
          <FaUnsplash /> <span>Unsplash</span>
        </a>
      </div>
    </header>
  );
}

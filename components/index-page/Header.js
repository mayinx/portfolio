import { useScrollHandler } from "../hooks/useScrollHandler";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Header.module.css";

export default function Header() {
  // FYI: Necessary check to ensure that the window object (and thus 'document') is loaded and available
  // - otherwise Next.js throws an error claiming that 'document' is undefined - amd putting this inside
  // useEffect instead doesn't work either when calling a hook like useScrollhandler)

  // let scroll = null;

  // if (typeof window === "object") {
  // Custom Hook to determine if the filer bar should be sticky or not
  // const scroll = useScrollHandler(50, document.querySelector("main"));
  // const scroll = useScrollHandler(50, "scrollTop");
  const scroll = false;
  // }
  const navbarClass = !scroll ? `${styles.navbar}` : `${styles.navbar} ${styles.navbarSticky}`;

  return (
    <header id="top" className={`${styles.header} shadow-lg`}>
      <Navbar className={`${navbarClass} shadow-lg`} expand="lg" variant="dark">
        <Container fluid className="flex-wrap">
          {/* <Navbar.Brand href="/">Christian Daum | Full Stack Developer</Navbar.Brand> */}
          <Navbar.Brand
            href="/"
            className="d-flex flex-column align-items-start  justify-content-center flex-sm-row gap-sm-2 align-items-sm-center"
          >
            <span>Christian Daum</span>
            <span className="d-none d-sm-block text-white-50"> | </span>
            <span className={`${styles.navBrandSubhead} text-white-50`}>Full Stack Developer</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Start</Nav.Link>
              <Nav.Link href="#featured">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills & Tools</Nav.Link>
              {/* <Nav.Link href="#upcoming">Upcoming</Nav.Link> */}
              {/* <Nav.Link href="#contact">Blog</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </header>
  );
}

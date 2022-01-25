import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import styles from "./Navigation.module.scss";

export default function Navigation() {
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
    <Navbar className={`${navbarClass} shadow-lg`} expand="lg" variant="dark">
      <Container fluid className="flex-wrap">
        {/* <Navbar.Brand href="/">Christian Daum | Full Stack Developer</Navbar.Brand> */}
        <Navbar.Brand
          href="/"
          className={`${styles.navBrand} d-flex flex-column align-items-start  justify-content-center flex-sm-row gap-sm-2 align-items-sm-center`}
        >
          <span className={styles.navBrandHead}>Christian Daum</span>
          <span className="d-none d-sm-block text-white-50"> | </span>
          <span className={`${styles.navBrandSubhead} text-white-50`}>Full Stack Developer</span>
        </Navbar.Brand>
        <Navbar.Toggle className={styles.navToggler} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={styles.navLink} href="/">
              Start
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#featured">
              Projects
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#skills">
              Skills & Tools
            </Nav.Link>
            {/* <Nav.Link href="#upcoming">Upcoming</Nav.Link> */}
            {/* <Nav.Link href="#contact">Blog</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

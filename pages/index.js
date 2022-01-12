import styles from "./../styles/Index.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import { BsGithub } from "react-icons/bs";

import Image from "next/image";

import HCard from "../components/index-page/ProjectCardH";

import { projects } from "../_data/projects";

// export async function getStaticProps() {
export function getStaticProps() {
  // const { projects } = await import("../_data/projects");

  console.log("projects: ", projects);
  console.log("props.projects.more: ", projects.more);

  return { props: { projects } };
}

export default function start(props) {
  // console.log(props);
  return (
    <>
      <header className={styles.header}>
        <Navbar className={styles.navbar} fixed="top" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/">Christian Daum | Full Stack Developer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#current">Projects</Nav.Link>
                <Nav.Link href="#upcoming">Upcoming</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#contact">Blog</Nav.Link>
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
              <a className="btn btn-outline-light btn-lg" href="#current" role="button">
                More
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="current" className={styles.section}>
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className={styles.sectionHead}>Projects</h2>
                <h3 className={`${styles.sectionSubhead} text-muted`}>
                  What I'm currently working on
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <HCard {...props.projects.featured} />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="more" className={styles.section}>
          <Container>
            <Row>
              <Col className="text-center">
                <h3 className={`${styles.sectionSubhead} text-muted`}>More projects</h3>
              </Col>
            </Row>
            <Row className="d-flex gy-5 gap-5">
              {props.projects.more.map((project) => {
                return (
                  <Col xs={12} className="mb-5">
                    <HCard {...project} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

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

export default function start(props) {
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
                <HCard
                  head="Edmeda"
                  subhead="Easy remote communication & collaboration for Schools"
                  imgUrl="assets/edmeda.herokuapp.com.png"
                  description="Edmeda is a password protected MERN-Stack Web Application which enables Schools to communicate & collaborate easily and effectively via multiple Communities. Teachers, Students and Parents alike are equipped with real-time Group Chats to share information instantaneously and effortlessly. Using Edmeda, Teachers can create limitless Communities - and inside those communities a limitless number of user groups. Those Communities and their User Groups can be centered around any target audience or subject, thus enabling users to achieve a targeted communication and information exchange, even in times of Corona."
                  techStack={{
                    Languages: ["JavaScript", "HTML5", "CSS3"],
                    "Web Stack": ["MongoDB (Mongoose)", "Express.js", "React", "Node.js"],
                    More: [
                      "Socket.IO",
                      "JWT-Auth",
                      "Bcryptjs",
                      "localStorage",
                      "React",
                      "Hook",
                      "Form",
                      "React",
                      "Responsive",
                      "Axios",
                      "Gender",
                      "Detection",
                      "Faker",
                      "Heroku",
                    ],
                  }}
                  siteUrl="https://github.com/mayinx/edmeda"
                  repoUrl="https://edmeda.herokuapp.com/"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="current" className={styles.section}>
          <Container>
            <Row>
              <Col className="text-center">
                <h3 className={`${styles.sectionSubhead} text-muted`}>More projects</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card bg="light">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
                  />
                  <Card.Body>
                    <Card.Title>
                      Bello {""}
                      <span className="text-muted">Kanban-style Todo-App</span>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await import("../_data/projects.json");
  return projects;
}

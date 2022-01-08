import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import styles from "./../styles/Index.module.css";

export default function start() {
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
                <Card bg="light" className="shadow-lg">
                  <Row className="g-0">
                    <Col lg={6}>
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
                        className="shadow-lg img-fluid rounded-start"
                      />
                    </Col>
                    <Col lg={6}>
                      <Card.Body className="">
                        <Card.Title>
                          Edmeda {""}
                          <span className="text-muted blockquote-footer">Community App</span>
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Card.Text>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        {/* <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a> */}
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <Badge bg="secondary">MongoDB</Badge>{" "}
                        <Badge bg="secondary">Express.js</Badge>{" "}
                        <Badge bg="secondary">React.js</Badge> <Badge bg="secondary">Node.js</Badge>{" "}
                      </Card.Footer>
                      <Card.Footer className="text-muted">
                        <Badge bg="dark">MongoDB</Badge> <Badge bg="dark">Express.js</Badge>{" "}
                        <Badge bg="dark">React.js</Badge> <Badge bg="dark">Node.js</Badge>{" "}
                      </Card.Footer>
                      <Card.Footer className="text-muted">
                        <Badge bg="dark">MERN-Stack:</Badge> <Badge bg="secondary">MongoDB</Badge>{" "}
                        <Badge bg="secondary">Express.js</Badge>{" "}
                        <Badge bg="secondary">React.js</Badge> <Badge bg="secondary">Node.js</Badge>{" "}
                      </Card.Footer>
                    </Col>
                  </Row>
                </Card>
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

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

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
                <Card bg="light" className={`${styles.projectCard} shadow-lg h-100`}>
                  <Row className="g-0">
                    <Col lg={6} className="d-flex flex-column">
                      <Card.Img
                        className={`${styles.cardImage}  img-fluid rounded-start`}
                        variant="top"
                        src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
                      />
                    </Col>
                    <Col lg={6} className="d-flex flex-column justify-content-between">
                      <Card.Body className={styles.cardBody}>
                        <Card.Title>
                          Edmeda {""}
                          <span className="text-muted blockquote-footer">
                            Easy remote communication & collaboration for Schools
                          </span>
                        </Card.Title>
                        <Card.Text className="text-muted">
                          Edmeda is a password protected MERN-Stack Web Application which enables
                          Schools to communicate & collaborate easily and effectively via multiple
                          Communities. To achieve that, Teachers, Students and Parents alike are
                          equipped with real-time Group Chats to share information instantaneously
                          and effortlessly. Using Edmeda, Teachers can create limitless Communities
                          - and inside those communities a limitless number of user groups. Those
                          Communities and their User Groups can be centered around any target
                          audience or subject, thus enabling users to achieve a targeted
                          communication and information exchange, even in times of Corona.
                        </Card.Text>
                        {/* <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a> */}
                        <Card.Text>
                          <h6>Tech Stack</h6>

                          <ListGroup as="ul">
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="col-3">
                                <Badge bg="light" text="dark">
                                  Languages
                                </Badge>
                              </div>
                              <div className="col-9 text-end">
                                <Badge bg="secondary">JavaScript</Badge>{" "}
                                <Badge bg="secondary">HTML5</Badge>{" "}
                                <Badge bg="secondary">CSS3</Badge>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="col-3">
                                <Badge bg="light" text="dark">
                                  Web Stack
                                </Badge>{" "}
                              </div>
                              <div className="col-9 text-end">
                                <Badge bg="secondary">MongoDB (Mongoose)</Badge>{" "}
                                <Badge bg="secondary">Express.js</Badge>{" "}
                                <Badge bg="secondary">React.js</Badge>{" "}
                                <Badge bg="secondary">Node.js</Badge>{" "}
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                            >
                              <div className="col-3">
                                <Badge bg="light" text="dark">
                                  More
                                </Badge>
                              </div>
                              <div className="col-9 text-end">
                                <Badge bg="secondary">Socket.IO</Badge>{" "}
                                <Badge bg="secondary">JWT-Auth</Badge>{" "}
                                <Badge bg="secondary">bcryptjs</Badge>{" "}
                                <Badge bg="secondary">localStorage</Badge>{" "}
                                <Badge bg="secondary">React Hook Form</Badge>{" "}
                                <Badge bg="secondary">React Responsive</Badge>{" "}
                                <Badge bg="secondary">Axios</Badge>{" "}
                                <Badge bg="secondary">Gender Detection</Badge>{" "}
                                <Badge bg="secondary">Faker</Badge>{" "}
                                <Badge bg="secondary">Heroku</Badge>{" "}
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className={styles.cardFooter}>
                        <Card.Link href="#">Details</Card.Link>
                        <Card.Link href="https://github.com/mayinx/edmeda">Github</Card.Link>
                        <Card.Link href="https://edmeda.herokuapp.com/">Site</Card.Link>
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

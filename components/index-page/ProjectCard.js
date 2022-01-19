import styles from "./ProjectCard.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import { BsGithub } from "react-icons/bs";
import { SiHeroku, SiVercel } from "react-icons/si";

export default function ProjectCard(props) {
  const { name, subhead, description, motivation, techStack, imgUrl, provider, siteUrl, repoUrl } =
    props;

  const providerIco =
    provider === "Heroku" ? <SiHeroku size="1.5rem" /> : <SiVercel size="1.5rem" />;

  return (
    <Card bg="light" className={`${styles.projectCard} shadow-lg h-100`}>
      <Row className="g-0">
        <Col xs={12} className="d-flex flex-column">
          <Card.Img className={`${styles.cardImage} img-fluid`} variant="top" src={imgUrl} />
        </Col>
        <Col xs={12} className="d-flex flex-column justify-content-between">
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>
              {name} {""}
              <span className="text-muted blockquote-footer">{subhead}</span>
            </Card.Title>
            <Card.Text className="text-mutedmb-4">{description}</Card.Text>
            {motivation && (
              <>
                <h5>Motivation</h5>
                <Card.Text className="text-mutedmb-4">{motivation}</Card.Text>
              </>
            )}
            <h5>Tech Stack</h5>
            <Card.Text>
              <ListGroup as="ul">
                {Object.entries(techStack).map(([category, badges], idx) => {
                  return (
                    <ListGroup.Item
                      as="li"
                      key={idx}
                      className="row d-flex justify-content-between align-items-center"
                    >
                      <div className="col-12 col-sm-3 col-lg-6">
                        <h6 className="mb-1 mb-sm-0 text-black-50">{category}</h6>
                      </div>
                      <div className="col-12 col-sm-9 col-lg-6 d-flex flex-row flex-wrap gap-1 gap-sm-1 justify-content-end">
                        {badges.map((badge) => {
                          return (
                            <>
                              <Badge className="small" bg="secondary">
                                {badge}
                              </Badge>
                            </>
                          );
                        })}
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.cardFooter}>
            <Button
              target="_blank"
              // size="md"
              className="rounded-3 d-flex justify-content-center align-items-center"
              variant="outline-secondary"
              href={repoUrl}
            >
              <BsGithub size="1.5rem" /> <span className="ms-1">Code</span>
            </Button>

            <Button
              target="_blank"
              // size="md"
              className="rounded-3 d-flex justify-content-center align-items-center"
              variant="outline-secondary"
              href={siteUrl}
            >
              {providerIco} <span className="ms-1">App</span>
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

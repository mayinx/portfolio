import styles from "./ProjectCardH.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import { BsGithub } from "react-icons/bs";

export default function hCard(props) {
  const { head, subhead, description, techStack, imgUrl, siteUrl, repoUrl } = props;

  return (
    <Card bg="light" className={`${styles.projectCard} shadow-lg h-100`}>
      <Row className="g-0">
        <Col xl={8} className="d-flex flex-column">
          <Card.Img
            className={`${styles.cardImage} img-fluid`}
            variant="top"
            src={imgUrl}
            // src="https://images.unsplash.com/photo-1593642634443-44adaa06623a"
          />
        </Col>
        <Col xl={4} className="d-flex flex-column justify-content-between">
          <Card.Body className={styles.cardBody}>
            <Card.Title>
              {head} {""}
              <span className="text-muted blockquote-footer">{subhead}</span>
            </Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <Card.Text>
              <h6>Tech Stack</h6>
              <ListGroup as="ul">
                {Object.entries(techStack).map(([category, badges]) => {
                  return (
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="col-3">
                        <Badge bg="light" text="dark">
                          {category}
                        </Badge>
                      </div>
                      <div className="col-9 text-end">
                        {badges.map((badge) => {
                          return (
                            <>
                              <Badge bg="secondary">{badge}</Badge>&nbsp;
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
              size="sm"
              className="rounded-3"
              variant="outline-secondary"
              href={siteUrl}
            >
              <BsGithub /> Code
            </Button>

            <Button
              target="_blank"
              size="sm"
              className="rounded-3"
              variant="outline-secondary"
              href={repoUrl}
            >
              <BsGithub /> App
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

import styles from "./ProjectCardH.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import { BsGithub } from "react-icons/bs";

export default function hCard(props) {
  const { name, subhead, description, techStack, imgUrl, siteUrl, repoUrl } = props;
  console.log("hCardProps: ", props);

  return (
    <Card bg="light" className={`${styles.projectCard} shadow-lg h-100`}>
      <Row className="g-0">
        <Col xs={12} className="d-flex flex-column">
          <Card.Img className={`${styles.cardImage} img-fluid`} variant="top" src={imgUrl} />
        </Col>
        <Col xs={12} className="d-flex flex-column justify-content-between">
          <Card.Body className={styles.cardBody}>
            <Card.Title className="h4">
              {name} {""}
              <span className="text-muted blockquote-footer">{subhead}</span>
            </Card.Title>
            <Card.Text className="text-mutedmb-4">{description}</Card.Text>
            <Card.Text>
              <h5>Tech Stack</h5>
              <ListGroup as="ul">
                {Object.entries(techStack).map(([category, badges]) => {
                  return (
                    <ListGroup.Item
                      as="li"
                      className="row d-flex justify-content-between align-items-center"
                    >
                      <div className="col-12 col-sm-3 col-lg-6">
                        <h6 className="mb-1 mb-sm-0 text-black-50">{category}</h6>
                      </div>
                      <div className="col-12 col-sm-9 col-lg-6 text-end">
                        {badges.map((badge) => {
                          return (
                            <>
                              <Badge className="small" bg="secondary">
                                {badge}
                              </Badge>
                              &nbsp;
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
              href={repoUrl}
            >
              <BsGithub /> Code
            </Button>

            <Button
              target="_blank"
              size="sm"
              className="rounded-3"
              variant="outline-secondary"
              href={siteUrl}
            >
              <BsGithub /> App
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

import styles from "./../styles/Index.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCard from "../components/shared/ProjectCard";

import PageLayout from "../components/PageLayout";

import { archivedProjects } from "../_data/archivedProjects";

// export async function getStaticProps() {
export function getStaticProps() {
  // const { projects } = await import("../_data/projects");
  return { props: { archivedProjects } };
}

export default function Archive() {
  return (
    <PageLayout pageName="Ancient Archives">
      <section id="more" className={styles.section + " " + styles.moreSection}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.sectionHead}>Ancient Archives</h2>
              <h3 className={`${styles.sectionSubhead} text-muted`}>
                What I created when I didn&apos;t know better
              </h3>
            </Col>
          </Row>
          <Row className="d-flex gy-5 gap-5">
            {archivedProjects.rails.map((project, idx) => {
              return (
                <Col xs={12} key={idx} className="mb-5">
                  <ProjectCard {...project} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </PageLayout>
  );
}

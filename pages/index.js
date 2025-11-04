import styles from "./../styles/Index.module.css";
import React from "react";

import Obfuscate from "react-obfuscate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { FaXingSquare } from "react-icons/fa";

import Image from "next/image";

import ProjectCard from "../components/shared/ProjectCard";
import SkillsSection from "../components/index-page/SkillsSection";

import { projects } from "../_data/projects";
import { skills } from "../_data/skills";

import IndexLayout from "../components/IndexLayout";

// export async function getStaticProps() {
export function getStaticProps() {
  // const { projects } = await import("../_data/projects");
  return { props: { projects, skills } };
}

// FYI: was
//  export default function start
export default function Index({ projects, skills }) {
  return (
    <IndexLayout pageName="Start">
      <section
        id="featured"
        className={styles.section + " " + styles.currentSection}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.sectionHead}>Projects</h2>
              <h3 className={`${styles.sectionSubhead} text-muted`}>
                What I&apos;m currently working on
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard {...projects.featured} />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="more" className={styles.section + " " + styles.moreSection}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.sectionHead}>Previous Work</h2>
              <h3 className={`${styles.sectionSubhead} text-muted`}>
                More projects I&lsquo;ve worked on recently
              </h3>
            </Col>
          </Row>
          <Row className="d-flex gy-5 gap-5">
            {projects.more.map((project, idx) => {
              return (
                <Col xs={12} key={idx} className="mb-5">
                  <ProjectCard {...project} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/*    About  */}
      <section
        id="about"
        className={styles.section + " " + styles.aboutSection}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className={styles.sectionHead}>About me</h2>
              <h3 className={`${styles.sectionSubhead} text-muted`}>
                I thought you&lsquo;d never ask.
              </h3>
            </Col>
          </Row>
          <Row className={`${styles.aboutMe} gy-5 gy-lg-0 px-5`}>
            <Col
              xs={12}
              lg={4}
              className="p-lg-4 mt-lg-0 d-flex justify-content-center align-items-center"
            >
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  position: "relative",
                }}
              >
                <Image
                  className={`${styles.aboutProfileImage} rounded-full`}
                  src="/assets/profile-pic-spaced3-500x500.png"
                  width={250}
                  height={250}
                  alt="profile image"
                  priority
                ></Image>
              </div>
            </Col>
            <Col
              xs={12}
              lg={8}
              className="p-lg-4 mt-lg-0 d-flex flex-column justify-content-center align-items-center align-items-lg-start"
            >
              {" "}
              <h3 className="mb-3 text-center text-lg-start">Chris here.</h3>
              <h4
                style={{ color: "#d2d2d2 !important" }}
                className="mb-3 text-center text-lg-start"
              >
                Full Stack Web Developer from Cologne
              </h4>
              <ul className={`${styles.aboutTldrList} lead fw-500 text-light`}>
                <li>Passionate about MERN- & Jamstack development.</li>
                <li>
                  Currently working on Edmeda, a multi-community app for schools
                  with realtime group chats.
                </li>
                <li>Background in Media Science & IT-Projectmanagement.</li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 mt-0 mt-1 px-5">
            <Col xs={12} lg={8}>
              <h3 className="text-light">Hi there.</h3>
              <p className="lead fw-normal text-light">
                I&apos;m a passionate full-stack Web Developer with a background
                in Media Science, IT-Projectmanagment & Online-Marketing. My
                strengths lie within the development of MERN- & Jamstack web
                applications. During my studies I used to work with Ruby on
                Rails, both for university projects and as a freelancer. I live
                in Cologne where I graduated in Media Science with focus on
                Computer Science.
              </p>
              <p className="lead fw-normal text-light">
                Currently I&apos;m utilizing the MERN-Stack to work on{" "}
                <a
                  href="#featured"
                  className="link-info text-decoration-underline"
                >
                  Edmeda
                </a>
                , aiming to develop a web based solution that enables schools to
                implicitly teach important digital literacies through active
                practice of digital mediated social communication &
                collaboration in community group chats.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <h3 className="text-light">Let&apos;s connect.</h3>
              <p className="lead fw-normal text-light mb-5 mb-lg-4">
                You can find me on GitHub, LinkedIn and Xing. Feel free to drop
                me an e-mail - I&apos;ll be happy to get back to you ASAP...
              </p>
              <div
                className={`${styles.aboutContactOptions} lead fw-normal text-light pt-lg-1`}
              >
                <Button
                  target="_blank"
                  size="sm"
                  className="rounded-3 shadow"
                  variant="light"
                  href="https://github.com/mayinx"
                >
                  <BsGithub size="2rem" />
                  <span className="text-nowrap ps-2">GitHub</span>
                </Button>
                <Button
                  target="_blank"
                  size="sm"
                  className="rounded-3 shadow"
                  variant="light"
                  href="https://www.linkedin.com/in/christian-daum-4397a021a/"
                >
                  <BsLinkedin size="2rem" />
                  <span className="text-nowrap ps-2">Linkedin</span>
                </Button>
                <Button
                  target="_blank"
                  size="sm"
                  className="rounded-3 shadow"
                  variant="light"
                  href="ttps://www.xing.com/profile/Christian_Daum33/"
                >
                  <FaXingSquare size="2rem" />
                  <span className="text-nowrap ps-2">Xing</span>
                </Button>

                <Obfuscate
                  className="rounded-3 shadow btn btn-light btn-sm"
                  styles={{ wordwrap: "nowrap" }}
                  email="christian.daum@protonmail.com"
                  target="_blank"
                  role="button"
                  tabIndex="0"
                  headers={{
                    subject: "[Portfolio] ",
                  }}
                >
                  <BsEnvelopeFill size="2rem" />
                  <span className="text-nowrap ps-2 text-black-75">E-Mail</span>
                </Obfuscate>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  Skills */}
      <SkillsSection sectionBaseStyle={styles.section} skills={skills} />
    </IndexLayout>
  );
}

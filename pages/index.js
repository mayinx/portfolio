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
                Full Stack Web Developer from Cologne – expanding into QA
                Automation & DevOps
              </h4>
              <ul className={`${styles.aboutTldrList} lead fw-500 text-light`}>
                <li>
                  Passionate about crafting seamless web experiences — and
                  testing them just as thoroughly.
                </li>
                <li>
                  Experienced with modern web stacks like MERN, Jamstack &
                  Vue.js — and always exploring where Dev meets QA.
                </li>
                <li>
                  Currently developing projects that bridge my web development
                  background with QA automation, testing frameworks, CI/CD
                  pipelines and modern DevOps workflows.
                </li>
                <li>Background in Media Science & IT-Projectmanagement.</li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 mt-0 mt-1 px-5">
            <Col xs={12} lg={8}>
              <h3 className="text-light">Hi there.</h3>
              <p className="lead fw-normal text-light">
                I&apos;m a passionate Full Stack Web Developer with a background
                in Media Science, IT-Projectmanagment & Online-Marketing. Over
                the past few years, I’ve built modern web applications with
                stacks like MERN, Jamstack and Vue.js — focusing on usability,
                maintainability and clean architecture. During my studies I used
                to work with Ruby on Rails, both for university projects and as
                a freelancer. I live in Cologne where I graduated in Media
                Science with focus on Computer Science.
              </p>
              <p className="lead fw-normal text-light">
                In recent years, my work has evolved toward QA Automation and
                DevOps, where I apply the same precision and curiosity that
                drive my development projects. Currently I&apos;m building
                test-driven workflows and CI/CD pipelines to bridge code quality
                and continuous delivery — a natural extension of my experience
                as a developer.
              </p>
              <p className="lead fw-normal text-light">
                Previously, I worked in a hybrid front-end and QA role,
                combining modern web development with automated testing, code
                quality tooling, and review workflows. My focus was on
                Cypress-based end-to-end testing, maintaining test coverage
                across complex e-commerce flows, and ensuring deployment
                stability through CI/CD integration.
              </p>
              <p className="lead fw-normal text-light">
                I also contributed to QA documentation, onboarding guides, and
                internal coding standards — mentoring junior and external
                developers through code reviews and refactorings that improved
                testability and overall code quality.
              </p>
              <p className="lead fw-normal text-light">
                That experience sparked my deeper interest in QA automation and
                DevOps practices — and laid the foundation for my current
                direction.
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
                  href="https://www.xing.com/profile/Christian_Daum33/"
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

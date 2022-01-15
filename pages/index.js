import styles from "./../styles/Index.module.css";
import React from "react";
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
import {
  ExpressOriginal,
  JavascriptPlain,
  NextJSOriginal,
  RailsPlain,
  JQueryPlain,
  PostgreSQLPlain,
} from "devicons-react";
import {
  DiCss3,
  DiMongodb,
  DiReact,
  DiNodejsSmall,
  DiRubyRough,
  DiRuby,
  DiHtml5,
} from "react-icons/di";

import Image from "next/image";

import HCard from "../components/index-page/ProjectCardH";
import AboutCard from "../components/index-page/AboutCard";

import { projects } from "../_data/projects";
import { skills } from "../_data/skills";

const SkillIconComponents = {
  DiCss3: DiCss3,
  ExpressOriginal: ExpressOriginal,
  DiMongodb: DiMongodb,
  DiReact: DiReact,
  DiNodejsSmall: DiNodejsSmall,
  DiRuby: DiRuby,
  JavascriptPlain: JavascriptPlain,
  DiHtml5: DiHtml5,
  NextJSOriginal: NextJSOriginal,
  RailsPlain: RailsPlain,
  JQueryPlain: JQueryPlain,
  PostgreSQLPlain: PostgreSQLPlain,
};

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
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#upcoming">Upcoming</Nav.Link>
                <Nav.Link href="#skills">Skills & Tools</Nav.Link>
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

        <section id="about" className={styles.section + " " + styles.aboutSection}>
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className={styles.sectionHead}>About me</h2>
                <h3 className={`${styles.sectionSubhead} text-muted`}>
                  I thought you never asked!
                </h3>
              </Col>
            </Row>
            <Row className={`${styles.aboutMe} p-5 shadow-lg`}>
              <Col xs={6} className="p-5">
                <Image
                  className={styles.profileImage}
                  src="/assets/profile-pic.png"
                  width={250}
                  height={250}
                  // layout="responsive"
                ></Image>
              </Col>
              <Col xs={6} className="p-5">
                {" "}
                <h1 className="mb-3">Chris here.</h1>
                <h4 className="mb-3 font-monospace">Full Stack Web Developer from Cologne</h4>
                <p> - passionate about technology | currently working on Edmeda -</p>
              </Col>

              {/*  2nd  */}
              <Col xs={6} className="p-5">
                {" "}
                <h3 className="mb-3">Skills & Tech/Tools/Tech Stack.</h3>
                <h5 className="mb-3 font-monospace">
                  What I'm good at / My Toolbox & Things I Can Do
                </h5>
                <h6 className="mb-3 font-monospace">
                  TL;DR: MERN-Stack, Jamstack (current) - Ruby on Rails, jQuery (a while back) -
                  C++, VBA, Java ((way) back in the days, sigh)
                </h6>
              </Col>
              <Col xs={6} className="p-5">
                <Row className="gy-3">
                  <h4 className="mb-3">Languages</h4>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.languages.map((skill) => {
                    return (
                      <Col className={styles.skill}>
                        <div className={styles.skill__logo}>
                          {/* <DiCss3 /> */}
                          {typeof SkillIconComponents[skill.iconComponent] !== "undefined" &&
                            React.createElement(SkillIconComponents[skill.iconComponent], {
                              color: "#fff",
                              size: "3rem",
                            })}
                        </div>
                        <div className={styles.skill__name}>{skill.name}</div>
                      </Col>
                    );
                  })}
                </Row>
                <Row className="gy-3 mt-3">
                  <h4 className="mb-3">MERN-Stack</h4>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.mern.map((skill) => {
                    return (
                      <Col className={styles.skill}>
                        <div className={styles.skill__logo}>
                          {/* <DiCss3 /> */}
                          {typeof SkillIconComponents[skill.iconComponent] !== "undefined" &&
                            React.createElement(SkillIconComponents[skill.iconComponent], {
                              color: "#fff",
                              size: "3rem",
                            })}
                        </div>
                        <div className={styles.skill__name}>{skill.name}</div>
                      </Col>
                    );
                  })}
                </Row>
                <Row className="gy-3 mt-3">
                  <h4 className="mb-3">Jamstack</h4>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.jam.map((skill) => {
                    return (
                      <Col className={styles.skill}>
                        <div className={styles.skill__logo}>
                          {/* <DiCss3 /> */}
                          {typeof SkillIconComponents[skill.iconComponent] !== "undefined" &&
                            React.createElement(SkillIconComponents[skill.iconComponent], {
                              color: "#fff",
                              size: "3rem",
                            })}
                        </div>
                        <div className={styles.skill__name}>{skill.name}</div>
                      </Col>
                    );
                  })}
                </Row>
                <Row className="gy-3 mt-3">
                  <h4 className="mb-3">Rails</h4>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.rails.map((skill) => {
                    return (
                      <Col className={styles.skill}>
                        <div className={styles.skill__logo}>
                          {/* <DiCss3 /> */}
                          {typeof SkillIconComponents[skill.iconComponent] !== "undefined" &&
                            React.createElement(SkillIconComponents[skill.iconComponent], {
                              color: "#fff",
                              size: "3rem",
                            })}
                        </div>
                        <div className={styles.skill__name}>{skill.name}</div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>

              {/* 3rd */}

              <Col xs={6} className="p-5"></Col>
              <Col xs={6} className="p-5">
                {" "}
                <h3 className="mb-3">Current Endevevours.</h3>
                <h5 className="mb-3 font-monospace">Currently working on:</h5>
                <h6 className="mb-3 font-monospace">
                  Improving my skills in, and understanding of vanilla JavaScript and React. Also,
                  having fun with #100DaysOfCode building & animating things via CSS. Follow My
                  Journey Here.
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

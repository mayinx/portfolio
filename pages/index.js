import styles from "./../styles/Index.module.css";
import React, { useEffect } from "react";

import Obfuscate from "react-obfuscate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaXingSquare } from "react-icons/fa";
import { SiProtonmail } from "react-icons/si";

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

import { GiSkills } from "react-icons/gi";

import Image from "next/image";

import HCard from "../components/index-page/ProjectCardH";

import { projects } from "../_data/projects";
import { skills } from "../_data/skills";

import Header from "../components/index-page/Header";

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
  return { props: { projects } };
}

// FYI: was
//  export default function start
export default function Index(props) {
  return (
    <>
      <Header />

      <main>
        <section id="current" className={styles.section + " " + styles.currentSection}>
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
                <HCard {...props.projects.featured} />
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
              {props.projects.more.map((project, idx) => {
                return (
                  <Col xs={12} key={idx} className="mb-5">
                    <HCard {...project} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>

        {/*    About  */}
        <section id="about" className={styles.section + " " + styles.aboutSection}>
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className={styles.sectionHead}>About me</h2>
                <h3 className={`${styles.sectionSubhead} text-muted`}>
                  I thought you&lsquo;d never asked.
                </h3>
              </Col>
            </Row>
            <Row className={`${styles.aboutMe} gy-5 gy-lg-0 px-5`}>
              <Col
                xs={12}
                lg={4}
                className="p-lg-4 mt-lg-0 d-flex justify-content-center align-items-center"
              >
                <div style={{ width: "250px", height: "250px", position: "relative" }}>
                  <Image
                    className={`${styles.profileImage} rounded-full`}
                    src="/assets/profile-pic-spaced3-500x500.png"
                    width={250}
                    height={250}
                    alt="profile image"
                    layout="fixed"
                  ></Image>
                </div>
              </Col>
              <Col
                xs={12}
                lg={8}
                className="p-lg-4 mt-lg-0 d-flex flex-column justify-content-center align-items-center align-items-lg-start"
              >
                {" "}
                <h1 className="mb-3 text-center text-lg-start">Chris here.</h1>
                <h4
                  style={{ color: "#d2d2d2 !important" }}
                  className="mb-3 text-center text-lg-start font-monospace"
                >
                  Full Stack Web Developer from Cologne
                </h4>
                <ul className="lead fw-bolder">
                  <li>passionate about MERN- & Jamstack development</li>
                  <li>currently working on Edmeda, a multi-community app for Schools</li>
                  <li>background in Media Science & IT-Projectmanagement</li>
                </ul>
              </Col>
            </Row>
            <Row className="gy-5 mt-0 mt-1 px-5">
              <Col xs={12} lg={8}>
                <h3 className="text-light">Hi there.</h3>
                <p className="lead fw-normal text-light">
                  I&apos;m a passionate full-stack Web Developer based in Cologne with a background
                  in Media Science, IT-Projectmanagment & Online-Marketing. My strengths lie within
                  the development of MERN- & Jamstack web applications. During my studies I used to
                  work with Ruby on Rails, both for university projects and as a freelancer. I live
                  in Cologne where I graduated in Media Science with focus on Computer Science.
                </p>
                <p className="lead fw-normal text-light">
                  Currently I'm utilizing the MERN-Stack to work on Edmeda, aiming to develope a web
                  based solution that enables Schools to teach important digital literacies. like
                  remote communication & collaboration by actively practicing digital mediated
                  social communication in Communities driven by Group Chats.
                </p>
              </Col>
              <Col xs={12} lg={4}>
                <h3 className="text-light">Let&apos;s connect</h3>
                <p className="lead fw-normal text-light mb-4">
                  You can find me on GitHub, LinkedIn and Xing. Or feel free to drop me an e-mail -
                  I'll be happy to get back to you ASAP...
                </p>
                <div className="lead fw-normal text-light d-flex flex-row justify-content-around">
                  <Button
                    target="_blank"
                    size="sm"
                    className="rounded-3"
                    variant="outline-light"
                    href="https://www.linkedin.com/in/christian-daum-4397a021a/"
                  >
                    <BsLinkedin size="2rem" /> Linkedin
                  </Button>
                  <Button
                    target="_blank"
                    size="sm"
                    className="rounded-3"
                    variant="outline-light"
                    href="https://github.com/mayinx"
                  >
                    <BsGithub size="2rem" /> GitHub
                  </Button>
                  <Obfuscate
                    className="rounded-3 btn btn-outline-light btn-sm"
                    styles={{ wordwrap: "nowrap" }}
                    email="christian.daum@protonmail.com"
                    target="_blank"
                    role="button"
                    headers={{
                      bcc: "christian.daum@email.de",
                      subject: "[Portfolio] ",
                    }}
                  >
                    {/* <Button
                      target="_blank"
                      size="sm"
                      className="rounded-3"
                      variant="outline-light"
                      href="https://github.com/mayinx"
                    > */}
                    <SiProtonmail size="2rem" /> E-Mail
                    {/* </Button> */}
                  </Obfuscate>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/*  Skills */}
        <section id="skills" className={styles.section + " " + styles.skillsSection}>
          <Container>
            {/*  Skills Header*/}

            <Row>
              <Col className="text-center">
                <h2 className={styles.sectionHead}>Skills & Tools</h2>
                <h3 className={`${styles.sectionSubhead} text-muted`}>What I&lsquo;m good at.</h3>
              </Col>
            </Row>

            {/* <Row>
              <Col xs={12} className="p-lg-5 d-flex flex-column align-items-center">
                {" "}
                <div className="d-flex gap-3">
                  <div>
                    <GiSkills size="3rem" />
                  </div>
                  <div>
                    <h3 className="mb-3">Skills & Tools.</h3>
                    <h5 style={{ color: "#d2d2d2 !important" }} className="mb-3 font-monospace">
                      What I&lsquo;m good at.
                    </h5>
                  </div>
                </div>
                <div className="lead mt-5 pt-5 d-flex flex-column align-items-center">
                  <h5>TL;DR:</h5>
                  <ul>
                    <li>MERN-Stack, Jamstack - current stacks</li>
                    <li>Ruby on Rails, jQuery, PostgreSQL - a while back</li>
                    <li>C++, VBA, Java - (way) back in the days, sigh</li>
                    <li>...</li>
                  </ul>
                </div>
              </Col>
            </Row> */}

            {/*  3rd About Skills Languages + MERN Stack */}
            <Row className="mt-0 gy-5">
              <Col xs={12} lg={6} className="px-5">
                <Row className="gy-3">
                  <div className="dividerWithCaption">
                    <span className="h5 fw-bold font-monospace">Languages</span>
                  </div>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.languages.map((skill, idx) => {
                    return (
                      <Col className={styles.skill} key={idx}>
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

              <Col xs={12} lg={6} className="px-5">
                <Row className="gy-3 ">
                  <div className="dividerWithCaption">
                    <span className="h5 fw-bold font-monospace">MERN-Stack</span>
                  </div>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.mern.map((skill, idx) => {
                    return (
                      <Col className={styles.skill} key={idx}>
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
            </Row>

            {/*  4th About Skills Jamstack + Rails Stack */}
            <Row className="mt-auto gy-5">
              <Col xs={12} lg={6} className="px-5">
                <Row className="gy-3 ">
                  <div className="dividerWithCaption">
                    <span className="h5 fw-bold font-monospace">Jamstack</span>
                  </div>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.jam.map((skill, idx) => {
                    return (
                      <Col className={styles.skill} key={idx}>
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
              <Col xs={12} lg={6} className="px-5">
                <Row className="gy-3 ">
                  <div className="dividerWithCaption">
                    <span className="h5 fw-bold font-monospace">Rails-Stack</span>
                  </div>
                </Row>
                <Row className={styles.skillTiles}>
                  {skills.webStacks.rails.map((skill, idx) => {
                    return (
                      <Col className={styles.skill} key={idx}>
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
            </Row>

            {/*  5th About Skills TL;DR */}

            <Row className="mt-5 gy-5 p-3 p-md-5">
              <Col xs={12} className="px-5">
                <Row className="gy-3 ">
                  <div className="dividerWithCaption">
                    <span className="h3 font-monospace">TL;DR</span>
                  </div>
                </Row>
                <Row className="p-1 mt-3">
                  <Col xs={12} className="px-5">
                    {/* <div className="align-items-center d-flex flex-column lead"> */}
                    <ListGroup as="ul" className={styles.tldrListGroup}>
                      <ListGroup.Item
                        as="li"
                        className={`row d-flex justify-content-between align-items-center ${styles.tldrListItemCurrent}`}
                      >
                        <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                          <h6 className="ls-1 mb-3 mb-md-0 text-black-50">Current</h6>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-8 d-flex flex-row flex-wrap gap-1 gap-sm-1 justify-content-end">
                          <Badge className="medium-plus" bg="secondary">
                            JavaScript
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            MERN-Stack
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            Jamstack
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            Bootstrap
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            CSS Modules
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            SCSS
                          </Badge>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className={`row d-flex justify-content-between align-items-center ${styles.tldrListItemWhileBack}`}
                      >
                        <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                          <h6 className="fw-bold ls-1 mb-3 mb-md-0 text-black-50">A while back</h6>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-8 d-flex flex-row flex-wrap gap-1 gap-sm-1 justify-content-end">
                          <Badge className="medium-plus" bg="secondary">
                            Ruby
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            Ruby on Rails
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            jQuery
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            PostgreSQL
                          </Badge>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className={`row d-flex justify-content-between align-items-center ${styles.tldrListItemWayBack}`}
                      >
                        <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                          <h6 className="fw-bold ls-1 mb-3 mb-md-0 text-black-50">
                            (Way) back in the days, sigh
                          </h6>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-8 d-flex flex-row flex-wrap gap-1 gap-sm-1 justify-content-end">
                          <Badge className="medium-plus" bg="secondary">
                            C++
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            VBA
                          </Badge>
                          <Badge className="medium-plus" bg="secondary">
                            Java
                          </Badge>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    {/* </div> */}
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* </Col> */}

            {/* 3rd */}

            {/* <Col xs={6} className="p-lg-5"></Col>
              <Col xs={6} className="p-lg-5">
                {" "}
                <h3 className="mb-3">Current Endevevours.</h3>
                <h5 className="mb-3 font-monospace">Currently working on:</h5>
                <h6 className="mb-3 font-monospace">
                  Improving my skills in, and understanding of vanilla JavaScript and React. Also,
                  having fun with #100DaysOfCode building & animating things via CSS. Follow My
                  Journey Here.
                </h6>
              </Col> */}
            {/* </Row> */}
          </Container>
        </section>
      </main>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a> */}
            <span className="text-muted">&copy; 2021 Christian Daum</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="https://github.com/mayinx">
                <BsGithub size="2rem" />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/christian-daum-4397a021a/"
              >
                <BsLinkedin size="2rem" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.xing.com/profile/Christian_Daum33/">
                <FaXingSquare size="2rem" />
              </a>
            </li>

            <li className="ms-3">
              <Obfuscate
                className="text-muted"
                email="christian.daum@protonmail.com"
                target="_blank"
                headers={{
                  bcc: "christian.daum@email.de",
                  subject: "[Portfolio] ",
                }}
              >
                <SiProtonmail size="2rem" />
              </Obfuscate>
              {/* <a
                className="text-muted"
                href="mailto:christian.daum@protonmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiProtonmail size="2rem" />
              </a>*/}
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://stackoverflow.com/users/664333/mayinx">
                <BsStackOverflow size="2rem" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

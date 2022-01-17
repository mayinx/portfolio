import styles from "./../styles/Index.module.css";
import React, { useEffect } from "react";

import Obfuscate from "react-obfuscate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <section id="current" className={styles.section}>
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

        <section id="more" className={styles.section} style={{ backgroundColor: "ghostwhite" }}>
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
            <Row className={`${styles.aboutMe} p-lg-5 gy-5`}>
              <Col xs={12} lg={6} className="p-lg-5 d-flex justify-content-center">
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
              <Col xs={12} lg={6} className="p-lg-5 d-flex flex-column justify-content-center">
                {" "}
                <h1 className="mb-3">Chris here.</h1>
                <h4 className="mb-3 font-monospace">Full Stack Web Developer from Cologne</h4>
                <ul>
                  <li>passionate about technology | currently working on Edmeda</li>
                  <li>studied Media Science (focus Computer Science)</li>
                  <li>background in IT-Projectmanagement</li>
                  <li>...</li>
                </ul>
              </Col>

              {/*  2nd  */}

              <Col xs={12} lg={6} className="p-lg-5">
                {" "}
                <div className="d-flex gap-3 ">
                  <div>
                    <GiSkills size="3rem" />
                  </div>
                  <div>
                    <h3 className="mb-3">Skills & Tools.</h3>
                    <h5 className="mb-3 font-monospace">What I&lsquo;m good at.</h5>
                  </div>
                </div>
                <div className="lead mt-5 pt-5">
                  <h5>TL;DR:</h5>
                  <ul>
                    <li>MERN-Stack, Jamstack - current stacks</li>
                    <li>Ruby on Rails, jQuery, PostgreSQL - a while back</li>
                    <li>C++, VBA, Java - (way) back in the days, sigh</li>
                    <li>...</li>
                  </ul>
                </div>
              </Col>

              <Col xs={12} lg={6} className="p-lg-5">
                <Row className="gy-3">
                  <div className="dividerWithCaption">
                    <span className="h5 font-monospace">Languages</span>
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
                <Row className="gy-3 mt-3">
                  <div className="dividerWithCaption">
                    <span className="h5 font-monospace">MERN-Stack</span>
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
                <Row className="gy-3 mt-3">
                  <div className="dividerWithCaption">
                    <span className="h5 font-monospace">Jamstack</span>
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
                <Row className="gy-3 mt-3">
                  <div className="dividerWithCaption">
                    <span className="h5 font-monospace">Rails-Stack</span>
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
            </Row>
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
                email="christian.daum@email.de"
                target="_blank"
                headers={{
                  bcc: "mayinxx@web.de",
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

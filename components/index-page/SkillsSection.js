// import { skills } from "../../_data/skills";
import styles from "./SkillsSection.module.css";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import {
  SiHeroku,
  SiVisualstudio,
  SiSublimetext,
  SiUbuntu,
  SiFigma,
  SiGimp,
  SiBulma,
  SiJson,
  SiInkscape,
  SiAdobephotoshop,
  SiStylelint,
  SiPrettier,
  SiTrello,
  SiWindows,
  SiAmazonaws,
  SiCplusplus,
  SiSocketdotio,
  SiVercel,
  SiCypress,
  SiVuedotjs,
} from "react-icons/si";

import { AiFillSlackCircle } from "react-icons/ai";

import { VscWorkspaceUnknown, VscTerminalBash } from "react-icons/vsc";

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
  DiGit,
  DiSass,
  DiRuby,
  DiHtml5,
  DiNodejs,
  DiNpm,
} from "react-icons/di";

import { BsGithub, BsBootstrapFill } from "react-icons/bs";

const SkillIconComponents = {
  DiCss3: DiCss3,
  ExpressOriginal: ExpressOriginal,
  DiMongodb: DiMongodb,
  DiReact: DiReact,
  DiNodejsSmall: DiNodejsSmall,
  DiNodejs: DiNodejs,
  DiRuby: DiRuby,
  JavascriptPlain: JavascriptPlain,
  DiHtml5: DiHtml5,
  NextJSOriginal: NextJSOriginal,
  RailsPlain: RailsPlain,
  JQueryPlain: JQueryPlain,
  PostgreSQLPlain: PostgreSQLPlain,
  DiSass: DiSass,
  DiNpm: DiNpm,
  BsBootstrapFill: BsBootstrapFill,
  SiBulma: SiBulma,
  DiGit: DiGit,
  BsGithub: BsGithub,
  SiHeroku: SiHeroku,
  SiVercel: SiVercel,
  SiVisualstudio: SiVisualstudio,
  SiSublimetext: SiSublimetext,
  SiUbuntu: SiUbuntu,
  SiFigma: SiFigma,
  SiGimp: SiGimp,
  SiJson: SiJson,
  SiAdobephotoshop: SiAdobephotoshop,
  SiInkscape: SiInkscape,
  SiStylelint: SiStylelint,
  SiPrettier: SiPrettier,
  SiTrello: SiTrello,
  AiFillSlackCircle: AiFillSlackCircle,
  SiWindows: SiWindows,
  SiAmazonaws: SiAmazonaws,
  SiCplusplus: SiCplusplus,
  SiSocketdotio: SiSocketdotio,
  SiCypress: SiCypress,
  SiVuedotjs: SiVuedotjs,
  VscTerminalBash: VscTerminalBash,
  VscWorkspaceUnknown: VscWorkspaceUnknown,
};

export default function SkillsSection({ sectionBaseStyle, skills }) {
  return (
    <section
      id="skills"
      className={sectionBaseStyle + " " + styles.skillsSection}
    >
      <Container>
        {/*  Skills Header*/}
        <Row>
          <Col className="text-center">
            <h2 className={styles.sectionHead}>Skills & Tools</h2>
            <h3 className={`${styles.sectionSubhead} text-muted`}>
              Technologies I&apos;ve worked with.
            </h3>
          </Col>
        </Row>
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
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
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
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
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
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
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
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
                    </div>
                    <div className={styles.skill__name}>{skill.name}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        {/*  5th About Skills CSS Frameworks + VC & Deployement */}
        <Row className="mt-auto gy-5">
          <Col xs={12} lg={6} className="px-5">
            <Row className="gy-3 ">
              <div className="dividerWithCaption">
                <span className="h5 fw-bold font-monospace">
                  CSS-Frameworks & Tooling
                </span>
              </div>
            </Row>
            <Row className={styles.skillTiles}>
              {skills.css.map((skill, idx) => {
                return (
                  <Col className={styles.skill} key={idx}>
                    <div className={styles.skill__logo}>
                      {/* <DiCss3 /> */}
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
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
                <span className="h5 fw-bold font-monospace">Platforms</span>
              </div>
            </Row>
            <Row className={styles.skillTiles}>
              {skills.platforms.map((skill, idx) => {
                return (
                  <Col className={styles.skill} key={idx}>
                    <div className={styles.skill__logo}>
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
                    </div>
                    <div className={styles.skill__name}>{skill.name}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        {/*  6th About Skills CSS Frameworks + VC & Deployement */}
        <Row className="mt-auto gy-5">
          <Col xs={12} lg={6} className="px-5">
            <Row className="gy-3 ">
              <div className="dividerWithCaption">
                <span className="h5 fw-bold font-monospace">
                  IDEs & CQ-Extensions
                </span>
              </div>
            </Row>
            <Row className={styles.skillTiles}>
              {skills.ide.map((skill, idx) => {
                return (
                  <Col className={styles.skill} key={idx}>
                    <div className={styles.skill__logo}>
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
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
                <span className="h5 fw-bold font-monospace">
                  Team Collaboration
                </span>
              </div>
            </Row>
            <Row className={styles.skillTiles}>
              {skills.team.map((skill, idx) => {
                return (
                  <Col className={styles.skill} key={idx}>
                    <div className={styles.skill__logo}>
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
                    </div>
                    <div className={styles.skill__name}>{skill.name}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        {/*  7th About Skills More + ... */}
        <Row className="mt-auto gy-5">
          <Col xs={12} className="px-5">
            <Row className="gy-3 ">
              <div className="dividerWithCaption">
                <span className="h5 fw-bold font-monospace">
                  theUnruly(...rest)
                </span>
              </div>
            </Row>
            <Row className={styles.skillTiles}>
              {skills.more.map((skill, idx) => {
                return (
                  <Col className={styles.skill} key={idx}>
                    <div className={styles.skill__logo}>
                      {typeof SkillIconComponents[skill.iconComponent] !==
                        "undefined" &&
                        React.createElement(
                          SkillIconComponents[skill.iconComponent],
                          {
                            color: "#fff",
                            size: "3rem",
                          },
                        )}
                    </div>
                    <div className={styles.skill__name}>{skill.name}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        {/*  7th About Skills TL;DR */}
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
                      <h5 className="ls-1 mb-3 mb-md-0 text-black-50 text-center text-md-start">
                        Current Tech Stack
                      </h5>
                    </div>
                    <div className="col-12 col-lg-6 col-md-8 col-xl-8 d-flex flex-column flex-sm-row flex-wrap align-content-center gap-1 gap-sm-1 justify-content-end">
                      <Badge className="medium-plus" bg="secondary">
                        JavaScript
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        HTML5
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        CSS3
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        SASS (SCSS)
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        MERN-Stack
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Jamstack
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Vue.js
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Bootstrap
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        (S)CSS Modules
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        npm
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Cypress.io
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Git / GitHub
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Heroku
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Vercel
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        VS Code
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Linux (Ubuntu)
                      </Badge>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className={`row d-flex justify-content-between align-items-center ${styles.tldrListItemWhileBack}`}
                  >
                    <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                      <h5 className="ls-1 mb-3 mb-md-0 text-black-50 text-center text-md-start">
                        A while back
                      </h5>
                    </div>
                    <div className="col-12 col-lg-6 col-md-8 col-xl-8 d-flex flex-column flex-sm-row flex-wrap align-content-center gap-1 gap-sm-1 justify-content-end">
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
                        AJAX
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        PostgreSQL
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        SQLite
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        SASS (SCSS)
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Heroku
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        AWS (S3)
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        RVM
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Sublime Text
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Linux (Ubuntu)
                      </Badge>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className={`row d-flex justify-content-between align-items-center ${styles.tldrListItemWayBack}`}
                  >
                    <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                      <h5 className="ls-1 mb-3 mb-md-0 text-black-50 text-center text-md-start">
                        (Way) back in the days, sigh
                      </h5>
                    </div>
                    <div className="col-12 col-lg-6 col-md-8 col-xl-8 d-flex flex-column flex-sm-row flex-wrap align-content-center gap-1 gap-sm-1 justify-content-end">
                      <Badge className="medium-plus" bg="secondary">
                        C++
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Visual C++
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        STL
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        MFC
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        DirectX
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Qt
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Visual Studio
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        VBA
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Java
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        Eclipse
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        VBA
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        MS Access
                      </Badge>
                      <Badge className="medium-plus" bg="secondary">
                        MS Windows
                      </Badge>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                {/* </div> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

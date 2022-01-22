export const skills = {
  // Languages
  languages: [
    { name: "JavaScript", iconComponent: "JavascriptPlain" },
    { name: "Ruby", iconComponent: "DiRuby" },
    { name: "HTML5", iconComponent: "DiHtml5" },
    { name: "CSS3", iconComponent: "DiCss3" },
  ],
  // Web Stacks:
  // MERN-Stack
  webStacks: {
    // TODO: On hover display something like: "MERN stack is a web development framework. It consists of MongoDB, ExpressJS, ReactJS, and NodeJS as its working components. ..."
    mern: [
      { name: "JavaScript", iconComponent: "JavascriptPlain", description: null },
      {
        name: "MongoDB",
        iconComponent: "DiMongodb",
        description:
          "MongoDB: A document-oriented, No-SQL database used to store application data.",
      },
      {
        name: "Express.js",
        iconComponent: "ExpressOriginal",
        description:
          "ExpressJS: A framework layered on top of NodeJS, used to build the backend of a site using NodeJS functions and structures. Since NodeJS was not developed to make websites but rather run JavaScript on a machine, ExpressJS was developed.",
      },
      {
        name: "React",
        iconComponent: "DiReact",
        description:
          "ReactJS: A library created by Facebook. It is used to build UI components that create the user interface of the single page web application.",
      },
      {
        name: "Node.js",
        iconComponent: "DiNodejsSmall",
        description:
          "NodeJS: The JavaScript runtime environment. It is used to run JavaScript on a machine rather than in a browser.",
      },
      { name: "npm", iconComponent: "DiNpm" },
    ],
    jam: [
      { name: "JavaScript", iconComponent: "JavascriptPlain" },
      { name: "React", iconComponent: "DiReact" },
      { name: "Next.js", iconComponent: "NextJSOriginal" },
    ],
    rails: [
      { name: "Ruby", iconComponent: "DiRuby" },
      { name: "Ruby on Rails", iconComponent: "RailsPlain" },
      { name: "PostgreSQL", iconComponent: "PostgreSQLPlain" },
      { name: "jQuery", iconComponent: "JQueryPlain" },
      { name: "AJAX", iconComponent: "VscWorkspaceUnknown" },
      { name: "RVM", iconComponent: "VscWorkspaceUnknown" },
    ],
  },

  // CSS-Fw and preprocessors
  css: [
    { name: "Bootstrap", iconComponent: "BsBootstrapFill" },
    { name: "Bulma", iconComponent: "SiBulma" },
    { name: "SASS (SCSS)", iconComponent: "DiSass" },
    { name: "CSS Modules", iconComponent: "VscWorkspaceUnknown" },
  ],

  // Deployment
  vcDeployement: [
    { name: "Git", iconComponent: "DiGit" },
    { name: "GitHub", iconComponent: "BsGithub" },
    { name: "Heroku", iconComponent: "SiHeroku" },
    { name: "Vercel", iconComponent: "SiVercel" },
  ],

  // // Team Communication & Collaboration
  team: [
    { name: "Slack", iconComponent: "AiFillSlackCircle" },
    { name: "Github", iconComponent: "BsGithub" },
    { name: "Zoom", iconComponent: "VscWorkspaceUnknown" },
    { name: "Trello", iconComponent: "SiTrello" },
  ],

  // // Editors & Code Quality Extensions
  ide: [
    { name: "VS Code", iconComponent: "SiVisualstudio" },
    { name: "Sublime Text", iconComponent: "SiSublimetext" },
    { name: "StyleLint", iconComponent: "SiStylelint" },
    { name: "Prettier", iconComponent: "SiPrettier" },
    { name: "JSHint", iconComponent: "VscWorkspaceUnknown" },
    { name: "ESLint", iconComponent: "VscWorkspaceUnknown" },
  ],

  more: [
    { name: "JSON", iconComponent: "SiJson" },
    { name: "Excalidraw", iconComponent: "VscWorkspaceUnknown" },
    { name: "Figma", iconComponent: "SiFigma" },
    { name: "Gimp", iconComponent: "SiGimp" },
    { name: "Photoshop", iconComponent: "SiAdobephotoshop" },
    { name: "Inkscape", iconComponent: "SiInkscape" },
    { name: "Linux (Ubuntu)", iconComponent: "SiUbuntu" },
    { name: "MS Windows", iconComponent: "SiWindows" },
  ],
};

export const projects = {
  featured: {
    name: "Edmeda",
    subhead: "Easy remote communication & collaboration for Schools",
    imgUrl: "assets/edmeda.herokuapp.com.png",
    description:
      "Edmeda is a password protected MERN-Stack Web Application which enables Schools to communicate & collaborate easily and effectively via multiple Communities. Teachers, Students and Parents alike are equipped with real-time Group Chats to share information instantaneously and effortlessly. Using Edmeda, Teachers can create limitless Communities - and inside those communities a limitless number of user groups. Those Communities and their User Groups can be centered around any target audience or subject, thus enabling users to achieve a targeted communication and information exchange, even in times of Corona.",
    motivation:
      "Web-based remote communication & collaboration is an increasingly important subject, not only for companies but also for schools, especially in times of Covid-19. In addition to ensuring subject-related communication during lockdowns, working with Social Web applications enables Schools to teach important skill sets like teamwork and digital literacies by actively practicing digital mediated social communication. With that in mind, Edmeda was created.",
    techStack: {
      Languages: ["JavaScript", "HTML5", "CSS3"],
      "Web Stack": ["MongoDB (Mongoose)", "Express.js", "React", "Node.js"],
      "CSS-Framework": ["None: 'Handcrafted'"],
      More: [
        "Socket.IO",
        "JWT-Auth",
        "Bcryptjs",
        "localStorage",
        "React Hook Form",
        "React Responsive",
        "Axios",
        "Gender Detection",
        "Faker",
        "Heroku",
      ],
    },
    provider: "Heroku",
    siteUrl: "https://edmeda.herokuapp.com/",
    repoUrl: "https://github.com/mayinx/edmeda",
  },
  more: [
    {
      name: "Bello",
      subhead: "Minimalistic Kanban-style Todo-App",
      imgUrl: "assets/todoapp-react-three.vercel.app1.png",
      description:
        "... aka the 'Getting-Stuff-Done-App Trello is afraid of' ;-) - a weekend-project created for the neuefische-Bootcamp. Really a fun one... Notable features include 'list specific task limits' & 'task completion points', which can be earned by performing as a good working bee - or lost if tasks are reopened...",
      // "... aka the 'Getting-Stuff-Done-App Trello is afraid of' ;-) - a weekend-project created for the neuefische-Bootcamp. Really a fun one -  unfortunately one weekend wasn't enough to implement other features like multipe boards, drag 'n drop, responsiveness, and, what, not, etc.  .",
      // features: [
      //   "Tasks-CRUD",
      //   "Task priorities",
      //   "Task status lifecycle (backlog, active, completed, archived",
      //   "Task sorted by priorities"
      // ],
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None: 'Handcrafted'"],
        More: ["localStorage", "react-toastify", "react-select", "react-toastify", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://todoapp-react-three.vercel.app/",
      repoUrl: "https://github.com/mayinx/bello",
    },
    {
      name: "Rick 'n Morty on Steroids",
      subhead: "Integrating with an API Backend ",
      imgUrl: "assets/rick-n-morty-on-steroids.vercel.app-8.png",
      description:
        "Another fun weekend project for the neuefische-Bootcamp. And my first attempt to set something up like a 'Default React App Folder Structure' (work in progress). Notable features include: Infinite scroll, dynamic list filtering (per status, species, character name), snappy filter & search bar, and not to forget: An incredibly (voluntarily) overdone scale effect on hover over the character cards, to 'increase the horror' - muhahha.... Takeaways: I learned that React-driven web development is blazing fast - and that a search for characters named 'Chris' or similar produced ...intersting results!",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None: 'Handcrafted'"],
        More: ["fetch", "api", "rick and morty", "localStorage", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://rick-n-morty-on-steroids.vercel.app/",
      repoUrl: "https://github.com/mayinx/rick-n-morty-on-steroids",
    },
    {
      name: "Portfolio Site",
      subhead: "This site! How meta is this?!",
      imgUrl: "assets/portfolio-app-1.png",
      description:
        "... aka 'The Minimalistic 'Hire Me Portfolio One Page Wonder'... I was really eager to get my hands on Jamstack with Next.js anyway - plus: 'one must show that one masters bootstrap 5 and can create a broschure landing page', since it's required in lots of job adds one way or the other etc. - soooo: Why not shot this at a the portfolio site that I need ...",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Next.js"],
        "CSS-Framework": ["Bootstrap 5", "React Bootstrap"],
        More: ["Vercel"],
      },
      provider: "Vercel",
      siteUrl: "www.cdco.dev",
      repoUrl: "https://github.com/mayinx/portfolio",
    },
  ],
};

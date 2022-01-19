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
      "CSS-Framework": ["None", "'Handcrafted'"],
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
    siteUrl: "https://edmeda.herokuapp.com/",
    repoUrl: "https://github.com/mayinx/edmeda",
  },
  more: [
    {
      name: "Bello",
      subhead: "Minimalistic Kanban-style Todo-App",
      imgUrl: "assets/todoapp-react-three.vercel.app1.png",
      description:
        "... aka the 'Getting-Stuff-Done-App Trello is afraid of' ;-) - a Weekend-Project created for the neuefische-Bootcamp. Really a fun one - unfortunately not enough time to implement responsiveness, multipe boards, drag 'n drop and, what, not, etc. - I'm definetively going to revisit this one. If it weren't for Edemda, I would have choosen to extend Bello as Capstone-Project, but no, it must be the hard way...",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None", "'Handcrafted'"],
        More: ["localStorage", "react-toastify", "react-select", "react-toastify", "Vercel"],
      },
      siteUrl: "https://todoapp-react-three.vercel.app/",
      repoUrl: "https://github.com/mayinx/bello",
    },
    {
      name: "Rick 'n Morty on Steroids",
      subhead: "Integrating with an API Backend ",
      imgUrl: "assets/rick-n-morty-on-steroids.vercel.app-8.png",
      description:
        "Integrating with an API Backend - Another fun weekend project for the neuefische-Bootcamp. And my first attempt to set something up like an React App Template Folder Structure (Work in Prgress). Features: Infinite scroll + dynamic list filtering per api calls (per status (alive, dead, unknown), per species (human, alien)) + text serach by character name - snappy filert and search bar -  and not to forget: an incredibly (voluntarily) overdone scale effect on hover over the character cards, to 'increase the horror' - muhahha... - I learned that a search for characters named chris or similar produced intersting charcters!  TODO: yeah - styling + favoriting [initial commit: 23.07.21]",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None", "'Handcrafted'"],
        More: ["fetch", "api", "rick and morty", "localStorage", "Vercel"],
      },
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
      siteUrl: "#",
      repoUrl: "#",
    },
  ],
};

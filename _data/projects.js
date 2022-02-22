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
      "CSS-Framework": ["None / 'Handcrafted'"],
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
        "Cypress.io",
        "Heroku",
      ],
    },
    provider: "Heroku",
    siteUrl: "https://edmeda.herokuapp.com/",
    repoUrl: "https://github.com/mayinx/edmeda",
  },
  more: [
    {
      name: "The Yedi's Guide To The Galaxy",
      subhead: "Vue.js-app with SWAPI-Backend",
      imgUrl: "assets/jedis-galaxy-guide.vercel.app.png",
      description:
        "... The Jedi`s Guide to the Galaxy - a Star Wars fan page made by a Trekkie. A Vue.js-Project that integrates with the Star Wars API (SWAPI for the initiated) - allowing aspiring Jedis to safely navigate the vastness of the Galaxy - 'to boldly go, where no man has gone before...' - oops - that's the wrong franchise, but we're all buddies here ;-)",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["Vue 3 "],
        "CSS-Framework": ["Bootstrap 5"],
        More: ["SWAPI", "localStorage", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://jedis-galaxy-guide.vercel.app/",
      repoUrl: "https://github.com/mayinx/jedis-galaxy-guide",
    },
    {
      name: "COVID-19 DASHBOARD",
      subhead: "React-Dashboard showing the latest COVID-19 stats",
      imgUrl: "assets/covid-dashboard/covid-dashboard-three.vercel.app-01.png",
      description:
        "A React-made dashboard showing the current COVID-19 world and country stats pulled from the COVID-19-API (which in turn pulls the data from the Johns Hopkins Center for Systems Science and Engineering, CSSE for short)...",
      features: "Notable Features include: Dashboard tiles for Germany- and World-stats at the top and a list with stats for all 194 countries underneath. The list shows the first 10 of 194 countries and supports infinite scroll as pagination solution once a certain scroll threshold is reached (10 more countries per page / scroll). The countries-stats-list is filterable via a search box and keeps the last enterded query when the user browses the list via infinite scroll. The (yet to be styled) footer holds a button to refresh all stats.",
      roadmap: "Rough Roadmap for future features (apart from a improved styling): Comparision options (perhaps to be located in the dashboard's footer) to load 'comparison data' (e.g. COVID stats from a week ago) that's visualized in every data card alongside the current COVID data (ups/downs in % or similar & marked red/green accordingly); a dashboard auto-refresh feature, that updates the data every 15 minutes or so; aaand: Tabs would be nice as well to switch between Johns Hopkins and RKI-stats which differ 'quite a bit' from the data Johns Hopkins CSSE comes up with...",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None / 'Handcrafted'"],
        More: ["covid19api", "react-icons", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://covid-dashboard-three.vercel.app/",
      repoUrl: "https://github.com/mayinx/covid-dashboard",
    },
    {
      name: "Bello",
      subhead: "Minimalistic Kanban-style Todo-App",
      imgUrl: "assets/todoapp-react-three.vercel.app1.png",
      description:
        "... aka the 'Getting-Stuff-Done-App Trello is afraid of' ;-) - a weekend-project created for the neuefische-Bootcamp. Really a fun one... Notable features include 'dynamic search across multiple task lists', 'list-specific task limits' & 'task completion points', which can be earned by performing as a good working bee - or lost if tasks are reopened...",
      // features: [
      //   "Tasks-CRUD",
      //   "Task priorities",
      //   "Task status lifecycle (backlog, active, completed, archived",
      //   "Task sorted by priorities"
      // ],
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None / 'Handcrafted'"],
        More: ["localStorage", "react-toastify", "react-select", "react-toastify", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://todoapp-react-three.vercel.app/",
      repoUrl: "https://github.com/mayinx/bello",
    },

    {
      name: "Rick 'n Morty on Steroids",
      subhead: "Integrating with an API Backend",
      imgUrl: "assets/rick-n-morty-on-steroids.vercel.app-8.png",
      description:
        "Another fun weekend project for the neuefische-Bootcamp. And my first attempt to set something up like a 'Default React App Folder Structure' (work in progress). Notable features include: Pulling characters from the Rick'N Morty-API, dynamic list filtering (per status, species, character name), snappy filter & search bar, pagination via a load more button to extend the current list, and not to forget: An incredibly (voluntarily) overdone scale effect on hover over the character cards, to 'increase the horror' - muahahaha... Takeaways: I learned that React-driven web development is blazing fast - and that a search for characters named 'Chris' or similar produced ...interesting results!",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3"],
        "Web Stack": ["React", "Create React App"],
        "CSS-Framework": ["None / 'Handcrafted'"],
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
        "... aka 'The Minimalistic Hire Me Portfolio One Page Wonder'... Since I was really eager to get my hands on Jamstack with Next.js anyway this was the perfect opportunity for a dive into this awesome web development stack. Plus: 'One must show that one masters (React)Bootstrap and can create a fancy landing page of sorts'. Anyway: Can't wait to pull in Github- and whatnot-stats via the respective APIs - or to explore headless CMS while adding a blog...",
      techStack: {
        Languages: ["JavaScript", "HTML5", "CSS3", "SASS (SCSS)"],
        "Web Stack": ["React", "Next.js"],
        "CSS-Framework & -Tooling": ["Bootstrap 5", "(S)CSS-Modules"],
        More: ["React Bootstrap", "Vercel"],
      },
      provider: "Vercel",
      siteUrl: "https://cdco.dev/",
      repoUrl: "https://github.com/mayinx/portfolio",
    },
  ],
};

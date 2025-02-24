import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Service App ",
    description:
      "This MERN stack project showcases a dynamic website with CRUD operations and service displays. The React frontend, hosted on Netlify, utilizes Context API, useState, and useEffect for efficient state management. The Node.js backend, deployed on Render, implements controllers, routes, services, and token handling. MongoDB serves as the database, ensuring seamless data flow between frontend and backend components.",
    tools: ["React", "Node", "Rapid API", "MongoDb", "Bootstrap"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/mern-project-client",
    demo: "https://harsh-mern-project.netlify.app",
    // image: crefin,
  },

  {
    id: 2,
    name: "Notezipper",
    description:
      "NoteZipper is a task management web application that allows users to register or log in and create notes to track their daily tasks. Users can add, edit, and delete notes as needed, ensuring an organized workflow. The platform includes a filtering feature that enables users to sort notes based on their creation date, making it easy to find relevant tasks. A secure authentication system ensures data privacy, while a responsive interface enhances usability. NoteZipper aims to simplify task tracking, providing a seamless and efficient note-taking experience to help users stay productive and organized in their daily routines.",
    tools: ["React", "Node", "Rapid API", "MongoDb", "Bootstrap"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/notezipper-frontend",
    demo: "https://personalnotezipper.netlify.app",
    // image: crefin,
  },

  {
    id: 3,
    name: "World Whispers",
    description:
      "A dynamic website offering fascinating and verified facts about countries worldwide, enabling users to explore cultural, historical, and geographical insights with ease.",
    tools: ["Reactjs", "CSS"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/country_facts",
    demo: "https://coutryunknownfacts.netlify.app/",
    // image: travel, // Assign the value of the variable containing the image path
  },

  {
    id: 4,
    name: "Fitness App ",
    description:
      "Creared a fitness app functionality to choose exercise categories and specofic muscle groups, brose more thaan 1000 exercises with practical examples, pagination, exercise details, pool related videos from youtube and display similar exercises.",
    tools: ["HTML", "CSS", "Rapid API", "Material UI"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/gym_app",
    demo: "",
    // image: crefin,
  },
  {
    id: 5,
    name: "TIC TAC TOE ",
    description:
      "Designed and developed a fully web-based Tic tac toe game using HTML, CSS and JavaScript to deepen my understanding of front-end web technologies. The game allows the user to complete the game in real time, with interactive features such as highlighting winning and preventing invalid moves. ",

    tools: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/harshyadavDeveloper/TitTacToe",
    role: "Developer",
    demo: "https://harshtoetictac.netlify.app/",
    // image: realEstate,
  },
  {
    id: 6,
    name: "Chess Game",
    description:
      "I have created a fast and responsive chess game with real time multiplayer functionality.",
    tools: ["ReactJS", "Material UI", "socket.io"],
    code: "https://github.com/harshyadavDeveloper/ChessGame",
    demo: "",
    // image: ayla,
    role: "Developer",
  },
  {
    id: 7,
    name: "BMI Mini app",
    description:
      "I have created a simple flutter application in which you can see your body mass index by entering the relative information.",
    tools: ["Flutter"],
    code: "https://github.com/harshyadavDeveloper/bmi_miniapp_flutter",
    demo: "",
    // image: ayla,
    role: "Android Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

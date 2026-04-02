import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const personalProjects = [
  {
    id: 0,
    name: "Chatify",
    description:
      "Chatify is a real-time, full-stack chat application built with React, Node.js, and Socket.io, enabling seamless messaging, media sharing, and live presence detection with a fun, modern user experience.",
    tools: [
      "React",
      "Node",
      "Rapid API",
      "MongoDB",
      "Socket.io",
      "Zustand",
      "Coudinary",
    ],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/chatify",
    demo: "https://chatify-2yqyw.sevalla.app",
    images: [
      "/image/chatify/chatify-1.png",
      "/image/chatify/chatify-2.png",
      "/image/chatify/chatify-3.png",
    ],
  },
  {
    id: 1,
    name: "Food Go",
    description:
      "A comprehensive Flutter-based food delivery app with Firebase backend, featuring seamless food ordering, real-time order tracking, and integrated payment solutions. Users can browse categorized food items, place orders, track delivery status, and manage their wallet balance. The app includes Stripe payment gateway integration for secure transactions and a dedicated admin panel for restaurant owners to manage menu items, approve orders, and monitor active users. Built with modern UI/UX principles and real-time database synchronization for optimal user experience",
    tools: ["Flutter", "Firebase", "Rapid API", "Stripe"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/flutter-food-go",
    demo: "https://www.dropbox.com/scl/fi/xla4keq12iwo75qeb0bvh/app-arm64-v8a-release.apk?rlkey=y0edoaktm6qtmm01vui5nk9du&st=0op9vdpo&dl=0",
     images: [
      "/image/food-go/food-go-1.jpg",
      "/image/food-go/food-go-2.jpg",
      "/image/food-go/food-go-3.jpg",
      "/image/food-go/food-go-4.jpg",
      "/image/food-go/food-go-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Service App",
    description:
      "This MERN stack project showcases a dynamic website with CRUD operations and service displays. The React frontend, hosted on Netlify, utilizes Context API, useState, and useEffect for efficient state management. The Node.js backend, deployed on Render, implements controllers, routes, services, and token handling. MongoDB serves as the database, ensuring seamless data flow between frontend and backend components.",
    tools: ["React", "Node", "Rapid API", "MongoDb", "Bootstrap"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/mern-project-client",
    demo: "https://harsh-mern-project.netlify.app",
    images: [
      "/image/service-app/service-app-1.png",
      "/image/service-app/service-app-2.png",
      "/image/service-app/service-app-3.png",
      "/image/service-app/service-app-4.png",
    ]
  },

  {
    id: 3,
    name: "Notezipper",
    description:
      "NoteZipper is a task management web application that allows users to register or log in and create notes to track their daily tasks. Users can add, edit, and delete notes as needed, ensuring an organized workflow. The platform includes a filtering feature that enables users to sort notes based on their creation date, making it easy to find relevant tasks. A secure authentication system ensures data privacy, while a responsive interface enhances usability. NoteZipper aims to simplify task tracking, providing a seamless and efficient note-taking experience to help users stay productive and organized in their daily routines.",
    tools: ["React", "Node", "Rapid API", "MongoDb", "Bootstrap"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/notezipper-frontend",
    demo: "https://personalnotezipper.netlify.app",
    images: [
      "/image/notezipper/note-zipper-1.png",
    ],
  },

  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

export const professionalProjects = [
  {
    name: "Company Dashboard",
    tools: ["React", "Redux"],
    role: "Frontend Engineer",
    description: "Worked at XYZ company",
    code: "",
    demo: "",
  },
];

export const freelanceProjects = [
  {
    name: "Client Website",
    tools: ["Next.js"],
    role: "Freelancer",
    description: "Built for a client",
    code: "",
    demo: "",
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

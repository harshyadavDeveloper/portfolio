import { images } from "@/next.config";
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
    name: "Purna Panchang",
    description:
      "A full-featured, offline-first Hindu Panchang app for Android. Computes all five Panchang elements astronomically on-device — no API, no internet dependency, works anywhere. With Language toggle",
    tools: ["Flutter"],
    code: "https://github.com/harshyadavDeveloper/purna_panchang",
    demo: "",
    images: [
      "/image/purna-panchang/purna-1.jpeg",
      "/image/purna-panchang/purna-2.jpeg",
      "/image/purna-panchang/purna-3.jpeg",
      "/image/purna-panchang/purna-4.jpeg",
      "/image/purna-panchang/purna-5.jpeg",
      "/image/purna-panchang/purna-6.jpeg",
      "/image/purna-panchang/purna-7.jpeg",
    ],
    role: "Android Developer",
  },
  {
    id: 3,
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
    ],
  },

  {
    id: 4,
    name: "Notezipper",
    description:
      "NoteZipper is a task management web application that allows users to register or log in and create notes to track their daily tasks. Users can add, edit, and delete notes as needed, ensuring an organized workflow. The platform includes a filtering feature that enables users to sort notes based on their creation date, making it easy to find relevant tasks. A secure authentication system ensures data privacy, while a responsive interface enhances usability. NoteZipper aims to simplify task tracking, providing a seamless and efficient note-taking experience to help users stay productive and organized in their daily routines.",
    tools: ["React", "Node", "Rapid API", "MongoDb", "Bootstrap"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/notezipper-frontend",
    demo: "https://personalnotezipper.netlify.app",
    images: ["/image/notezipper/note-zipper-1.png"],
  },

  {
    id: 5,
    name: "World Whispers",
    description:
      "A dynamic website offering fascinating and verified facts about countries worldwide, enabling users to explore cultural, historical, and geographical insights with ease.",
    tools: ["Reactjs", "CSS"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/country_facts",
    demo: "https://coutryunknownfacts.netlify.app/",
    images: [
      "/image/world-whispers/w-w-1.png",
      "/image/world-whispers/w-w-2.png",
      "/image/world-whispers/w-w-3.png",
      "/image/world-whispers/w-w-4.png",
    ],
  },

  {
    id: 6,
    name: "Fitness App ",
    description:
      "Creared a fitness app functionality to choose exercise categories and specofic muscle groups, brose more thaan 1000 exercises with practical examples, pagination, exercise details, pool related videos from youtube and display similar exercises.",
    tools: ["HTML", "CSS", "Rapid API", "Material UI"],
    role: "Developer",
    code: "https://github.com/harshyadavDeveloper/gym_app",
    demo: "https://personal-fitness-exercise.netlify.app/",
    images: [
      "/image/fitness-app/fitness-1.png",
      "/image/fitness-app/fitness-2.png",
      "/image/fitness-app/fitness-3.png",
      "/image/fitness-app/fitness-4.png",
      "/image/fitness-app/fitness-5.png",
      "/image/fitness-app/fitness-6.png",
    ],
  },
  {
    id: 7,
    name: "TIC TAC TOE ",
    description:
      "Designed and developed a fully web-based Tic tac toe game using HTML, CSS and JavaScript to deepen my understanding of front-end web technologies. The game allows the user to complete the game in real time, with interactive features such as highlighting winning and preventing invalid moves. ",

    tools: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/harshyadavDeveloper/TitTacToe",
    role: "Developer",
    demo: "https://harshtoetictac.netlify.app/",
    images: [
      "/image/tic-tac-toe/tic-1.png",
      "/image/tic-tac-toe/tic-2.png",
      "/image/tic-tac-toe/tic-3.png",
    ],
  },
  {
    id: 8,
    name: "Chess Game",
    description:
      "I have created a fast and responsive chess game with real time multiplayer functionality.",
    tools: ["ReactJS", "Material UI", "socket.io"],
    code: "https://github.com/harshyadavDeveloper/ChessGame",
    demo: "",
    images: ["/image/chess-game/chess.png"],
    role: "Developer",
  },
  {
    id: 9,
    name: "BMI Mini app",
    description:
      "I have created a simple flutter application in which you can see your body mass index by entering the relative information.",
    tools: ["Flutter"],
    code: "https://github.com/harshyadavDeveloper/bmi_miniapp_flutter",
    demo: "",
    images: [
      "/image/bmi-mini-app/bmi-1.png",
      "/image/bmi-mini-app/bmi-2.png",
      "/image/bmi-mini-app/bmi-3.png",
    ],
    role: "Android Developer",
  },
   {
    id: 10,
    name: "Mini TODO App",
    description:
      "A modern, responsive Todo application built with React featuring task scheduling, dark/light theme persistence, and a clean UI. Users can add tasks with time, mark them complete, and manage their day efficiently with an intuitive interface.",
    tools: ["Reactjs"],
    code: "https://github.com/harshyadavDeveloper/mini-to-do-project",
    demo: "https://my-mini-to-do.netlify.app/",
    images: [
      "/image/to-do/todo-1.png",
      "/image/to-do/todo-2.png",
      "/image/to-do/todo-3.png",
    ],
    role: "Software Developer",
  },
];

export const professionalProjects = [
  {
    name: "Amruth E-mart and Admin Panel",
    tools: ["React", "Context API"],
    role: "Software Developer",
    description: "Worked at Dreamlogic Infosystems",
    // code: "",
    demo: "",
    images: ["/image/emart/emart-1.png", "/image/emart/emart-2.png"],
  },
  {
    name: "Salcete Pharmacy App",
    tools: ["Flutter", "Clean Architecture"],
    role: "Software Developer",
    description: "Worked at Dreamlogic Infosystems",
    // code: "",
    demo: "https://play.google.com/store/apps/details?id=com.salcete.pharmacy_android",
    images: [
      "/image/pharma/pharma-1.jpg",
      "/image/pharma/pharma-2.jpg",
      "/image/pharma/pharma-3.jpg",
      "/image/pharma/pharma-4.jpg",
    ],
  },
  {
    name: "GELTM",
    tools: ["Flutter", "Provider"],
    role: "Software Engineer",
    description: "Worked at Goa Electronics Limited",
    // code: "",
    demo: "https://play.google.com/store/apps/details?id=com.geltm&pcampaignid=web_share",
    images: [
      "/image/geltm/geltm-1.png",
      "/image/geltm/geltm-2.png",
      "/image/geltm/geltm-3.png",
      "/image/geltm/geltm-4.png",
    ],
  },
  {
    name: "Goa GIS Survey",
    tools: ["Java", "XML"],
    role: "Software Engineer",
    description: "Worked at Goa Electronics Limited",
    // code: "",
    demo: "https://play.google.com/store/apps/details?id=com.gel.onemapgoa&pcampaignid=web_share",
    images: [
      "/image/gis/gis-1.png",
      "/image/gis/gis-2.png",
      "/image/gis/gis-3.png",
      "/image/gis/gis-4.png",
    ],
  },
];

export const freelanceProjects = [
  {
    name: "NDMIC Website",
    tools: ["Reactjs", "Nodejs", "MySQL", "Bootstrap"],
    role: "Freelancer",
    description: "Built for a client",
    // code: "N/A",
    demo: "https://ndmic.com",
    images: [
      "/image/ndmic/ndmic-1.png",
      "/image/ndmic/ndmic-2.png",
      "/image/ndmic/ndmic-3.png",
      "/image/ndmic/ndmic-4.png",
      "/image/ndmic/ndmic-5.png",
      "/image/ndmic/ndmic-6.png",
    ],
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

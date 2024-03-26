import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Fitness App ",
    description:"Creared a fitness app functionality to choose exercise categories and specofic muscle groups, brose more thaan 1000 exercises with practical examples, pagination, exercise details, pool related videos from youtube and display similar exercises.",
    tools: ["HTML", "CSS", "Rapid API", "Material UI"],
    role: "Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Slot Machine",
    description:
      "It is a simplified slot machine small project in which the user can select number of lines on which he wants to bet and related to that he can win the bet amount. Develop the project to get insides in the JavaScript functions",
    tools: ["NodeJS"],
    role: "Developer",
    code: "",
    demo: "",
    image: travel, // Assign the value of the variable containing the image path
  },
  {
    id: 3,
    name: "TIC TAC TOE ",
    description:
      "Designed and developed a fully web-based Tic tac toe game using HTML, CSS and JavaScript to deepen my understanding of front-end web technologies. The game allows the user to complete the game in real time, with interactive features such as highlighting winning and preventing invalid moves. ",

    tools: ["HTML", "CSS", "JavaScript"],
    code: "",
    role: "Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Chess Game",
    description:
      "I have created a fast and responsive chess game with real time multiplayer functionality.",
    tools: ["ReactJS", "Material UI", "socket.io"],
    code: "",
    demo: "",
    image: ayla,
    role: "Developer",
  },
  {
    id: 5,
    name: "BMI Mini app",
    description:
      "I have created a simple flutter application in which you can see your body mass index by entering the relative information.",
    tools: ["Flutter"],
    code: "",
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

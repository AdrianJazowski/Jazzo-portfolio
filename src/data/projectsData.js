/** @format */
import BoardgameMaker from "../assets/BoardgameMaker.PNG";
import OnlineShop from "../assets/OnlineShop.PNG";
import Hotel from "../assets/Hotel.PNG";
import QuizApp from "../assets/QuizApp.PNG";
import Blog from "../assets/Blog.png";
import LinkedIn from "../assets/LinkedIn.PNG";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { DiJavascript, DiCss3, DiBootstrap } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    projectName: "Online Shop",
    projectImg: OnlineShop,
    procjetTitle:
      "Aplikacja sklepu internetowego z telefonami. Projekt zbudowany przy wykorzystaniu Reacta, React-router-dom, zarządzanie stanem za pomocą context API. Projekt wykorzystuje do stylowania Material Ui, dane zarządzane za pomocą CMSa.",
    gitLink: "https://github.com/AdrianJazowski/onlineShop",
    typeProject: "React",
    demo: "https://eshoppage.netlify.app/",
    isFlipped: false,

    projectIcons: [<FaReact />, <DiCss3 />, <DiJavascript />],
  },
  {
    id: 2,
    projectName: "Boardgame Maker",
    projectImg: BoardgameMaker,
    procjetTitle:
      "Strona internetowa, wizytówka fikcyjnej firmy zajmującej się tworzeniem gier planszowych. Projekt napisany przy wykorzystaniu HTMLa, Bootstrapa, JavaScriptu oraz Sassa. Projekt w pełni responsywny.",
    gitLink: "https://github.com/AdrianJazowski/boardgameMaker",
    demo: "https://boardgamemaker.netlify.app/",
    typeProject: "JS",

    isFlipped: false,
    projectIcons: [<DiJavascript />, <DiCss3 />, <DiBootstrap />, <FaHtml5 />],
  },
  {
    id: 3,
    projectName: "Type Quiz",
    projectImg: QuizApp,
    procjetTitle:
      "Internetowy quiz wiedzy, napisany przy pomocy Typescript, w ramach nauki Typscripta.",
    gitLink: "https://github.com/AdrianJazowski/Quiz",
    demo: "https://quizts.netlify.app/",
    typeProject: "React",

    isFlipped: false,

    projectIcons: [<FaReact />, <SiTypescript />, <DiCss3 />],
  },
  {
    id: 4,
    projectName: "Hotel Page",
    projectImg: Hotel,
    procjetTitle:
      "Strona portalu z pokojami do wynajęcia. Projekt korzystajacy z Reacta oparty na klasach, wykorzystujący React-router-dom, context oraz css.",
    gitLink: "https://beachresortpage.netlify.app/",
    typeProject: "React",
    demo: "https://beachresortpage.netlify.app/",
    isFlipped: false,

    projectIcons: [<FaReact />, <DiJavascript />, <DiCss3 />],
  },
  {
    id: 5,
    projectName: "Boardgame Blog",
    projectImg: Blog,
    procjetTitle:
      "Forum o tematyce gier planszowych, stworzone przy wykorzystaniu Reacta oraz Reduxa odpowiedzialnego za zarządzanie stanem. Projekt w trakcie powstawania.",
    gitLink: "https://github.com/AdrianJazowski/boardgameMaker",
    typeProject: "Redux",

    isFlipped: false,

    projectIcons: [<FaReact />, <SiRedux />, <DiJavascript />],
  },
  {
    id: 6,
    projectName: "LinkedIn clone",
    projectImg: LinkedIn,
    procjetTitle:
      "Imitacja portalu społecznościowego, która powstała w ramach nauki reduxa oraz firebasea. Projekt zawiera cześciową funkcjonalność taką jak: logowanie, dodwanie postów.",
    gitLink: "https://github.com/AdrianJazowski/boardgameMaker",
    typeProject: "Redux",
    demo: "https://clone-linkedind.netlify.app/",
    isFlipped: false,

    projectIcons: [<FaReact />, <SiRedux />, <DiJavascript />],
  },
];

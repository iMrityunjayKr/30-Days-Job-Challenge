import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import "./css/index.css";
import MyCourse from "./components/MyCourse";
import Demo from "./components/Demo";
createRoot(document.getElementById("root")).render(
  <>
    {/* <Counter /> */}
    {/* <MyCourse/> */}
    <Demo />
  </>,
);

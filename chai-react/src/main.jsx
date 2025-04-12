import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Link from "./Footer.jsx";
import Chai from "./Chai.jsx";

/*
const reactElement = {
  type : 'a',
  props: {
      href: 'https:google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
  */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Chai />
    
    {"-----------------------------------------------------------"}
    <Link />
    
  </StrictMode>
);

createRoot(document.querySelector(".steam")).render(
  <App></App>
);
// createRoot(document.querySelector('#root')).render(
//   <App></App>
// );
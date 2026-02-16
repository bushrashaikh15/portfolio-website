import React, { Suspense, lazy } from "react";
import "./style.css";

const Navbar = lazy(()=>import("./components/Navbar"));
const About = lazy(()=>import("./components/About"));
const Projects = lazy(()=>import("./components/Projects"));
const Skills = lazy(()=>import("./components/Skills"));
const Resume = lazy(()=>import("./components/Resume"));
const Contact = lazy(()=>import("./components/Contact"));

function App(){
 return(
  <Suspense fallback={<h1 style={{textAlign:"center"}}>Loading...</h1>}>
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Resume/>
    <Contact/>
  </Suspense>
 );
}

export default App;

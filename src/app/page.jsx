import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Head from "next/head";
export default function Home() {
  return (
   <div>
    <Head>
      <title>PORTFOLIO | ReactJS - TS</title>
    </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Publication />
    <Contact />
   </div>
  );
}

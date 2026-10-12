import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Contact from "./components/Contact";

export const metadata = {
  title: 'Wasi Uddin Bhuyian — Software Developer',
  description: 'Portfolio of Wasi Uddin Bhuyian, Junior Software Developer specialising in React, Next.js, and full-stack JavaScript.',
}

export default function Home() {
  return (
    <div className='bg-[#0a0a0a]'>
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
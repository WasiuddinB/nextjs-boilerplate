import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Wasi Uddin Bhuyian — Software Developer',
  description: 'Portfolio of Wasi Uddin Bhuyian, Junior Software Developer specialising in React, Next.js, and full-stack JavaScript.',
}

export default function Home() {
  return (
    <>
      <a
        href='#content'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:bg-canvas focus:px-4 focus:py-2 focus:text-ink'
      >
        Skip to content
      </a>
      <Navbar />
      <main id='content'>
        <Main />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useState } from 'react';
import Layout from './layout/Layout';
import Hero from './assets/components/Hero';
import AboutMe from './assets/components/AboutMe';
import MyProjects from './assets/components/MyProjects';
import Header from './layout/Header';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';
function App() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="w-full max-w-[1920px] flex flex-col mx-auto flex-grow min-h-screen bg-bodyDark">
      {/* <Layout> */}
      <Header />
      <Hero scrollToSection={scrollToSection} />
      {/* <Header /> */}
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
      {/* <Footer /> */}
      {/* <div className="h-24"></div> */}
      {/* </Layout> */}
    </main>
  );
}

export default App;

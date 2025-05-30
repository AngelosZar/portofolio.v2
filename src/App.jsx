import { useState } from 'react';
import Layout from './layout/Layout';
import Hero from './assets/components/Hero';
import AboutMe from './assets/components/AboutMe';
import MyProjects from './assets/components/MyProjects';
function App() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
        <MyProjects />
      </Layout>
    </>
  );
}

export default App;

import cvPdf from '../media/Angelos_Zaros_CV.pdf';
function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row flex-grow px-4 w-full max-w-[1920px] mx-auto items-center justify-center min-h-screen bg-bodyDark py-8 gap-8"
    >
      <div className="mb-8">
        <div className="w-[250px] h-[250px] relative">
          <img
            src="https://images.unsplash.com/photo-1476348644449-f68b865b98e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover shadow-lg rounded-full aspect-square"
          />
        </div>
      </div>
      <div className="max-w-xl flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center gap-4 justify-center md:justify-start my-8 flex-wrap">
          <h3 className="font-bold text-green-500">About Me</h3>
          <div className="h-[1px] w-[55%] bg-gray-400"></div>
        </div>
        <p className="text-gray-400 text-lg">
          Currently pursuing Front-End Development at Noroff Vocational School
          (2023-2025), I'm passionate about creating engaging web experiences.
          With a solid grasp of HTML5, CSS3, and JavaScript fundamentals, I
          build responsive websites and interfaces. My experience includes
          working with testing frameworks like Jest and Cypress, and I'm
          currently expanding my knowledge of React and Tailwind CSS. Coming
          from a non-tech background, I bring fresh perspectives while
          continuously learning through hands-on projects and modern web
          technologies.
        </p>
        <a
          className="!text-green-500 hover:!text-green-300 !no-underline !transition-colors !duration-300 self-end font-medium"
          // href="./assets/media/Angelos_Zaros_CV.pdf"
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          See my cv
        </a>
      </div>
    </section>
  );
}

export default AboutMe;

function Hero({ scrollToSection }) {
  return (
    <section className="w-full max-w-[1920px] flex flex-col items-center justify-center mx-auto flex-grow min-h-screen">
      <div className="mx-auto h-full px-2">
        <div className="flex flex-col gap-2 h-full max-w-xl">
          <span className="text-green-400">Hi, my name is </span>
          <h1 className="text-white">Angelos Zaros</h1>
          <h2 className="text-gray-300">
            I am newly educated front end developer
          </h2>
          <p className="text-gray-400 mt-8 pt-8">
            A fresh front-end developer with a hunger for learning. While my
            roots are in front-end development, I'm actively expanding my
            skillset across the full stack
          </p>
          <a
            href="#projects"
            className="!text-green-500 hover:!text-green-300 !no-underline !transition-colors !duration-300 self-end font-medium"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(e, 'projects');
            }}
          >
            See my portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

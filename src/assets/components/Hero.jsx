function Hero() {
  return (
    <section className="w-full max-w-[1920px] flex flex-col items-center justify-center mx-auto flex-grow min-h-screen">
      <div className="mx-auto h-full">
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
          <h href="#" className="text-green-500 hover:text-green-300 self-end">
            See my portofolio
          </h>
        </div>
      </div>
      {/*  */}
      {/* <div className=" bg-black text-green-500 rounded-lg shadow-lg max-w-md mx-auto p-12 m-12">
        <div className="flex flex-col gap-4">
          <p>angelos@portfolio:~$ cat intro.txt</p>
          <p> Hey there! 👋 </p>
          <p>
            I'm Angelos Zaros - a fresh front-end developer with a hunger for
            learning. While my roots are in front-end development, I'm actively
            expanding my skillset across the full stack:
          </p>
          <ul>
            <li>- Diving deep into design principles and UI/UX</li>
            <li>- Mastering modern front-end technologies</li>
            <li>- Exploring back-end services and database design</li>
            <li>- Learning to build robust APIs</li>
          </ul>
          I'm on a mission to become a well-rounded developer who can bring
          ideas to life from concept to deployment.
          <p> [Type 'journey' to see my learning path]</p>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;

function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-xl
     flex flex-col mx-auto flex-grow items-center justify-center bg-bodyDark self-center gap-12 min-h-screen"
    >
      <h3 className="text-green-500 py-12">Tech stack </h3>
      <div>
        <div className="flex justify-center  flex-wrap gap-8">
          <div className="flex justify-center gap-8">
            <img
              src="https://skillicons.dev/icons?i=jest"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=cypress"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=postman"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=github"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=redis"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=linux"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center gap-8">
            <img
              src="https://skillicons.dev/icons?i=html"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=css"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=js"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=redux"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=express"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=figma"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center gap-8">
            <img
              src="https://skillicons.dev/icons?i=netlify"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=sass"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=git"
              className="w-16 h-16"
            />
            <img
              src="https://skillicons.dev/icons?i=vercel"
              className="w-16 h-16"
            />
            {/* <img
              src="https://skillicons.dev/icons?i=vite"
              className="w-16 h-16"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

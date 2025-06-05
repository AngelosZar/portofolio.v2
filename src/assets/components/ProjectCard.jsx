import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function ProjectCard({ projects }) {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 p-4 text-gray-400 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="md:w-1/2">
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* <div className="flex flex-col justify-center md:w-1/2 md:absolute md:right-18 md:top-1/2 md:transform md:-translate-y-1/2 md:pr-4 gap-4 border"> */}
      <div className="flex flex-col justify-center md:w-1/2 gap-4 border">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-">
            <h4>{projects.title}</h4>
            <p>{projects.description}</p>
          </div>
          <div className="flex self-end gap-4 mt-2">
            {projects.technologies.map((tech, index) => (
              <p key={index} className="text-gray-200">
                {tech}
              </p>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <span>
              <FaGithub
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open(
                    'https://github.com/AngelosZar/Auction-House-Project',
                    '_blank'
                  )
                }
              />
            </span>
            <span>
              <FaExternalLinkAlt
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open(
                    'https://angelos-zar-demo-auction-house.vercel.app/',
                    '_blank'
                  )
                }
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

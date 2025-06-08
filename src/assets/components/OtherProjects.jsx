import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import forkifyImg from '../media/forkify1.png';
import worldWiseImg from '../media/worldwise.png';
import acmeRocketsImg from '../media/acmeRockets.png';
function OtherProjects() {
  return (
    <section className="w-full max-w-4xl flex flex-col mx-auto flex-grow items-center justify-center bg-bodyDark self-center gap-22 min-h-screen">
      <h3 className="font-bold text-green-500">Other Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
        <div className="grid grid-rows-[auto_1fr_auto_auto] gap-4 max-w-sm h-full transform transition-transform duration-300 hover:-translate-y-2">
          <div className="flex gap-4 items-center">
            <h6 className="text-white font-semibold">Acme rockets</h6>
            <span>
              <FaGithub
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open(
                    'https://github.com/AngelosZar/Acme_Rockets_tailwindcss',
                    '_blank'
                  )
                }
              />
            </span>
            <span>
              <FaExternalLinkAlt
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open('https://acme-rockets-ang.netlify.app/', '_blank')
                }
              />
            </span>
          </div>

          <div className="text-gray-400">
            <p>Mini project on a fictional Rocket company using tailwind css</p>
          </div>

          <div className="flex-1">
            <img
              src={acmeRocketsImg}
              alt="acme rockets web app"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <p className="text-white text-end font-medium">HTML Tailwind</p>
        </div>

        <div className="grid grid-rows-[auto_1fr_auto_auto] gap-4 max-w-sm h-full transform transition-transform duration-300 hover:-translate-y-2">
          <div className="flex gap-4 items-center">
            <h6 className="text-white font-semibold">Worldwise</h6>
            <span>
              <FaGithub
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open(
                    'https://github.com/AngelosZar/worldWise',
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
                    'https://world-wise-one-sandy.vercel.app/',
                    '_blank'
                  )
                }
              />
            </span>
          </div>

          <div className="text-gray-400">
            <p>
              A single page application that uses the leaflet api. User can
              search on map save towns and countries visited and keep notes
              about the trip
            </p>
          </div>

          <div className="flex-1">
            <img
              src={worldWiseImg}
              alt="worldwise web app"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <p className="text-white text-end font-medium">React Leaflet CSS</p>
        </div>

        <div className="grid grid-rows-[auto_1fr_auto_auto] gap-4 max-w-sm h-full transform transition-transform duration-300 hover:-translate-y-2">
          <div className="flex gap-4 items-center">
            <h6 className="text-white font-semibold">Forkify</h6>
            <span>
              <FaGithub
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open(
                    'https://github.com/AngelosZar/forkify-Recipe-App',
                    '_blank'
                  )
                }
              />
            </span>
            <span>
              <FaExternalLinkAlt
                className="text-xl text-gray-300 cursor-pointer hover:text-gray-100 transition-colors duration-300 hover:scale-125"
                onClick={() =>
                  window.open('https://forkify-angelos.netlify.app/', '_blank')
                }
              />
            </span>
          </div>

          <div className="text-gray-400">
            <p>
              A single page application where users can find, upload and
              bookmark recipes with advanced search functionality
            </p>
          </div>

          <div className="flex-1">
            <img
              src={forkifyImg}
              alt="forkify web app"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <p className="text-white text-end font-medium">
            HTML Sass JavaScript
          </p>
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;

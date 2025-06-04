// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function MyProjects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen gap-12 w-full max-w-6xl mx-auto p-8 self-center"
    >
      <h2 className="text-green-600">Project</h2>

      <div className="relative flex flex-col md:flex-row gap-8 p-4 text-gray-400 rounded-lg">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1748679767437-00b5c0327b1a?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* <div className="flex flex-col justify-center md:w-1/2 md:absolute md:right-18 md:top-1/2 md:transform md:-translate-y-1/2 md:pr-4 gap-4 border"> */}
        <div className="flex flex-col justify-center md:w-1/2 gap-4 border">
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg">
              <h4>Auction house</h4>
              <p className="">
                An auction platform built with native JavaScript as part of the
                Noroff School of Technology curriculum. The application features
                a comprehensive bidding system with complete CRUD operations for
                auction listings. Built using JavaScript without external
                frameworks or libraries, demonstrating strong fundamentals in
                state management, API integration, and user interface design.
              </p>
            </div>
            <div className="flex self-end gap-4 mt-2">
              <p className="text-gray-200">JS</p>
              <p className="text-gray-200">Tailwind</p>
              <p className="text-gray-200">Html</p>
            </div>
            <div className="flex justify-end gap-4 mt-2">
              <span>
                <FaGithub className="text-xl text-gray-300" />
              </span>
              <span>
                <FaExternalLinkAlt className="text-xl text-gray-300" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;

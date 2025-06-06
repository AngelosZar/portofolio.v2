import { ProjectCard } from './ProjectCard';
import auctionHouseImg from '../media/auction-house.jpg';
import hotViewLabsImg from '../media/HotviewLabs-screenshot.jpg';
function MyProjects() {
  const projects = [
    {
      id: 1,
      title: 'Holidaze',
      description:
        'A travel booking platform designed to simplify the process of finding and booking accommodations. Users can search for hotels, view detailed information, and make reservations seamlessly. The platform is built with React JS and Tailwind CSS, ensuring a responsive and user-friendly experience.',
      image:
        'https://images.unsplash.com/photo-1748679767437-00b5c0327b1a?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Tailwind', 'React JS'],
      githubUrl: 'https://github.com/AngelosZar/holidaze',
      liveUrl: 'https://angelos-zar-demo-auction-house.vercel.app/',
    },
    {
      id: 2,
      title: 'Auction house',
      description:
        'An auction platform built with native JavaScript as part of the Noroff School of Technology curriculum. The application features a comprehensive bidding system with complete CRUD operations for auction listings. Built using JavaScript without external frameworks or libraries, demonstrating strong fundamentals in state management, API integration, and user interface design.',
      image: auctionHouseImg,
      technologies: ['HTML', 'Tailwind', 'Javascript'],
      githubUrl: 'https://github.com/AngelosZar/Auction-House-Project',
      liveUrl: 'https://angelos-zar-demo-auction-house.vercel.app/',
    },

    {
      id: 3,
      title: 'HotView Labs',
      description:
        'HotView Labs is a responsive web application built with vanilla JavaScript, HTML, and CSS. The platform features six pages divided between public and administrative access. Public users can access the Homepage, Single Blog View, Login, and About Us pages, while authenticated administrators have exclusive access to Blog Edit and User Registration functionalities.',
      image: hotViewLabsImg,
      technologies: ['HTML', 'CSS', 'Javascript'],
      githubUrl: 'https://github.com/NoroffFEU/FED1-PE1-AngelosZar',
      liveUrl: 'https://hot-view-labs.netlify.app/index.html',
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen gap-22 w-full max-w-6xl mx-auto p-8 self-center"
    >
      <h2 className="text-green-600">Project</h2>
      {/* <ProjectCard /> */}
      {projects.map((project) => (
        <ProjectCard key={project.id} projects={project} />
      ))}
    </section>
  );
}

export default MyProjects;

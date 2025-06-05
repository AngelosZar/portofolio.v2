import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen gap-12 w-full max-w-6xl mx-auto p-8 self-center"
    >
      <h2 className="text-green-600">Contact</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-400">
          Feel free to reach out to me via email or connect with me on LinkedIn.
        </p>
        <a
          href="mailto:angelosZaros@proton.me"
          className="!text-green-500 hover:!text-green-300 transition-colors duration-300"
        >
          Email Me
        </a>
      </div>
      <div className="flex justify-end gap-4 mt-2">
        <span>
          <FaGithub className="text-xl text-gray-300" />
        </span>
        <span>
          <FaLinkedin className="text-xl text-gray-300" />
        </span>
        <span>
          <FaDiscord className="text-xl text-gray-300" />
        </span>
      </div>
    </section>
  );
}

export default Contact;

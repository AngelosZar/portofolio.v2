import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaDiscord,
  FaArrowUp,
  FaArrowCircleUp,
} from 'react-icons/fa';

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
          className="!text-green-500 hover:!text-green-300 transition-colors duration-300 text-xl"
        >
          Email Me
        </a>
      </div>
      <div className="flex justify-end gap-4 mt-2">
        <span>
          <FaGithub
            className="text-3xl text-gray-300 hover:text-gray-100 hover:scale-125 transition-colors duration-300 cursor-pointer"
            onClick={() =>
              window.open('https://github.com/AngelosZar', '_blank')
            }
          />
        </span>
        <span>
          <FaLinkedin
            className="text-3xl text-gray-300 hover:text-gray-100 hover:scale-125 transition-colors duration-300 cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/angelos-zaros-963bb71b0/',
                '_blank'
              )
            }
          />
        </span>
        <span>
          <FaDiscord
            className="text-3xl text-gray-300 hover:text-gray-100 hover:scale-125 transition-colors duration-300 cursor-pointer"
            onClick={() =>
              window.open('https://discord.com/channels/@angzar92', '_blank')
            }
          />
        </span>
      </div>
      <div>
        <FaArrowCircleUp
          className="text-3xl text-gray-300 hover:text-gray-100 hover:scale-125
        transition-colors duration-300 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        />
      </div>
    </section>
  );
}

export default Contact;

function Header({ scrollToSection }) {
  return (
    <header
      id="header"
      className="w-full max-w-[90%] h-12 flex p-4 text-white justify-end mx-auto "
    >
      <nav className="px-24 mx-12 max-w-lg  flex items-center justify-between">
        <ul className="flex gap-8 align-center justify-center text-xl">
          <li className="hover:text-green-500">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              About Me
            </a>
          </li>
          <li className="hover:text-green-500">
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              My Projects
            </a>
          </li>
          <li className="hover:text-green-500">
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
              Tech stack
            </a>
          </li>
          <li className="hover:text-green-500">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import { Link } from "react-scroll";

const Navbar = () => {
  const handleDownload = () => {
    const url = "/public/MASHUD AL HASAN_MERN STACK DEVELOPER.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "MASHUD AL HASAN_MERN STACK DEVELOPER.pdf";
    anchor.click();
  };

  return (
    <nav>
      <div className="bg-white/10 dark:bg-gray-800 font-medium bg-opacity-80 fixed z-10 top-0 backdrop-filter backdrop-blur-xl w-full flex items-center justify-end gap-4 lg:gap-8 px-2 lg:px-8 py-2 lg:mx-auto text-neutral-500 dark:text-gray-300 text-sm lg:text-base">
        <Link
          activeClass="text-neutral-800"
          to="hero"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1000}
          className="transition-colors duration-300 transform dark:text-neutral-200 cursor-pointer"
        >
          home
        </Link>

        <Link
          activeClass="text-neutral-800"
          to="project"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
          className="transition-colors duration-300 transform dark:text-neutral-200 cursor-pointer"
        >
          projects
        </Link>

        <Link
          activeClass="text-neutral-800"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="transition-colors duration-300 transform dark:text-neutral-200 cursor-pointer"
        >
          contact
        </Link>

        <button
          onClick={handleDownload}
          className="p-2 py-4 lg:p-4 font-medium tracking-wide lg:whitespace-nowrap text-white capitalize transition-colors duration-300 transform bg-neutral-800 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-opacity-80"
        >
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

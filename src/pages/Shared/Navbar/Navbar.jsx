const Navbar = () => {
  const handleDownload = () => {
    const url = "/public/MASHUD AL HASAN_MERN STACK DEVELOPER.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "MASHUD AL HASAN_MERN STACK DEVELOPER.pdf";
    anchor.click();
  };

  return (
    <nav className="bg-white dark:bg-gray-800 font-medium">
      <div className="w-full lg:w-10/12 flex items-center justify-end gap-4 lg:gap-8 px-2 lg:px-8 py-2 lg:mx-auto text-gray-600 dark:text-gray-300 text-sm lg:text-base">
        <a
          href="#"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-500"
        >
          home
        </a>

        <a
          href="#projects"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-500"
        >
          projects
        </a>

        <a
          href="#contact"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-500"
        >
          contact
        </a>

        <button
          onClick={handleDownload}
          className="p-2 py-4 lg:p-4 font-medium tracking-wide lg:whitespace-nowrap text-white capitalize transition-colors duration-300 transform bg-black rounded-full hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

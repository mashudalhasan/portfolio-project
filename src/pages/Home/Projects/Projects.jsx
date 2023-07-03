import project1 from "../../../assets/screencapture-the-language-space-154db-web-app-2023-06-16-22_13_00.png";
import project2 from '../../../assets/toyland-mockup.png';
import project3 from '../../../assets/arabian-chefs.png';

const Projects = () => {
  return (
    <div id="projects" className="mt-20 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 lg:px-0">
      <a href="#" className="block">
        <img
          alt="language"
          src={project1}
          className="h-56 w-full rounded-3xl object-cover sm:h-64 lg:h-72"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">Language Space</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-gray-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Full Stack</p>
        </div>
      </a>
      <a href="#" className="block">
        <img
          alt="toyland"
          src={project2}
          className="h-56 w-full rounded-3xl object-cover sm:h-64 lg:h-72"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">Toy Land</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-gray-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Full Stack</p>
        </div>
      </a>
      <a href="#" className="block">
        <img
          alt="arabianChefs"
          src={project3}
          className="h-56 w-full rounded-3xl object-cover object-top sm:h-64 lg:h-72"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">Arabian Delights</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-gray-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Full Stack</p>
        </div>
      </a>
    </div>
  );
};

export default Projects;

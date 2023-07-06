import project1 from "../../../assets/screencapture-the-language-space-154db-web-app-2023-06-16-22_13_00.png";
import project2 from "../../../assets/toyland-mockup.png";
import project3 from "../../../assets/arabian-chefs.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-20 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 lg:px-0"
    >
      <div className="relative">
        <a
          href="#"
          className="flex justify-center items-center bg-gradient-to-br from-orange-100 to-pink-200 rounded-3xl overflow-hidden"
        >
          <img
            alt="language"
            src={project1}
            className="m-10 h-56 w-4/5 rounded-lg object-cover sm:h-64 lg:h-72"
          />
        </a>
        <div className="opacity-0 hover:opacity-100 absolute h-full w-full top-0 left-0 right-0 bottom-0 backdrop-blur-3xl rounded-3xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <div>
              <p className="text-3xl tracking-tight">Language Space</p>
              <p className="text-xs text-center mt-8">Full Stack</p>
            </div>
            <div className="w-3/4 mx-auto text-xs">
              <div className="flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  React
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Tailwind CSS
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Axios
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  Framer Motion
                </p>
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  Stripe
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Firebase
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  Node.js
                </p>
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  MongoDB
                </p>
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  Express.js
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  React Query
                </p>
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  JWT
                </p>
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  React Hook Form
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <a
          href="#"
          className="flex justify-center items-center bg-gradient-to-r from-rose-50 to-indigo-50 rounded-3xl overflow-hidden"
        >
          <img
            alt="toyland"
            src={project2}
            className="m-10 h-56 w-4/5 rounded-lg object-cover sm:h-64 lg:h-72"
          />
        </a>
        <div className="opacity-0 hover:opacity-100 absolute h-full w-full top-0 left-0 right-0 bottom-0 backdrop-blur-3xl rounded-3xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <div>
              <p className="text-3xl tracking-tight">Toy Land</p>
              <p className="text-xs text-center mt-8">Full Stack</p>
            </div>
            <div className="w-3/4 mx-auto text-xs">
              <div className="flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  React
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Tailwind CSS
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  AOS
                </p>
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  MongoDB
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Firebase
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  Node.js
                </p>
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  Express.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <a
          href="#"
          className="flex justify-center items-center bg-gradient-to-r from-green-100 to-sky-200 rounded-3xl overflow-hidden"
        >
          <img
            alt="arabianChefs"
            src={project3}
            className="m-10 h-56 w-4/5 rounded-lg object-cover sm:h-64 lg:h-72"
          />
        </a>

        <div className="opacity-0 hover:opacity-100 absolute h-full w-full top-0 left-0 right-0 bottom-0 backdrop-blur-3xl rounded-3xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <div>
              <p className="text-3xl tracking-tight">Arabian Delights</p>
              <p className="text-xs text-center mt-8">Full Stack</p>
            </div>
            <div className="w-3/4 mx-auto text-xs">
              <div className="flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  React
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Tailwind CSS
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  MongoDB
                </p>
                <p className="px-3 py-1 bg-white rounded-3xl text-center">
                  Firebase
                </p>
              </div>
              <div className="mt-2 flex justify-center items-center gap-2">
                <p className="px-2 py-1 bg-white rounded-3xl text-center">
                  Node.js
                </p>
                <p className="px-4 py-1 bg-white rounded-3xl text-center">
                  Express.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

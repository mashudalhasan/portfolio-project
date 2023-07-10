import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: "20%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 1.5 }}
      className="mt-20 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 lg:px-0"
    >
      {projects.map((project, index) => (
        <div key={project._id} id="project" className="relative">
          <div
            className={`flex justify-center items-center bg-color-${
              index + 1
            } rounded-3xl overflow-hidden`}
          >
            <img
              alt="language"
              src={project.image}
              className="m-10 h-56 w-4/5 rounded-lg object-cover object-top sm:h-64 lg:h-72"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 absolute h-full w-full top-0 left-0 right-0 bottom-0 backdrop-blur-3xl rounded-3xl transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center gap-8 h-full">
              <div>
                <p className="text-3xl tracking-tight text-neutral-800">
                  {project.name}
                </p>
              </div>
              <div className="w-3/4 mx-auto text-xs text-neutral-500 flex justify-center items-center gap-2">
                <Link to={project.liveLink}>
                  <button className="flex justify-center items-center gap-1 px-3 py-2 bg-neutral-800 text-white hover:bg-opacity-90 rounded-3xl text-center">
                    <FaLink /> Live
                  </button>
                </Link>
                <Link to={project.frontendLink}>
                  <button className="flex justify-center items-center gap-1 px-4 py-2 bg-neutral-800 text-white hover:bg-opacity-90 rounded-3xl text-center">
                    <FaGithub /> Frontend
                  </button>
                </Link>
                <Link to={project.backendLink}>
                  <button className="flex justify-center items-center gap-1 px-4 py-2 bg-neutral-800 text-white hover:bg-opacity-90 rounded-3xl text-center">
                    <FaGithub /> Backend
                  </button>
                </Link>
              </div>
              <div className="w-3/4 mx-auto text-xs text-neutral-500">
                {project.skills.map((skillsArray, index) => (
                  <div
                    key={index}
                    className="mt-2 flex justify-center items-center gap-2"
                  >
                    {skillsArray.map((skill, skillIndex) => (
                      <p
                        key={skillIndex}
                        className="px-2 py-1 bg-white rounded-3xl text-center"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Projects;

import photo from "../../../assets/IMG_4263.png";
import { FaCircle, FaCode } from "react-icons/fa";
import code from "../../../assets/coding.jpg";
import iphone from "../../../assets/Iphone Website Mockup.png";
import { useState } from "react";
import "./Home.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="w-full lg:w-10/12 mx-auto mt-10 lg:mt-32 px-3 lg:px-0">
        <p
          className="text-5xl lg:text-6xl font-light text-neutral-800 leading-tight"
          style={{ letterSpacing: "-1.6px" }}
        >
          Hello, I&apos;m <span className="font-normal">Mashud Al Hasan.</span>
          <br /> I help you build{" "}
          <span className="font-normal">outstanding</span> websites.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-28">
          <div className="bg-slate-100 rounded-3xl lg:w-2/5 h-full">
            <div className="pl-12 pr-24 py-10 h-[660px]">
              <div className="h-16 w-16 flex justify-center items-center bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full">
                <img className="p-4" src={photo} alt="" />
              </div>
              <h2 className="mt-4 text-xl">Mashud Al Hasan</h2>
              <p className="tracking-wide">Full Stack Developer</p>
              <p className="text-sm text-lime-700">
                <FaCircle className="inline-flex h-1 w-1 " /> Available
              </p>
              <div className="mt-20">
                <p className="font-light text-2xl">
                  I help peoples through building websites, with a focus on{" "}
                  <span className="font-normal">simplicity</span>,{" "}
                  <span className="font-normal">sophistication</span>, and{" "}
                  <span className="font-normal">efficiency</span>.
                </p>
              </div>
            </div>
          </div>
          {/* grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-3/4">
            <div className="bg-red-100 rounded-3xl relative h-80">
              <img
                className="rounded-3xl brightness-90 h-full"
                src={code}
                alt=""
              />
              <div className="bg-white rounded-full flex justify-center items-center absolute top-1/3 left-1/3 -translate-y-2 -translate-x-12 hover:origin-bottom hover:-rotate-6 transition duration-700 ease-in-out">
                <p className="p-4 text-center text-2xl">
                  Web Design <br /> & Development
                </p>
              </div>
            </div>
            <div
              className="relative bg-cyan-200 flex justify-center items-center overflow-hidden rounded-3xl h-80"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute bottom-1/2 transform transition-transform duration-500 ${
                  isHovered ? "translate-y-2/3" : "translate-y-full"
                }`}
              >
                <img className="w-1/2 mx-auto" src={iphone} alt="" />
              </div>
            </div>

            <div className="bg flex justify-center items-center h-80 rounded-3xl">
              <p className="font-extrabold text-5xl text-white p-12 transform transition-transform translate-y-2 hover:-translate-y-2 duration-500">
                Powerful <br />{" "}
                <span className="flex justify-center text-6xl transform transition-transform duration-500 hover:-translate-y-1 hover:backdrop-blur-md">
                  <FaCode />
                </span>
              </p>
            </div>
            <div className="bg-yellow-300  h-80 flex justify-center items-center rounded-3xl">
              <p className="text-center text-4xl leading-snug">
                <span>
                  Interactive <br />
                </span>{" "}
                <span>
                  User <br />
                </span>
                <span className="border-2 rounded-full transform transition-transform duration-500 ease-in-out hover:px-4">
                  Interfaces
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;

// bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-700 via-fuchsia-500

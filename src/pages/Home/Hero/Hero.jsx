import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import photo from "../../../assets/IMG_4263.png";
import { FaCode } from "react-icons/fa";
import code from "../../../assets/coding.jpg";
import iphone from "../../../assets/Iphone Website Mockup.png";
import "./Hero.css";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [iseTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: iseTextHovered ? 1 : 0,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255 255 255)",
      mixBlendMode: "difference",
      opacity: iseTextHovered ? 1 : 0,
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
    setIsTextHovered(true);
  };
  const textLeave = () => {
    setCursorVariant("default");
    setIsTextHovered(false);
  };

  return (
    <div
      id="hero"
      className="bg-white w-full lg:w-10/12 mx-auto mt-20 lg:mt-32 px-3 lg:px-0"
    >
      <div>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-5xl lg:text-6xl font-light text-black leading-tight"
          style={{ letterSpacing: "-1.6px" }}
        >
          Hello, I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ display: "inline-block" }}
            className="font-normal"
          >
            Mashud Al Hasan.
          </motion.span>
          <br /> I help you build{" "}
          <motion.span
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ display: "inline-block" }}
            className="font-normal"
          >
            outstanding
          </motion.span>{" "}
          websites.
        </p>

        {iseTextHovered && (
          <motion.div
            variants={variants}
            animate={cursorVariant}
            className="bg-black h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none"
          ></motion.div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10 lg:mt-28">
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="bg-neutral-50 rounded-3xl lg:w-2/5 h-full"
        >
          <div className="pl-12 pr-16 lg:pr-24 py-10 h-[560px] lg:h-[660px]">
            <div className="h-16 w-16 flex justify-center items-center bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full">
              <img className="p-4" src={photo} alt="" />
            </div>
            <h2 className="tracking-tight mt-4 text-xl text-neutral-800">
              Mashud Al Hasan
            </h2>
            <p className="tracking-tight text-neutral-500">
              Full Stack Developer
            </p>
            <p className="flex justify-start items-center gap-2 text-sm text-lime-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>{" "}
              Available
            </p>
            <div className="mt-20">
              <p className="tracking-tight font-light text-2xl text-neutral-600">
                I help peoples through building websites, with a focus on{" "}
                <span className="font-normal">simplicity</span>,{" "}
                <span className="font-normal">sophistication</span>, and{" "}
                <span className="font-normal">efficiency</span>.
              </p>
            </div>
          </div>
        </motion.div>
        {/* grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-3/4">
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="bg-red-100 rounded-3xl relative h-80"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5, delay: 1 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5 }}
            className="bg flex justify-center items-center h-80 rounded-3xl"
          >
            <p className="font-extrabold text-5xl text-white p-12 transform transition-transform translate-y-2 hover:-translate-y-2 duration-500">
              Powerful <br />{" "}
              <span className="flex justify-center text-6xl transform transition-transform duration-500 hover:-translate-y-1 hover:backdrop-blur-md">
                <FaCode />
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 1.5 }}
            className="bg-yellow-300  h-80 flex justify-center items-center rounded-3xl"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

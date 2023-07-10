import tailwind from "../../../assets/tailwind-css.svg";
import node from "../../../assets/nodejs.svg";
import query from "../../../assets/react-query.svg";
import next from "../../../assets/nextjs-icon.svg";
import vercel from "../../../assets/logo-vercel.svg";
import photoshop from "../../../assets/adobe-photoshop.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "20%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 1.5 }}
      className="mt-20"
    >
      <p className="font-light text-2xl text-center text-neutral-800">
        Areas of expertise
      </p>
      <div className="w-3/4 lg:w-full mx-auto mt-5 lg:mt-10 flex justify-center items-center gap-3 lg:gap-5">
        {/* html */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          id="html5"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#E44D26"
            d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"
          ></path>
          <path
            fill="#F16529"
            d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"
          ></path>
          <path
            fill="#EBEBEB"
            d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"
          ></path>
          <path
            fill="#fff"
            d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
          ></path>
        </svg>
        {/* css */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          id="css3"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#1572B6"
            d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
          ></path>
          <path
            fill="#33A9DC"
            d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
          ></path>
          <path
            fill="#fff"
            d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"
          ></path>
          <path
            fill="#EBEBEB"
            d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"
          ></path>
          <path
            fill="#fff"
            d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"
          ></path>
          <path
            fill="#EBEBEB"
            d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"
          ></path>
        </svg>
        {/* bootstrap */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2500"
          height="2500"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 256 256"
          id="bootstrap"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#563D7C"
            d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z"
          ></path>
          <path
            fill="#FFF"
            d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z"
          ></path>
        </svg>
        {/* tailwind */}
        <img
          src={tailwind}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        />
        {/* javascript */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          id="javascript"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#F0DB4F"
            d="M1.408 1.408h125.184v125.185h-125.184z"
          ></path>
          <path
            fill="#323330"
            d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
          ></path>
        </svg>
        {/* react */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 128 128"
          viewBox="0 0 128 128"
          id="react"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </g>
        </svg>
        {/* mongodb */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="mongodb"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#FFF"
            d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
          ></path>
          <path
            fill="#A6A385"
            d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
          ></path>
          <path
            fill="#FFF"
            d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
          ></path>
          <path
            fill="#499D4A"
            d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
          ></path>
          <path
            fill="#FFF"
            d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
          ></path>
          <path
            fill="#58AA50"
            d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
          ></path>
        </svg>
        {/* nodejs */}
        <img
          src={node}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        />
        {/* expressjs */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          id="express"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path>
        </svg>
      </div>
      <div className="w-3/4 lg:w-full mx-auto mt-5 lg:mt-10 flex justify-center items-center gap-3 lg:gap-5">
        {/* react query */}
        <img
          src={query}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        />
        {/* nextjs */}
        <img
          src={next}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
        />
        {/* jwt */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-100 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <polygon
            fill="#546e7a"
            points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"
          ></polygon>
          <polygon
            fill="#f50057"
            points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"
          ></polygon>
          <polygon
            fill="#d500f9"
            points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"
          ></polygon>
          <polygon
            fill="#29b6f6"
            points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"
          ></polygon>
          <polygon
            fill="#00e5ff"
            points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"
          ></polygon>
          <polygon
            fill="#546e7a"
            points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"
          ></polygon>
          <polygon
            fill="#f50057"
            points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"
          ></polygon>
          <polygon
            fill="#d500f9"
            points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"
          ></polygon>
          <polygon
            fill="#29b6f6"
            points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"
          ></polygon>
          <polygon
            fill="#00e5ff"
            points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"
          ></polygon>
        </svg>
        {/* typescript */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
        >
          <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
          <polygon
            fill="#fff"
            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
          ></polygon>
          <path
            fill="#fff"
            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
          ></path>
        </svg>
        {/* redux */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
        >
          <path
            fill="#7e57c2"
            d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
          ></path>
          <path
            fill="#7e57c2"
            d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
          ></path>
          <path
            fill="#7e57c2"
            d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
          ></path>
        </svg>
        {/* git */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
        >
          <path
            fill="#F4511E"
            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
          ></path>
        </svg>
        {/* vs code */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <linearGradient
            id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1"
            x1="37.8"
            x2="37.8"
            y1="43.37"
            y2="7.42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#29b6f6"></stop>
            <stop offset="1" stopColor="#13b2f6"></stop>
          </linearGradient>
          <path
            fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)"
            d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"
          ></path>
          <linearGradient
            id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2"
            x1="6.085"
            x2="34.793"
            y1="34.801"
            y2="7.173"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".115" stopColor="#0076bb"></stop>
            <stop offset=".257" stopColor="#0069b0"></stop>
            <stop offset=".28" stopColor="#0069b0"></stop>
            <stop offset=".424" stopColor="#0069b0"></stop>
            <stop offset=".491" stopColor="#0072b7"></stop>
            <stop offset=".577" stopColor="#0076bb"></stop>
            <stop offset=".795" stopColor="#0076bb"></stop>
            <stop offset="1" stopColor="#006eb9"></stop>
          </linearGradient>
          <path
            fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)"
            d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"
          ></path>
          <path
            fill="#0288d1"
            d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
          ></path>
        </svg>
        {/* netlify */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="netlify"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path d="m23.961 11.954-.017-.007.049.049c.021 0-.032-.042-.032-.042zM23.272 12.518v.044l.094.04z"></path>
          <linearGradient
            id="a"
            x1="14.937"
            x2="14.937"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#a)"
            d="M14.933 16.276v.004c.013.006.007.001 0-.004z"
          ></path>
          <linearGradient
            id="b"
            x1="3.046"
            x2="3.046"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#b)"
            d="m2.743 14.98 2.783-1.184.031-.009-5.023-1.049z"
          ></path>
          <linearGradient
            id="c"
            x1="6.959"
            x2="6.959"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#c)"
            d="M6.886 12.313c.055 0 .11.003.164.008l-.006-.001a1.31 1.31 0 0 1 .351.001l-.007-.001 2.741-4.265a1.19 1.19 0 0 1-.334-.826 1.166 1.166 0 0 1 .001-.277l-.001.006-3.328-1.54-2.678 2.608 2.94 4.294c.047-.005.102-.007.157-.007z"
          ></path>
          <linearGradient
            id="d"
            x1="14.411"
            x2="14.411"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#d)"
            d="m16.159 8.413.575-3.562-2.135-2.242-2.511 3.865v.053c.109.164.184.359.208.57l.001.006 3.505 1.487c.101-.078.22-.139.349-.176l.008-.001z"
          ></path>
          <linearGradient
            id="e"
            x1="19.685"
            x2="19.685"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#e)"
            d="m23.327 12.605-5.933-2.537c-.166.22-.414.37-.697.407l-.005.001-.649 3.971c.186.189.303.448.304.733l3.641.765 3.338-3.321v-.019z"
          ></path>
          <linearGradient
            id="f"
            x1="20.869"
            x2="20.869"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path fill="url(#f)" d="m20.293 8.276-2.554 1.048L24 11.988z"></path>
          <linearGradient
            id="g"
            x1="3.031"
            x2="3.031"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#g)"
            d="M5.818 13.085h.002a1.55 1.55 0 0 1 .242-.336l-.002.001-2.774-4.149L0 11.796l5.818 1.289z"
          ></path>
          <linearGradient
            id="h"
            x1="11.826"
            x2="11.826"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#h)"
            d="M15.446 9.439a.862.862 0 0 1 .001-.161v.004l.001-.009a.052.052 0 0 0-.011-.032l-3.276-1.395c-.218.33-.587.546-1.007.546l-.041-.001h-.197l-2.71 4.191 7.24-3.143z"
          ></path>
          <linearGradient
            id="i"
            x1="4.657"
            x2="4.657"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#i)"
            d="m3.339 15.494 1.235 1.226 1.402-2.179-.094-.095z"
          ></path>
          <linearGradient
            id="j"
            x1="17.21"
            x2="17.21"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#j)"
            d="M16.21 15.913c-.119.152-.275.27-.454.342l-.007.003-.763 4.736 4.447-4.411s-.01.02-.021.02v-.03l-3.202-.66z"
          ></path>
          <linearGradient
            id="k"
            x1="18.288"
            x2="18.288"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#k)"
            d="M16.974 8.507c.118.06.218.137.303.23l.001.001 2.354-1.049-2.197-2.178-.492 2.964.031.032z"
          ></path>
          <linearGradient
            id="l"
            x1="15.446"
            x2="15.446"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path fill="url(#l)" d="M15.446 9.439v.01z"></path>
          <linearGradient
            id="m"
            x1="9.105"
            x2="9.105"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#m)"
            d="m11.899 24 1.193-1.184-5.411-7.846c-.165.078-.36.124-.564.125h-.006c-.159 0-.313-.027-.455-.076l.01.003-1.548 2.253L11.899 24z"
          ></path>
          <linearGradient
            id="n"
            x1="12.103"
            x2="12.103"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#n)"
            d="M8.373 13.399c.034.052.068.114.099.178l.005.011 5.892 1.215a1.05 1.05 0 0 1 .822-.524h.004l.639-3.907-.135-.115-7.326 3.142z"
          ></path>
          <linearGradient
            id="o"
            x1="10.536"
            x2="10.536"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#o)"
            d="M11.951 0 7.033 4.829s-.01.052 0 .063l3.245 1.383a1.236 1.236 0 0 1 .839-.283h-.002c.142.001.28.024.408.066l-.01-.003 2.532-3.96L11.951 0z"
          ></path>
          <linearGradient
            id="p"
            x1="11.6"
            x2="11.6"
            y1="2.125"
            y2="22.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#39c4b6"></stop>
            <stop offset="1" stopColor="#529ac3"></stop>
          </linearGradient>
          <path
            fill="url(#p)"
            d="m14.318 15.543-.002-.007-5.964-1.226-.084.136 5.411 7.837.324-.325.921-5.689.01.007v-.028a1.048 1.048 0 0 1-.616-.705z"
          ></path>
        </svg>
      </div>
      <div className="w-3/4 lg:w-full mx-auto mt-5 lg:mt-10 flex justify-center items-center gap-3 lg:gap-5">
        {/* vercel */}
        <img
          src={vercel}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110 opacity-70 hover:opacity-100"
        />
        {/* figma */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <path
            fill="#e64a19"
            d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
          ></path>
          <path
            fill="#7c4dff"
            d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
          ></path>
          <path
            fill="#66bb6a"
            d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
          ></path>
          <path
            fill="#ff7043"
            d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
          ></path>
          <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
        </svg>
        {/* illustrator */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          data-name="Layer 1"
          viewBox="0 0 256 256"
          id="adobe-illustrator"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <g data-name="Photo Surface">
            <rect
              width="240"
              height="232"
              x="8"
              y="12"
              fill="#300"
              data-name="Outline no shadow"
              rx="42"
            ></rect>
          </g>
          <path
            fill="#ff9a00"
            d="M128.79 156H93l-9.24 26.68Q83.6 184 82.09 184H65.29q-1.68 0-1.17-1.65L96.54 86.06A29.5 29.5 0 0097.88 77a.89.89 0 011-1H122.4c.68 0 1.07.28 1.18.82l36.28 105.7c.34 1 .06 1.48-.84 1.48H140.21a1.74 1.74 0 01-1.68-1zM97 138h27.88c-.67-1.47-13.21-41.93-14.11-45.34h-.16zM179.91 96a11.81 11.81 0 01-8.61-3.21 11.55 11.55 0 01-3.3-8.7 11.71 11.71 0 013.39-8.79 12 12 0 018.7-3.3 11.55 11.55 0 018.7 3.3A12.07 12.07 0 01192 84.09a11.55 11.55 0 01-3.3 8.7A12.07 12.07 0 01179.91 96zM170 182.5V105.34a1.18 1.18 0 011.34-1.34h17.32a1.19 1.19 0 011.34 1.34v77.32a1.18 1.18 0 01-1.34 1.34H171.5A1.33 1.33 0 01170 182.5z"
          ></path>
        </svg>
        {/* lightroom */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          data-name="Layer 1"
          viewBox="0 0 256 256"
          id="adobe-lightroom"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <g data-name="Photo Surface">
            <rect
              width="240"
              height="232"
              x="8"
              y="12"
              fill="#001e36"
              data-name="Outline no shadow"
              rx="42"
            ></rect>
          </g>
          <path
            fill="#31a8ff"
            d="M143 104h17a1.84 1.84 0 011.83 1.33A23.4 23.4 0 01164 114c6.42-8.3 14.32-12 24.84-12a1 1 0 011.16 1.16v17.66c0 .89-.44 1.27-1.33 1.16-9.63-.55-17.27.71-22.8 6.24A5.24 5.24 0 00164 132v50.84c0 .77-.44 1.16-1.33 1.16H145.49c-1 0-1.49-.44-1.49-1.33V126c0-13.42-1-15.33-2-20.84C141.89 104.39 142.22 104 143 104zM129.52 184h-62c-1 0-1.53-.57-1.53-1.7V77.36A1.2 1.2 0 0167.36 76H85c.68 0 1 .4 1 1.19V168h46.75c1 0 1.41.46 1.19 1.36l-2.72 13.28A1.61 1.61 0 01129.52 184z"
          ></path>
        </svg>
        {/* photoshop */}
        <img
          src={photoshop}
          alt=""
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        />
        {/* canva */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
          className="h-5 w-5 lg:h-10 lg:w-10 transform transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
        >
          <linearGradient
            id="N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1"
            x1="38.263"
            x2="10.15"
            y1="1373.62"
            y2="1342.615"
            gradientTransform="translate(0 -1333.89)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#823af3"></stop>
            <stop offset=".36" stopColor="#4b66e1"></stop>
            <stop offset=".906" stopColor="#01f1c4"></stop>
          </linearGradient>
          <path
            fill="url(#N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1)"
            fillRule="evenodd"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24	S12.955,4,24,4S44,12.955,44,24z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Skills;

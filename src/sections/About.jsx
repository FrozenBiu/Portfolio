import { useRef } from "react";
import img1 from "../assets/coding-pov.png";
import img6 from "../assets/logos/csharp-pink.png";
import img7 from "../assets/logos/dotnet-pink.png";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

export default function About() {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me</h2>
      <div className="grid gird-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            src={img1}
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Khanh Tieu</p>
            <p className="subtext">
              My goal is to create modern, responsive, and user-friendly web
              applications while continuously improving my coding skills and
              problem-solving abilities.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex- items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image={img6}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={img7}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
    // <div className="flex items-center justify-between py-10">
    //   {/* Left */}
    //   <div className="flex-1">
    //     <h1 className="text-8xl/25 font-bold w-[90%]">Hi, i am Khanh Tieu.</h1>
    //     <p className="mt-8 text-lg">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quo
    //       porro blanditiis impedit, est eveniet obcaecati ullam hic quidem
    //       veritatis?
    //     </p>
    //     <div className="mt-10 flex items-center gap-x-4">
    //       <button className="bg-[#d3e97a] text-black font-semibold uppercase px-5 py-3 rounded-full">
    //         Contact me
    //       </button>
    //       <a href="https://github.com/FrozenBiu">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="size-9 fill-white"
    //           shapeRendering="geometricPrecision"
    //           textRendering="geometricPrecision"
    //           imageRendering="optimizeQuality"
    //           fillRule="evenodd"
    //           clipRule="evenodd"
    //           viewBox="0 0 640 640"
    //         >
    //           <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
    //         </svg>
    //       </a>
    //       <a href="">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           xmlSpace="preserve"
    //           viewBox="0 0 40 40"
    //           className="size-9"
    //         >
    //           <linearGradient
    //             id="a"
    //             x1="-277.375"
    //             x2="-277.375"
    //             y1="406.6018"
    //             y2="407.5726"
    //             gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
    //             gradientUnits="userSpaceOnUse"
    //           >
    //             {/* <stop offset="0" stop-color="#0062e0" /> */}
    //             <stop offset="0" stopColor="white" />
    //             {/* <stop offset="1" stop-color="#19afff" /> */}
    //             <stop offset="1" stopColor="white" />
    //           </linearGradient>
    //           <path
    //             fill="url(#a)"
    //             d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
    //           />
    //           <path
    //             fill="#000"
    //             d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>

    //   {/* Right */}
    //   <div className="flex-1 flex justify-end">
    //     <img className="h-[600px] rounded-2xl" src={avatar} alt="avatar" />
    //   </div>
    // </div>
  );
}

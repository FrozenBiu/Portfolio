import { OrbitingCircles } from "./OrbitingCircles";
import csharpLogo from "../assets/logos/csharp.svg";
import css3Logo from "../assets/logos/css3.svg";
import gitLogo from "../assets/logos/git.svg";
import html5Logo from "../assets/logos/html5.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import reactLogo from "../assets/logos/react.svg";
import tailwindcssLogo from "../assets/logos/tailwindcss.svg";
import vitejsLogo from "../assets/logos/vitejs.svg";

export function Frameworks() {
  const skills = {
    csharp: csharpLogo,
    css3: css3Logo,
    git: gitLogo,
    html5: html5Logo,
    javascript: javascriptLogo,
    react: reactLogo,
    tailwindcss: tailwindcssLogo,
    vitejs: vitejsLogo,
  };

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {Object.keys(skills).map((skill, index) => (
          <Icon key={index} src={skills[skill]} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {Object.keys(skills).map((skill, index) => (
          <Icon key={index} src={skills[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="rounded-sm hover:scale-110 duration-200" />
);

import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <section className="min-h-screen" />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;

import "./App.css";
import MyNavbar from "./components/myNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#0a0a0a] dark:text-white selection:bg-brand-500/30 font-sans transition-colors duration-300">
      <MyNavbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;

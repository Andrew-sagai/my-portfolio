import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-neutral-950 to-black text-gray-200 font-inter min-h-screen relative overflow-hidden">

      {/* Background dekoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-red-600/20 rounded-full blur-3xl top-20 left-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-red-700/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <Header />

      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 font-inter min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

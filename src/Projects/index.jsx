import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-20 text-center relative">
      <h2 className="text-3xl font-bold mb-10 text-accent">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-neutral-950 border border-accent/40 rounded-2xl p-6 text-left hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group"
          >
            <h3 className="text-xl font-semibold text-accent mb-3 group-hover:underline underline-offset-4">
              {p.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-3">{p.description}</p>
            <button className="mt-3 text-sm text-gray-300 border border-accent px-3 py-1 rounded-lg hover:bg-accent hover:text-white transition-all duration-300">
              View More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

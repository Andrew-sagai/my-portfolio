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
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900/60 border border-cyan-500/20 rounded-2xl p-6 text-left shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{p.title}</h3>
            <p className="text-gray-400 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

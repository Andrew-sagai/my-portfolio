import { useEffect, useState } from "react";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill.id}
            className="px-6 py-2 rounded-full border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

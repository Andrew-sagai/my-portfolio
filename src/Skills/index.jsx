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
    <section id="skills" className="py-20 text-center relative">
      <h2 className="text-3xl font-bold mb-8 text-accent">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map(skill => (
          <span
            key={skill.id}
            className="px-6 py-3 rounded-full border border-accent/40 text-accent bg-gradient-to-r from-black to-neutral-900 hover:from-accent hover:to-red-700 hover:text-white transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

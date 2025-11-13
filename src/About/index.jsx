import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  // Gunakan fallback foto jika data belum siap
  const photoSrc = profile.photo && profile.photo.trim() !== ""
    ? profile.photo
    : "/profile.jpg";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 py-20"
    >
      <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-glow border-4 border-accent animate-pulse-slow">
        <img
          src={photoSrc}
          alt={profile.name || "Profile"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-4xl font-bold mb-3 text-accent drop-shadow-glow">
          {profile.name || "Loading..."}
        </h2>
        <h3 className="text-xl text-gray-400 mb-4">{profile.title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {profile.about}
        </p>
        <div className="text-sm text-gray-400 space-y-1">
          <p>📧 {profile.email}</p>
          <p>📱 {profile.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

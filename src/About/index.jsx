import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 text-white p-10"
    >
      {/* Foto Profil */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 mb-6 md:mb-0 md:mr-10">
        {profile.photo && (
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Data Profil */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2 text-blue-400">{profile.name}</h2>
        <h3 className="text-xl text-gray-400 mb-4">{profile.title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{profile.about}</p>
        <div className="text-sm text-gray-400">
          <p className="mb-1">📧 {profile.email}</p>
          <p>📱 {profile.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

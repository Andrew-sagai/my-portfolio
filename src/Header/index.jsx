const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide">
          Andrew<span className="text-gray-300">.Portfolio</span>
        </h1>
        <nav className="space-x-6 text-gray-300 text-sm font-semibold">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

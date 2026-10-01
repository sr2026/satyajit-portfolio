const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          Satyajit<span className="text-blue-500">.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <a href="#experience" className="hover:text-blue-400 hover:scale-105 transition-all">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-400 hover:scale-105 transition-all">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 hover:scale-105 transition-all">
            Contact
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
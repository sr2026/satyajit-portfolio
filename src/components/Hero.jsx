const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Satyajit Rout</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Computer Science Engineer & Full-Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed text-lg">
          Building scalable web and mobile solutions. Experienced in React, Python, and AI/ML, with a passion for software architecture and continuous learning.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
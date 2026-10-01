const Footer = () => {
  const skills = [
    "JavaScript", "React.js", "React Native", "Python", 
    "C/C++", "Redux", "SQL", "Firebase", "Tailwind CSS", "Git"
  ];

  return (
    <footer id="contact" className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        
        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical <span className="text-blue-500">Arsenal</span></h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Let's Connect</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Currently based in Bhubaneswar and preparing for my GET role at HCLTech. Always open to discussing new projects, open-source collaborations, or tech opportunities.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="mailto:satyajit2004bbsr@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/satyajit-rout-80b836320"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.github.com/sr2026" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Satyajit Rout. Built with React & Tailwind.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
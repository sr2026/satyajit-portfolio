const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "MoveMate",
      description: "A comprehensive mobile application designed for logistics and relocation management. Features secure user profile management, seamless navigation flows, and local data persistence.",
      techStack: ["React Native", "Firebase Auth", "AsyncStorage", "JavaScript"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Personal Developer Portal",
      description: "A fully responsive, modern web portfolio designed to showcase technical projects and professional experience. Built with a component-based architecture for easy scalability.",
      techStack: ["React.js", "Tailwind CSS", "Vite", "Node.js"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "API Integration & Testing",
      description: "Open-source contributions focusing on robust API testing workflows, system architecture improvements, and developer tooling enhancements.",
      techStack: ["Python", "REST APIs", "Keploy", "Git"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 flex flex-col h-full hover:border-blue-500 transition-colors duration-300"
            >
              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-md text-xs text-blue-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a href={project.githubLink} className="flex-1 text-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-sm py-2 rounded transition-colors">
                    GitHub
                  </a>
                  <a href={project.liveLink} className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
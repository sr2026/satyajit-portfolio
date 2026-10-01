const Experience = () => {
  const backgroundData = [
    {
      id: 1,
      category: "Upcoming Role",
      title: "Graduate Engineer Trainee (GET)",
      organization: "HCLTech",
      description: "Selected for the enterprise software engineering program to build scalable solutions and enterprise applications."
    },
    {
      id: 2,
      category: "Education",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Bhubaneswar, Odisha",
      description: "Focused on core computer science subjects including algorithms, data structures, DBMS, operating systems, and network security."
    },
    {
      id: 3,
      category: "Specialized Training",
      title: "Machine Learning Summer School",
      organization: "Amazon",
      description: "Participated in an intensive program focused on machine learning fundamentals and real-world ML applications."
    },
    {
      id: 4,
      category: "Internship",
      title: "Virtual Internship",
      organization: "Infosys Springboard",
      description: "Utilized the platform for professional development and hands-on software engineering practices."
    },
    {
      id: 5,
      category: "Professional Development",
      title: "Forward Program",
      organization: "McKinsey & Company",
      description: "Selected for this global program to build core business, leadership, and problem-solving skills."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
          Background & <span className="text-blue-500">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backgroundData.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-blue-400 text-xs font-bold tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-100">
                {item.title}
              </h3>
              <h4 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                {/* SVG Icon for a brief-case/building */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                {item.organization}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
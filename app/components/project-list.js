export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Stack Overflow 2024 Survey Analysis",
      description: "An analysis of the 2024 Stack Overflow survey data.",
      tech: ["Python", "Pandas", "PySpark", "Plotly", "Streamlit", "PostgreSQL", "Airflow"],
      github: "https://github.com/ziruiwang1996/stackoverflow-survey-analysis",
      demo: "https://stackoverflow-survey-analysis.vercel.app"
    },
    {
      id: 2,
      title: "AI Agent Chatbot",
      description: "A chatbot powered by AI to assist users.",
      tech: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Google Gemini", "LangChain"],
      github: "https://github.com/ziruiwang1996/ai-agent-chatbot",
      demo: "https://ai-agent-chatbot-demo.com"
    },
    { 
      id: 3,
      title: "AI Game",
      description: "An AI-powered game built with Python.",
      tech: ["Python", "FastAPI", "React.js"],
      github: "https://github.com/ziruiwang1996/ai-game",
      demo: "https://ai-game-demo.com"
    },
    {      
      id: 4,
      title: "Textbook Exchange Platform",
      description: "A platform for exchanging textbooks among students.",
      tech: ["Java", "Spring Boot", "MySQL", "Vue.js"],
      github: "https://github.com/ziruiwang1996/textbook-exchange",
      demo: "https://textbook-exchange.vercel.app"
    }
    // Add more projects as needed
  ]

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

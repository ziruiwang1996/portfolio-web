import Link from 'next/link';

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Stack Overflow 2024 Survey Analysis",
      description: "Built a scalable ETL pipeline (Airflow, PySpark, MinIO, Docker) to analyze Stack Overflow data; stored results in a Neno-hosted data warehouse and visualized insights via a Streamlit dashboard.",
      tech: ["Python", "Pandas", "PySpark", "Plotly", "Streamlit", "PostgreSQL", "Airflow"],
      domains: ["Data Science", "Data Engineering"],
      github: "https://github.com/ziruiwang1996/stackoverflow-survey-dashboard",
      demo: "https://stackoverflow-2024-survey-dashboard.streamlit.app"
    },
    {
      id: 2,
      title: "Life Science Research Agent",
      description: "An AI-powered chatbot using the Model Context Protocol and Google Gemini LLM, with the server deployed on Render and the UI hosted on Streamlit Community Cloud.",
      tech: ["Python", "FastAPI", "Streamlit", "Google Gemini"],
      domains: ["AI Engineer", "Machine Learning"],
      github: "https://github.com/ziruiwang1996/ai-agent-mcp",
      demo: "https://life-science-chatbot.streamlit.app"
    },
    { 
      id: 3,
      title: "AI Game Center: FastAPI-Driven Backend, React.js Experience",
      description: "An interactive platform featuring a suite of AI-powered games, built with a Python backend and React front-end for seamless, engaging gameplay. Deployed on AWS EC2 and Netlify for robust, scalable performance.",
      tech: ["Python", "FastAPI", "React.js", "Nginx", "Docker", "AWS EC2"],
      domains: ["Software Engineer", "AI Engineer"],
      github: "https://github.com/ziruiwang1996/ai_game_fastapi",
      demo: "https://ai-game-center.netlify.app"
    },
    {      
      id: 4,
      title: "Textbook Exchange Platform",
      description: "Java-based web app for textbook exchange, built with microservices architecture and separate domains for modular communication.",
      tech: ["Java", "Spring Boot", "MySQL", "Vue.js", "RabbitMQ"],
      domains: ["Software Engineer"],
      github: "https://github.com/ziruiwang1996/textbook-exchange-platform",
      demo: "/demo-placeholder/textbook-exchange"
    }
    // Add more projects as needed
  ]

  // Domain color mapping
  const getDomainStyle = (domain) => {
    const styles = {
      "Data Science": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Machine Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", 
      "AI Engineer": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Software Engineer": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Data Engineering": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    }
    return styles[domain] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
          {/* Domain Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.domains.map((domain, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainStyle(domain)}`}
              >
                {domain}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {project.description}
          </p>
          
          {/* Tech Stack */}
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
            {project.demo.startsWith('http') ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            ) : (
              <Link
                href={project.demo}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Demo Preview
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

import Link from 'next/link';

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Stack Overflow 2024 Survey Analysis",
      description: "Built a scalable ETL pipeline (Airflow, PySpark, MinIO, Docker) to analyze Stack Overflow data; stored results in a Neno-hosted data warehouse and visualized insights via a Streamlit dashboard.",
      tech: ["Python", "Pandas", "PySpark", "Plotly", "Streamlit", "PostgreSQL", "Airflow"],
      github: "https://github.com/ziruiwang1996/stackoverflow-survey-dashboard",
      demo: "https://stackoverflow-2024-survey-dashboard.streamlit.app"
    },
    {
      id: 2,
      title: "Life Science Chatbot",
      description: "An AI-powered chatbot using the Model Context Protocol and Google Gemini LLM, with the server deployed on Render and the UI hosted on Streamlit Community Cloud.",
      tech: ["Python", "FastAPI", "Streamlit", "Google Gemini"],
      github: "https://github.com/ziruiwang1996/ai-agent-mcp",
      demo: "https://life-science-chatbot.streamlit.app"
    },
    { 
      id: 3,
      title: "AI Game Center: FastAPI-Driven Backend, React.js Experience",
      description: "An interactive platform featuring a suite of AI-powered games, built with a Python backend and React front-end for seamless, engaging gameplay. Deployed on AWS EC2 and Netlify for robust, scalable performance.",
      tech: ["Python", "FastAPI", "React.js", "Nginx", "Docker", "AWS EC2"],
      github: "https://github.com/ziruiwang1996/ai_game_fastapi",
      demo: "https://ai-game-center.netlify.app"
    },
    {      
      id: 4,
      title: "Textbook Exchange Platform",
      description: "Java-based web app for textbook exchange, built with microservices architecture and separate domains for modular communication.",
      tech: ["Java", "Spring Boot", "MySQL", "Vue.js", "RabbitMQ"],
      github: "https://github.com/ziruiwang1996/textbook-exchange-platform",
      demo: "/demo-placeholder/textbook-exchange"
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

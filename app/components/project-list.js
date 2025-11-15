import Link from 'next/link';

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Life Science Research Agent",
      description: "An AI agent powered by a LangChain-wrapped Google Gemini LLM with Model Context Protocol servers, Retrieval-Augmented Generation, and a Streamlit interface to assist researchers.",
      tech: ["Python", "FastAPI", "Streamlit", "Google Gemini", "LangChain"],
      domains: ["AI Engineer", "Software Engineer"],
      github: "https://github.com/ziruiwang1996/ai-agent-mcp",
      demo: "https://life-science-chatbot.streamlit.app"
    },
    { 
      id: 2,
      title: "AI Game Center: FastAPI-Driven Backend, React.js Experience",
      description: "An interactive platform featuring a suite of AI-powered games, built with a Python backend and React front-end for seamless, engaging gameplay. Deployed on AWS EC2 and Netlify for robust, scalable performance.",
      tech: ["Python", "FastAPI", "React.js", "Nginx", "Docker", "AWS EC2"],
      domains: ["Software Engineer", "Artificial Intelligence", "Machine Learning"],
      github: "https://github.com/ziruiwang1996/ai_game_fastapi",
      demo: "https://ai-game-center.netlify.app"
    },
    {
      id: 3,
      title: "Pneumonia Diagnostic Classifier",
      description: "A ResNet-18–based classifier that categorizes chest X-rays as bacterial, viral, or normal, and visualizes model predictions using saliency maps and class activation maps (CAMs).",
      tech: ["Python", "PyTorch", "Lightning", "Matplotlib", "Numpy"],
      domains: ["Machine Learning", "Deep Learning", "Computer Vision"],
      github: "https://github.com/ziruiwang1996/pneumonia-classifer-training",
      demo: "https://huggingface.co/spaces/zooray/pneumonia-diagnostic"
    },
    {
      id: 4,
      title: "Stack Overflow 2024 Survey Analysis",
      description: "Built a scalable ETL pipeline (Airflow, PySpark, MinIO, Docker) to analyze Stack Overflow data; stored results in a Neno-hosted data warehouse and visualized insights via a Streamlit dashboard.",
      tech: ["Python", "Pandas", "PySpark", "Plotly", "Streamlit", "PostgreSQL", "Airflow"],
      domains: ["Data Science", "Machine Learning", "Data Engineering"],
      github: "https://github.com/ziruiwang1996/stackoverflow-survey-dashboard",
      demo: "https://stackoverflow-2024-survey-dashboard.streamlit.app"
    },
    {      
      id: 5,
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
      "Artificial Intelligence": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", 
      "AI Engineer": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Software Engineer": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Data Engineering": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Machine Learning": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
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
          
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            {project.demo.startsWith('http') ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg hover:bg-blue-300 dark:hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            ) : (
              <Link
                href={project.demo}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-lg hover:bg-purple-300 dark:hover:bg-purple-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo Preview
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

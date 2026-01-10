import Link from 'next/link';

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Medication Interpreter",
      description: `Medication Interpreter reflects my long-standing interest in building patient-facing applications. It helps patients understand
      prescriptions by translating them into plain language with everyday usage guidance and layman-friendly side effects. Behind the scenes, I orchestrate
      multiple specialist agents—covering drug labels, adverse events, real-world evidence, and clinical trials—to tackle complex queries, and a
      Retrieval-Augmented Generation chatbot brings their insights together for user conversations.`,
      tech: ["Python", "LangChain", "FastAPI", "React.js", "Google Gemini", "Hugging Face"],
      domains: ["AI Engineering", "Software Engineering"],
      github: "https://github.com/ziruiwang1996/ai-agent-mcp",
      demo: "https://medshelper.netlify.app"
    },
    {
      id: 2,
      title: "AI Games",
      description: `AI Games grew out of pairing my Syracuse University Intro to AI course with learning React.js. The result is an interactive platform
      where I showcase A* search, Minimax, Markov Decision Processes, and Gradient Descent through playable challenges, and I practiced end-to-end
      deployment by containerizing the stack with Docker and shipping it to AWS EC2.`,
      tech: ["Python", "FastAPI", "React.js", "Nginx", "Docker", "AWS"],
      domains: ["Artificial Intelligence", "Machine Learning", "Software Engineering"],
      github: "https://github.com/ziruiwang1996/ai_game_fastapi",
      demo: "https://ai-game-center.netlify.app"
    },
    {
      id: 3,
      title: "Pneumonia Diagnostic Classifier",
      description: `This ResNet-18 classifier categorizes chest X-rays as bacterial, viral, or normal and let me combine my interests in computer vision
      and medical applications. I also experimented with interpretability techniques like saliency maps and class activation maps to better understand
      and explain what the model focuses on.`,
      tech: ["Python", "PyTorch", "Lightning", "Matplotlib", "NumPy", "Gradio"],
      domains: ["Computer Vision", "Deep Learning", "Machine Learning"],
      github: "https://github.com/ziruiwang1996/pneumonia-classifer-training",
      demo: "https://huggingface.co/spaces/zooray/pneumonia-diagnostic"
    },
    {
      id: 4,
      title: "Stack Overflow Survey Analysis",
      description: `This dashboard digs into the 2024 Stack Overflow Developer Survey so I can highlight trends in developer demographics, technologies,
      and tooling. I built a scalable ETL pipeline that lands the data in a Neno-hosted warehouse, and I explored XGBoost, Random Forest, and regression
      models for salary prediction even though the noisy survey data limits accuracy.`,
      tech: ["Python", "Pandas", "PySpark", "Plotly", "Streamlit", "PostgreSQL", "Airflow"],
      domains: ["Data Science", "Data Engineering", "Machine Learning"],
      github: "https://github.com/ziruiwang1996/stackoverflow-survey-dashboard",
      demo: "https://stackoverflow-2024-survey-dashboard.streamlit.app"
    },
    {
      id: 5,
      title: "Textbook Exchange Platform Server",
      description: `This Java web app started as my Object Oriented Design course project at Syracuse University, where I wanted to apply microservices
      architecture in practice. I relied on patterns like Singleton, Finite State Machine, Strategy, and Decorator to keep each service maintainable,
      and the platform lets students list, search, and exchange textbooks smoothly.`,
      tech: ["Java", "Spring Boot", "Maven", "MySQL", "RabbitMQ"],
      domains: ["Software Engineering"],
      github: "https://github.com/ziruiwang1996/textbook-exchange-platform",
    }
    // Add more projects as needed
  ]

  // Neutral domain styling
  const getDomainStyle = () => "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100"

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow">
          {/* Domain Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.domains.map((domain, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainStyle()}`}
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
                className="inline-flex items-center justify-center gap-2 px-4 py-2 min-w-[120px] bg-gradient-to-br from-blue-500/70 to-purple-500/70 text-white hover:from-blue-500/90 hover:to-purple-500/90 dark:from-blue-400/70 dark:to-purple-400/70 dark:hover:from-blue-400/90 dark:hover:to-purple-400/90 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            {project.demo ? (
              project.demo.startsWith('http') ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 min-w-[120px] bg-gradient-to-br from-blue-500/70 to-purple-500/70 text-white hover:from-blue-500/90 hover:to-purple-500/90 dark:from-blue-400/70 dark:to-purple-400/70 dark:hover:from-blue-400/90 dark:hover:to-purple-400/90 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                    Demo
                </a>
              ) : (
                <Link
                  href={project.demo}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 min-w-[120px] bg-gradient-to-br from-blue-500/70 to-purple-500/70 text-white hover:from-blue-500/90 hover:to-purple-500/90 dark:from-blue-400/70 dark:to-purple-400/70 dark:hover:from-blue-400/90 dark:hover:to-purple-400/90 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                    Demo
                </Link>
              )
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}

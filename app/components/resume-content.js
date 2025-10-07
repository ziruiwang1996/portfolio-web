export default function ResumeContent() {
  const education = [
    {
      school: "Syracuse University",
      degree: "Master of Science in Computer Science",
      gpa: "3.9/4.0",
      years: "2022 – 2025"
    },
    {
      school: "Michigan State University", 
      degree: "Bachelor of Science in Chemical Engineering",
      gpa: "3.5/4.0",
      years: "2015 – 2019"
    }
  ]

  const technicalSkills = {
    "Programming Languages": "Bash/Shell, Python, C++, C, Java, JavaScript, HTML, CSS, SQL, NoSQL, R, Haskell, Swift, Dart, MATLAB",
    "Technologies": "Git, Docker, Kubernetes, Jenkins, AWS, BigQuery, Snowflake, Firebase, Redis, Airflow, Spark, Kafka, Vertex AI, SageMaker, Flutter, Tableau",
    "Frameworks": "Flask, Django, FastAPI, Streamlit, Spring Boot, React.js, Vue.js, Next.js, Node.js, Tailwind CSS, LangChain, LlamaIndex"
  }

  const experience = [
    {
      title: "Data Scientist Intern",
      company: "Regeneron Pharmaceuticals",
      location: "remote, USA",
      period: "May – Aug 2024",
      achievements: [
        "Collaborated with data engineering teams to automate the retrieval and processing of 40k+ publications from arXiv and PubMed using Airflow and Docker, resulting in a scalable ETL pipeline that stores model-ready data in AWS S3.",
        "Fine-tuned a Hugging Face LLM with Low-Rank Adaptation in TensorFlow to summarize clinical studies, enhancing patient outcome extraction and reducing manual review time by 25%.",
        "Conducted document- and entity-level sentiment analysis on 100+ studies using NLTK Named Entity Recognition and a RoBERTa model, generating actionable insights on patient experiences and treatment efficacy."
      ]
    },
    {
      title: "Software Engineer Co-op",
      company: "Regeneron Pharmaceuticals", 
      location: "Tarrytown, NY",
      period: "May – Dec 2023",
      achievements: [
        "Developed a Flask application with a RESTful API, Bootstrap UI, and MongoDB/PostgreSQL persistence to parse, conform, monitor, and query legacy data, improving data usability and accessibility by over 80%.",
        "Applied domain-driven design and implemented an event-driven architecture using RabbitMQ message broker, reducing technical debt by 30% and enhancing system scalability and resilience.",
        "Implemented unit and integration tests using pytest, increasing test coverage by 50% and reducing pre-release defects by 30%.",
        "Collaborated with cross-functional teams using Bitbucket for version control alongside Docker, Kubernetes, and Jenkins for CI/CD processes, decreasing deployment time by 40% and improving delivery speed by 30%.",
        "Leveraged Jira and Confluence to facilitate Agile Scrum ceremonies, driving continuous improvement through backlog refinement, sprint planning, and reviews, resulting in a 30% reduction in blockers and faster delivery cycles."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Institute for Quantitative Health Science and Engineering",
      location: "East Lansing, MI", 
      period: "Mar 2020 – Jul 2022",
      achievements: [
        "Developed a BART transformer model and a Variational Autoencoder in PyTorch to generate novel protein sequences, achieving a 24% improvement in stability (evaluated by FoldX) and a 300% increase in sequence library size.",
        "Built a predictive model in Scikit-learn by integrating Hierarchical Clustering with a Random Forest classifier to streamline molecule screening, increasing lead yield 4-fold.",
        "Led the development of data pipelines using PySpark, NumPy, and Pandas to collect, clean, normalize, and encode biological data, reducing preprocessing time by 40% and improving data accuracy.",
        "Communicated results to stakeholders through visualizations and reports, applying PCA and statistical tests to highlight key findings."
      ]
    }
  ]

  const publications = [
    {
      title: "Generative Models for Protein Sequence Modeling: Recent Advances and Future Directions",
      journal: "Briefings in Bioinformatics",
      link: "https://academic.oup.com/bib/article/24/6/bbad358/7325909"
    },
    {
      title: "Phytochemical drug discovery for COVID-19 using high-resolution computational docking and machine learning assisted binder prediction",
      journal: "Journal of biomolecular structure & dynamics",
      link: "https://www.tandfonline.com/doi/full/10.1080/07391102.2022.2112976"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="font-semibold text-lg">{edu.school}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{edu.degree}</p>
                  <p className="text-sm text-neutral-500">GPA: {edu.gpa}</p>
                </div>
                <span className="text-sm text-neutral-500 mt-1 md:mt-0">{edu.years}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Technical Skills</h2>
        <div className="space-y-3">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">{category}:</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-green-500 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{job.company}</p>
                  <p className="text-sm text-neutral-500">{job.location}</p>
                </div>
                <span className="text-sm text-neutral-500 mt-1 md:mt-0">{job.period}</span>
              </div>
              <ul className="space-y-2">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Publications</h2>
        <ul className="space-y-3">
          {publications.map((pub, index) => (
            <li key={index} className="border-l-2 border-orange-500 pl-4">
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block"
              >
                <span className="font-medium">{pub.title}</span>
                <br />
                <span className="italic text-neutral-500 dark:text-neutral-500">{pub.journal}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Download Resume Button */}
      <section className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <a 
          href="/documents/Zirui_Wang_Resume.pdf"
          download="Zirui_Wang_Resume.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 no-underline"
        >
          Download PDF Resume
        </a>
      </section>
    </div>
  )
}

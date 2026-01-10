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
      title: "AI Research Fellow (Contract)",
      company: "Handshake AI Solutions",
      location: "remote, USA",
      period: "Sep 2025 – Feb 2026",
      achievements: [
        "Evaluated paired ML algorithms on real-world tasks, providing structured reasoning across feasibility, implementation complexity, novelty, and impact",
        "Designed domain-specific prompts and analyzed LLM outputs to identify reasoning failures and enhance algorithm accuracy."
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "Regeneron Pharmaceuticals",
      location: "remote, USA",
      period: "May – Aug 2024",
      achievements: [
        "Collaborated with data engineering teams and automated retrieval/processing of 40k+ publications using Airflow and Docker, resulting in a scalable ETL pipeline that stored model-ready data in AWS S3.",
        "Fine-tuned a LLM from Hugging Face with Low-Rank Adaptation for clinical study summarization, enhancing patient outcome extraction and reducing manual review time by 25%.",
        "Conducted document- and entity-level sentiment analysis using NLTK Named Entity Recognition and a RoBERTa model, generating insights into patient experience and treatment efficacy from 100+ studies."
      ]
    },
    {
      title: "Software Engineer Co-op",
      company: "Regeneron Pharmaceuticals", 
      location: "Tarrytown, NY",
      period: "May – Dec 2023",
      achievements: [
        "Developed a Flask application with REST API, Bootstrap UI, and MongoDB/PostgreSQL storage to parse, conform, monitor, and query legacy data from LIMS and ELNs, improving data usability and accessibility.",
        "Applied domain-driven design and implemented an event-driven architecture using RabbitMQ, reducing technical debt by 30% and enhancing system scalability.",
        "Implemented unit and integration tests using pytest, increasing test coverage by 50% and reducing pre-release defects by 30%.",
        "Collaborated across teams using Bitbucket, Docker, Kubernetes, and Jenkins to streamline CI/CD workflows while facilitating agile ceremonies with Jira and Confluence, cutting deployment time by 40% and blocking issues by 30%."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Institute for Quantitative Health Science and Engineering",
      location: "East Lansing, MI", 
      period: "Mar 2020 – Jul 2022",
      achievements: [
        "Developed Bidirectional Auto-Regressive Transformer and Variational Autoencoder models in PyTorch for protein sequence design, achieving 24% FoldX-predicted stability gains and a 300% increase in sequence library size.",
        "Designed a clustering-based molecule screening pipeline with Random Forest classification in scikit-learn, increasing lead yield 4x.",
        "Built data pipelines using PySpark, NumPy, and Pandas for cleaning, normalization, and feature encoding, reducing data preprocessing time by 40% and improving data quality.",
        "Communicated results to stakeholders through visualizations and reports, applying PCA and statistical tests to highlight findings."
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
            <div key={category} className="border-l-2 border-purple-500 pl-4">
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
              <ul className="space-y-2 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>
                    {achievement}
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
    </div>
  )
}

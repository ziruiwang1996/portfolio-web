import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center lg:text-left">
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 space-y-4 lg:space-y-0">
            <div className="mx-auto lg:mx-0 flex-shrink-0">
              <Image
                src="/images/profile.jpeg"
                alt="Zirui Wang"
                width={180}
                height={180}
                className="rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
                Hi, I&apos;m Zirui Wang
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0">
                Engineer blending AI, data science, and software to build intelligent, sacalable systems
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="/project"
              className="group inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-neutral-200">About Me</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I&apos;m a data scientist and AI engineer passionate about building intelligent systems that transform complex data into meaningful, 
              real-world impact. My journey started in chemical and biomedical research, where I saw firsthand how data and computation drives 
              healthcare innovation. Since then, I&apos;ve focused on combining AI, software engineering, and scalable data systems 
              to turn complex datasets into actionable solutions, whether it&apos;s fine-tuning large language models, developing 
              data pipelines, or designing intelligent applications that make knowledge more accessible.
            </p>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">At a Glance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Location</span>
                  <span className="text-neutral-800 dark:text-neutral-200">Syracuse, NY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Education</span>
                  <span className="text-neutral-800 dark:text-neutral-200">MS Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Focus</span>
                  <span className="text-neutral-800 dark:text-neutral-200">Data Science, ML/AI Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Status</span>
                  <span className="text-green-600 dark:text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* My Work Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-neutral-800 dark:text-neutral-200 text-center">Technical Capabilities</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Category 1 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4"/>
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Data Science & Engineering
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Turning complex data into meaningful insights and predictive models that drive decision-making
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Perform exploratory data analysis, statistical modeling, and feature engineering to uncover trends and improve model performance
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop and evaluate predictive models using Scikit-learn, XGBoost, and TensorFlow
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Extract Transform Load (ETL) data pipeline automation with Airflow, PySpark, SQL data warehouse, and AWS to ensure scalability and reproducibility
              </li>
            </ul>
          </div>

          {/* Work Category 2 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                <circle cx="12" cy="9" r="2" fill="currentColor"/>
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Machine Learning & AI
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Developing and deploying intelligent systems across NLP, predictive modeling, and generative AI
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Fine-tune and evaluate large language models for biomedical, scientific, and domain-specific research
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop and optimize deep neural networks with PyTorch and TensorFlow
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Create AI agents that reason, retrieve, and interact with external data sources
              </li>
            </ul>
          </div>

          {/* Work Category 3 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Software Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Building scalable web applications and microservices with modern frameworks
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                React/Next.js/Flask/Django/Spring Boot applications
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                RESTful API design and backend integration
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Database architecture, optimization, and persistence management with SQL and NoSQL databases
              </li>
            </ul>
          </div>


          {/* Work Category 4 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                <circle cx="7.5" cy="10" r="1" fill="currentColor"/>
                <circle cx="16.5" cy="10" r="1" fill="currentColor"/>
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Research & Publications
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Advancing scientific discovery through computational research and open collaboration
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bioinformatics, computational biology, medical informatics research
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Paper publication
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Open-source contributions
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

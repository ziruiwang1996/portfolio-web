import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center lg:text-left">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
              Hi, I&apos;m Zirui Wang
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0">
              Engineer blending AI, software, and data science to build next-gen intelligent applications
            </p>
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
              I&apos;m a Master&apos;s graduate in Computer Science at Syracuse University with a strong background in 
              software engineering and data science. My expertise spans across machine learning, full-stack 
              development, and cloud technologies.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              With hands-on experience at Regeneron Pharmaceuticals, I&apos;ve worked on large-scale data processing 
              pipelines, LLM fine-tuning, and building scalable web applications.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Quick Facts</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-neutral-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                MS Computer Science @ Syracuse
              </li>
              <li className="flex items-center text-neutral-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Ex-Regeneron Pharmaceuticals
              </li>
              <li className="flex items-center text-neutral-600 dark:text-neutral-400">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                AI/ML & Full-Stack Developer
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-neutral-800 dark:text-neutral-200 text-center">My Work</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Category 1 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Machine Learning & AI
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Developing intelligent systems using predictive models, deep learning, and NLP
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                LLM fine-tuning for clinical research
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Protein sequence modeling
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                AI-powered agent
              </li>
            </ul>
          </div>

          {/* Work Category 2 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Full-Stack Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Building scalable web applications and microservices
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                React/Next.js/Flask/Django/Spring Boot applications
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                RESTful API development
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Database design & optimization
              </li>
            </ul>
          </div>

          {/* Work Category 3 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Data Engineering
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Building robust data pipelines and infrastructure
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                ETL pipeline automation
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Cloud infrastructure
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Data processing at scale
              </li>
            </ul>
          </div>

          {/* Work Category 4 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Research & Publications
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Contributing to scientific research and open-source community
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bioinformatics research
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Published papers in journals
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

import Image from "next/image";
import Link from "next/link";

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
                AI/ML Engineer building data-driven systems for complex, real-world decision-making
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/project"
              className="group inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-neutral-200">About Me</h2>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-12 items-center">
          {/* Left: About text */}
          <div className="lg:col-span-8 space-y-6 max-w-prose">
            <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-7 lg:leading-8">
              I am a data scientist and AI engineer focused on building intelligent systems that turn complex data into meaningful, real-world impact.
              My background in chemical engineering and research-driven problem-solving shaped how I think about data, systems, and decision-making, especially
              in scientific and healthcare contexts.
            </p>

            <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-7 lg:leading-8">
              Since then, I have worked at the intersection of machine learning, software engineering, and applied data analysis, building and prototyping
              solutions that turn complex datasets into actionable insights. My experience includes fine-tuning large language models, developing data
              pipelines, and designing intelligent applications, with an emphasis on interpretability, robustness, and alignment with real user needs.
            </p>

            {/* Mobile separator */}
            <div className="block lg:hidden pt-2">
              <div className="h-px w-full bg-neutral-200/70 dark:bg-neutral-700/60" />
            </div>
          </div>

          {/* Right: At a Glance panel */}
          <div className="lg:col-span-4 lg:justify-self-end self-center lg:-mt-6 w-full px-2 lg:px-0 lg:max-w-sm">
            <div className="mb-3">
              <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">At a Glance</h3>
            </div>
            <dl className="text-sm leading-5">
              <div className="py-2">
                <dt className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">Education</dt>
                <dd className="mt-1 text-neutral-800 dark:text-neutral-200 leading-6">
                  <div>MS Computer Science</div>
                  <div>BS Chemical Engineering</div>
                </dd>
              </div>
              <div className="h-px w-full bg-neutral-200/50 dark:bg-neutral-700/40" />

              <div className="py-2">
                <dt className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">Focus</dt>
                <dd className="mt-1 text-neutral-800 dark:text-neutral-200 leading-6">
                  <div>Data Science</div>
                  <div>ML/AI Engineering</div>
                  </dd>
              </div>
              <div className="h-px w-full bg-neutral-200/50 dark:bg-neutral-700/40" />

              <div className="py-2">
                <dt className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">Strength</dt>
                <dd className="mt-1 text-neutral-800 dark:text-neutral-200 leading-6">
                  <div>Agentic AI systems</div>
                  <div>Data pipelines</div>
                  <div>Applied ML</div>
                  </dd>
              </div>
              <div className="h-px w-full bg-neutral-200/50 dark:bg-neutral-700/40" />

              <div className="py-2">
                <dt className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">Domain</dt>
                <dd className="mt-1 text-neutral-800 dark:text-neutral-200 leading-6">
                  <div>Digital Health</div>
                  <div>+ Generalizable ML systems</div>
                </dd>
              </div>
              <div className="h-px w-full bg-neutral-200/50 dark:bg-neutral-700/40" />

              <div className="py-2 flex items-center justify-between">
                <dt className="text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">Status</dt>
                <dd>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300 border border-green-200/60 dark:border-green-800/40">Open to opportunities</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Technical Capabilities</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Category 1 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 shadow-[0_18px_40px_-16px_rgba(147,51,234,0.38)] hover:shadow-[0_28px_60px_-18px_rgba(147,51,234,0.5)] transition-all duration-300 hover:-translate-y-1">
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
              Designing data pipelines and analytical workflows that support reliable modeling and decision-making under messy, incomplete, and evolving real-world data.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Conduct exploratory analysis and statistical modeling to surface patterns, uncertainty, and decision-relevant signals in real-world datasets
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Engineer features and evaluation workflows to improve model robustness, interpretability, and stability across data shifts
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Build and orchestrate ETL pipelines (Airflow, PySpark, SQL-based warehouses) to support reproducible experimentation and downstream ML systems
              </li>
            </ul>
          </div>

          {/* Work Category 2 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 shadow-[0_18px_40px_-16px_rgba(59,130,246,0.35)] hover:shadow-[0_28px_60px_-18px_rgba(59,130,246,0.48)] transition-all duration-300 hover:-translate-y-1">
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
              Developing and evaluating machine learning systems across NLP, predictive modeling, and generative AI, with emphasis on interpretability, reliability, and responsible deployment.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Fine-tune and evaluate language models for domain-specific text understanding and summarization, including biomedical and technical corpora
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Train and optimize deep learning models in PyTorch/TensorFlow using clear metrics, controlled experiments, and ablation-driven iteration
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Prototype retrieval-augmented and tool-using systems that connect models to external data sources with attention to correctness, provenance, and failure modes
              </li>
            </ul>
          </div>

          {/* Work Category 3 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 shadow-[0_18px_40px_-16px_rgba(34,197,94,0.32)] hover:shadow-[0_28px_60px_-18px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-1">
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
              Building user-facing applications and backend services that make systems usable, testable, and maintainable in real deployment settings.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Build full-stack applications with React/Next.js and Python/Java backends (Flask, Django, FastAPI, Spring Boot)
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Design RESTful APIs and service boundaries that support iteration, observability, validation, and model lifecycle management
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Integrate SQL and NoSQL persistence layers and optimize data access patterns for application performance and scalability
              </li>
            </ul>
          </div>


          {/* Work Category 4 */}
          <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 pr-24 shadow-[0_18px_40px_-16px_rgba(249,115,22,0.32)] hover:shadow-[0_28px_60px_-18px_rgba(249,115,22,0.45)] transition-all duration-300 hover:-translate-y-1">
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
              Research at the intersection of machine learning, computational biology, and health AI, with emphasis on rigorous evaluation, reproducibility, and clear technical communication.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bioinformatics and medical informatics research using real-world biomedical data and applied machine learning methods
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Peer-reviewed publications and research writing with emphasis on reproducible methods and transparent evaluation
              </li>
              <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Open-source contributions and technical documentation to share tools, methods, and experimental findings
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

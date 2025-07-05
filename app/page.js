import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Hi, I&apos;m Zirui Wang
        </h1>
        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
          Software Engineer & Data Scientist passionate about building intelligent systems
        </p>
      </section>

      {/* About Me Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">About Me</h2>
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I&apos;m a Master&apos;s student in Computer Science at Syracuse University with a strong background in 
            software engineering and data science. My expertise spans across machine learning, full-stack 
            development, and cloud technologies.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            With hands-on experience at Regeneron Pharmaceuticals, I&apos;ve worked on large-scale data processing 
            pipelines, LLM fine-tuning, and building scalable web applications. I&apos;m passionate about leveraging 
            AI and modern software practices to solve real-world problems.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
            or diving deep into the latest research in machine learning and software engineering.
          </p>
        </div>
      </section>

      {/* My Work Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">My Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Work Category 1 */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
              Machine Learning & AI
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Developing intelligent systems using deep learning, NLP, and computer vision
            </p>
            <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
              <li>• LLM fine-tuning for clinical research</li>
              <li>• Protein sequence modeling</li>
              <li>• AI-powered game development</li>
              <li>• [Add your ML projects here]</li>
            </ul>
          </div>

          {/* Work Category 2 */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
              Full-Stack Development
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Building scalable web applications and microservices
            </p>
            <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
              <li>• React/Next.js applications</li>
              <li>• RESTful API development</li>
              <li>• Database design & optimization</li>
              <li>• [Add your web projects here]</li>
            </ul>
          </div>

          {/* Work Category 3 */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
              Data Engineering
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Building robust data pipelines and infrastructure
            </p>
            <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
              <li>• ETL pipeline automation</li>
              <li>• Cloud infrastructure (AWS)</li>
              <li>• Data processing at scale</li>
              <li>• [Add your data projects here]</li>
            </ul>
          </div>

          {/* Work Category 4 */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
              Research & Publications
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Contributing to scientific research and open-source community
            </p>
            <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
              <li>• Bioinformatics research</li>
              <li>• Published papers in journals</li>
              <li>• Open-source contributions</li>
              <li>• [Add your research here]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Let&apos;s Connect
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            I&apos;m always interested in discussing new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/project"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              View My Projects
            </a>
            <a 
              href="/resume"
              className="border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 px-6 py-2 rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

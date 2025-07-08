import Link from 'next/link'

export const metadata = {
  title: 'Textbook Exchange Platform - Demo Coming Soon',
  description: 'The Textbook Exchange Platform demo is currently under development.',
}

export default function TextbookExchangePlaceholderPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Textbook Exchange Platform</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">Demo Coming Soon</p>
        
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 mb-8 shadow-sm">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <p className="text-lg font-medium mb-2">Platform Under Development</p>
            <p className="text-neutral-600 dark:text-neutral-400">
              The Textbook Exchange Platform is currently being developed to create a seamless experience for students
              to buy, sell, and exchange textbooks with other students on campus.
            </p>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
            <h2 className="text-lg font-medium mb-3">Features Coming Soon</h2>
            <ul className="space-y-2 mb-4 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">User profiles with rating system</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Search by ISBN, title, course code, or author</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">In-app messaging for negotiation</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Safe on-campus exchange locations</p>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
            <h2 className="text-lg font-medium mb-3">Project Status</h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Backend Development: 80% Complete</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Frontend Development: 60% Complete</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Testing: Starting Soon</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Expected Launch: Fall 2025</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/project"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200"
            >
              Back to Projects
            </Link>
            <a 
              href="https://github.com/ziruiwang1996/textbook-exchange-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Want to contribute or suggest features? Check out our GitHub repository!
        </p>
      </div>
    </section>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Demo Coming Soon',
  description: 'This project demo is currently under development.',
}

export default function DemoPlaceholderPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Demo Coming Soon</h1>
        
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 mb-8 shadow-sm">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <p className="text-lg font-medium mb-2">We&apos;re Working on Something Amazing!</p>
            <p className="text-neutral-600 dark:text-neutral-400">
              The live demo for this project is currently under development and will be available soon.
            </p>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
            <h2 className="text-lg font-medium mb-3">Project Timeline</h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Design & Planning: Completed</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Development: In Progress</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Testing: Coming Soon</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Deployment: Coming Soon</p>
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
          </div>
        </div>
        
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Interested in contributing or have questions? Check out the GitHub repository for more details.
        </p>
      </div>
    </section>
  )
}

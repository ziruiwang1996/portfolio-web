import Link from 'next/link'

export const metadata = {
  title: 'AI Game - Demo Coming Soon',
  description: 'The AI Game demo is currently under development.',
}

export default function AIGamePlaceholderPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">AI Game</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">Demo Coming Soon</p>
        
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 mb-8 shadow-sm">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
              </svg>
            </div>
            <p className="text-lg font-medium mb-2">An Intelligent Gaming Experience</p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Our AI Game is being developed to create an immersive gaming experience powered by artificial intelligence.
              The game adapts to your play style and offers unique challenges each time you play.
            </p>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
            <h2 className="text-lg font-medium mb-3">Game Features</h2>
            <ul className="space-y-2 mb-4 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Adaptive difficulty based on player skill</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Procedurally generated game environments</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">AI-powered NPCs with dynamic behaviors</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Multiplayer support with AI teammates</p>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
            <h2 className="text-lg font-medium mb-3">Development Progress</h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Core Game Engine: 90% Complete</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">AI Integration: 75% Complete</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">UI/UX Development: In Progress</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-3"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Expected Beta Release: Winter 2025</p>
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
              href="https://github.com/ziruiwang1996/ai_game_fastapi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Interested in beta testing? Star our GitHub repository to get notified when beta testing begins!
        </p>
      </div>
    </section>
  )
}

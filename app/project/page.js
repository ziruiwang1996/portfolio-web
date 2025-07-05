
import ProjectList from '../components/project-list'

export const metadata = {
  title: 'Project',
  description: 'Check my project.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Project</h1>
      <ProjectList />
    </section>
  )
}
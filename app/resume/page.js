import ResumeContent from '../components/resume-content'

export const metadata = {
  title: 'Resume',
  description: 'Zirui Wang - Software Engineer & Data Scientist Resume',
}

export default function ResumePage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Resume</h1>
      <ResumeContent />
    </section>
  )
}

import { ProjectDetail } from '../components/projects/ProjectDetail'
import { projectsData } from '../data/projects'

export const ProjectKioto = () => {
  return <ProjectDetail project={projectsData.kioto} />
}


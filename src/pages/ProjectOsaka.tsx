import { ProjectDetail } from '../components/projects/ProjectDetail'
import { projectsData } from '../data/projects'

export const ProjectOsaka = () => {
  return <ProjectDetail project={projectsData.osaka} />
}

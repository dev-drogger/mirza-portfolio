import { ProjectProvider } from "../components/ProjectContext";
import Project from "../components/Project";

function WorksPage() {
  return (
    <ProjectProvider>
      <Project />
    </ProjectProvider>
  );
}

export default WorksPage;

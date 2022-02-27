import ProjectItem from "@components/ProjectItem";
import * as STC from "./ProjectList.style";

const ProjectList = ({ ...props }) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <STC.Container>
      {data.map((project) => (
        <STC.ProjectItemWrapper key={project}>
          <ProjectItem />
        </STC.ProjectItemWrapper>
      ))}
    </STC.Container>
  );
};

export default ProjectList;

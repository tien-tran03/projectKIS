import React, { useState } from "react";
import { isEmpty } from "ramda";
import { useSelector } from "react-redux";
import { ContextMenu, ProjectCard } from "./components";
import { HasData } from "../../react_utils";
import { selectSearchKeyword } from "../../redux_logic";

export const ProjectList: React.FC<HasData> = ({ data: projects }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const keyword = useSelector(selectSearchKeyword);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, projectId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(projectId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const handleMenuAction = (action: string) => {
    console.log(`Action: ${action} on Project ID: ${selectedProject}`);
  };

  const filteredProjects = isEmpty(keyword) ? projects : projects.filter((project: any) =>
    project.name.toLowerCase().includes(keyword)
  );

  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project: any) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            lastUpdated={project.lastUpdated}
            thumbnail={project.thumbnail}
            onMenuClick={handleMenuClick}
          />
        ))
      ) : (
        <p>No projects found.</p>
      )}
      <ContextMenu anchorEl={anchorEl} onClose={handleMenuClose} onAction={handleMenuAction} selectedProject={selectedProject} />
    </div>
  );
};
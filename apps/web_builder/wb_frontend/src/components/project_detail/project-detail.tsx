import React from "react";
import { DeleteProject, DuplicateProject, EditProject, MoveProject, ProjectSettings, PublishProject } from "./page";
import { useParams } from "react-router-dom";


export const ProjectsDetail: React.FC = () => {
  const { action } = useParams(); // 📌 Lấy action từ URL

  const renderPage = () => {
    switch (action) {
      case "edit":
        return <EditProject />;
      case "publish":
        return <PublishProject />;
      case "duplicate":
        return <DuplicateProject />;
      case "move":
        return <MoveProject />;
      case "settings":
        return <ProjectSettings />;
      case "delete":
        return <DeleteProject />;
      default:
        return <h1>404 - Page Not Found</h1>;
    }
  };
  return <div>{renderPage()}</div>;
};

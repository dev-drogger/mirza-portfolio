import React from "react";
import useImageCarousel from "../components/useImageCarousel";
import useChangeProject from "../components/useChangeProject";

export const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const intervalIdRef = useImageCarousel();

  const {
    imageLength,
    currentProjectData,
    currentProjectName,
    currentImageURL,
    nextProject,
    prevProject,
    currentImage,
    setCurrentImage,
    currentProject,
    projectCard,
    loading,
    pageAnimation,
  } = useChangeProject(intervalIdRef);

  const fade = useImageCarousel(
    imageLength,
    setCurrentImage,
    currentProject,
    loading
  );

  const value = {
    imageLength,
    currentProjectData,
    currentProjectName,
    currentImageURL,
    nextProject,
    prevProject,
    currentImage,
    setCurrentImage,
    currentProject,
    projectCard,
    loading,
    pageAnimation,
    fade,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContext;

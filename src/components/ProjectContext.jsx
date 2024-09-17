import React from "react";
import useImageCarousel from "../components/useImageCarousel";
import useChangeProject from "../components/useChangeProject";
import usePageLoading from "../components/usePageLoading";

export const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const { loading, pageAnimation, setPageAnimation, startCarousel } =
    usePageLoading();

  const intervalIdRef = useImageCarousel();

  const {
    imageLength,
    currentProjectMetadata,
    currentProjectName,
    currentImagePath,
    thumbnailPath,
    nextProject,
    prevProject,
    project,
    currentImage,
    setCurrentImage,
    currentProject,
  } = useChangeProject(setPageAnimation, intervalIdRef);

  const fade = useImageCarousel(
    imageLength,
    startCarousel,
    setCurrentImage,
    currentProject
  );

  const value = {
    loading,
    pageAnimation,
    imageLength,
    currentProjectMetadata,
    currentProjectName,
    currentImagePath,
    thumbnailPath,
    nextProject,
    prevProject,
    project,
    currentImage,
    setCurrentImage,
    currentProject,
    fade,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContext;

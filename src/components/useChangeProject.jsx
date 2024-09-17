import { images } from "../constants/outputArray";
import { useState, useMemo, useCallback } from "react";

function useChangeProject() {
  const project = images;
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const imageLength = useMemo(
    () => project[currentProject].metadata.length,
    [currentProject, project]
  );

  const currentProjectMetadata = useMemo(
    () => project[currentProject].metadata,
    [currentProject, project]
  );

  const currentImagePath = useMemo(() => {
    if (currentImage >= 0 && currentImage < currentProjectMetadata.length) {
      return currentProjectMetadata[currentImage].path;
    }
    return null; // or a default path
  }, [currentProjectMetadata, currentImage]);

  const currentProjectName = useMemo(
    () => project[currentProject].folder,
    [currentProject, project]
  );

  const thumbnailPath = useMemo(
    () => project[currentProject].metadata[0].path,
    [currentProject, project]
  );

  const changeProject = useCallback(
    (direction) => {
      setCurrentProject((prev) => {
        const newProject =
          direction === "next"
            ? (prev + 1) % project.length
            : (prev - 1 + project.length) % project.length;
        setCurrentImage(0);
        return newProject;
      });
    },
    [project.length]
  );

  const nextProject = useCallback(() => changeProject("next"), [changeProject]);
  const prevProject = useCallback(() => changeProject("prev"), [changeProject]);

  return {
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
  };
}

export default useChangeProject;

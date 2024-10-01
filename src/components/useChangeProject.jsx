import { useState, useMemo, useCallback, useEffect } from "react";
import { projectCard } from "../constants";
import { fetchProject, preload } from "../components/useFetchProject";
import { useSpring } from "@react-spring/web";

function useChangeProject(intervalIdRef) {
  const [query, setQuery] = useState(0);
  const [project, setProject] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageAnimation, setPageAnimation] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));
  const currDB = useMemo(() => project[0] || {}, [project]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetchProject(projectCard[query]?.name);
        await preload(response[0].Data);
        console.log(response);
        setPageAnimation({ opacity: 0 });
        setProject(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setPageAnimation({ opacity: 0 });
        setTimeout(() => {
          setPageAnimation({ opacity: 1 });
          setLoading(false);
        }, 1250);
      }
    };

    loadImages();
  }, [query, setPageAnimation]);

  const imageLength = useMemo(() => currDB?.Data?.length || 0, [currDB]);

  const currentProjectData = useMemo(() => currDB.Data || [], [currDB]);

  const currentImageURL = useMemo(() => {
    if (currentImage >= 0 && currentImage < currentProjectData.length) {
      // Added bounds check
      return currentProjectData[currentImage]?.url || null;
    }
    return null;
  }, [currentImage, currentProjectData]);

  const currentProjectName = useMemo(() => currDB?.ProjectName || "", [currDB]);

  const changeProject = useCallback(
    (direction) => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      setPageAnimation({ opacity: 0 });
      setTimeout(() => {
        setPageAnimation({ opacity: 1 });
        setCurrentProject((prev) => {
          const newProject =
            direction === "next"
              ? (prev + 1) % projectCard.length
              : (prev - 1 + projectCard.length) % projectCard.length;
          setQuery(newProject);

          setLoading(true);
          setCurrentImage(0);
          return newProject;
        });
      }, 1250);
    },
    [intervalIdRef, setPageAnimation]
  );

  const nextProject = useCallback(() => changeProject("next"), [changeProject]);
  const prevProject = useCallback(() => changeProject("prev"), [changeProject]);

  return {
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
  };
}

export default useChangeProject;

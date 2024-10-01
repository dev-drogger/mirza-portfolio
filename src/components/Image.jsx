import React, { Suspense, useState, useContext, useEffect } from "react";
import { ProjectContext } from "./ProjectContext";
import { Skeleton } from "@mui/material";

const LazyImageGallery = React.lazy(() => import("./ImageGallery"));

function Image() {
  const { loading, currentProjectData } = useContext(ProjectContext);
  const [landingImage, setLandingImage] = useState("");
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (loading) return;
    setLandingImage(currentProjectData[0].url);
  }, [currentProjectData, loading]);

  const handleImageChange = (newImagePath) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setLandingImage(newImagePath);
      setFadeClass("fade-in");
    }, 300);
  };

  return (
    <div className="bg-primary relative w-[100vw] h-[100vh]">
      <div className=" flex-1 flex flex-col gap-16 justify-center items-center xl:min-h-screen ">
        <div className="sticky flex items-center justify-center h-[375px] bg-primary top-16 w-full">
          <div className="w-[600px] h-[300px] max-sm:w-[400px] max-sm:h-[200px]">
            {loading ? (
              <Skeleton
                sx={{
                  bgcolor: "#181421",
                }}
                variant="rectangular"
                animation="wave"
                height="100%"
                width="90%"
              />
            ) : (
              <img
                key={landingImage}
                src={landingImage}
                loading="lazy"
                alt="Image"
                className={`w-[100%] h-[100%] object-contain ${fadeClass}`}
              />
            )}
          </div>
        </div>

        <div className="bg-primary grid grid-cols-4 max-sm:grid-cols-3 w-full h-full px-44 max-sm:px-14 overflow-hidden gap-4 sm:gap-6">
          {(loading ? Array.from(new Array(4)) : currentProjectData).map(
            (item, index) => (
              <div key={index}>
                {item ? (
                  <Suspense>
                    <LazyImageGallery
                      index={index}
                      imgURL={item.url}
                      changeLandingImage={() => handleImageChange(item.url)}
                      landingImage={landingImage}
                    />
                  </Suspense>
                ) : (
                  <Skeleton
                    sx={{
                      bgcolor: "#181421",
                    }}
                    variant="rectangular"
                    animation="wave"
                    height="100%"
                    width="90%"
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Image;

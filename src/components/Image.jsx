import React, { Suspense, useState, useEffect } from "react";

const LazyImageCard = React.lazy(() => import("./ImageCard"));

function Image({ currentLibrary, currentImage }) {
  const [landingImage, setLandingImage] = useState(currentImage);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    setLandingImage(currentImage);
  }, [currentImage]);

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
            <img
              key={landingImage}
              src={landingImage}
              loading="lazy"
              alt="Image"
              className={`w-[100%] h-[100%] object-contain ${fadeClass}`}
            />
          </div>
        </div>

        <div className="bg-primary grid grid-cols-4 max-sm:grid-cols-3 w-full h-full px-44 max-sm:px-14 overflow-hidden gap-4 sm:gap-6">
          {currentLibrary.map((item, index) => (
            <Suspense key={item.path}>
              <LazyImageCard
                index={index}
                imgURL={item.path}
                changeLandingImage={() => handleImageChange(item.path)}
                landingImage={landingImage}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Image;

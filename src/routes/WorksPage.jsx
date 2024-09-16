import React, { Suspense, useEffect } from "react";
import { NavBar, LibraryCard, Loading } from "../components";
import PhotoDisplay from "../components/PhotoDisplay";
import { useSpring, animated } from "@react-spring/web";
import { UseLoading, UseImageTransition, UsePhotoSets } from "../components";
import { images } from "../constants/outputArray";

const LazyPhotos = React.lazy(() => import("../components/Photos"));

const MemoizedPhotoDisplay = React.memo(PhotoDisplay);
const MemoizedLibraryCard = React.memo(LibraryCard);

function WorksPage() {
  const {
    currentPhotoSet,
    currentImages,
    setCurrentImages,
    photosLength,
    currentPhotoSetMetadata,
    currentImagePath,
    currentFolderName,
    thumbnailPath,
    nextPhotoSet,
    prevPhotoSet,
  } = UsePhotoSets();

  const { loading, shouldStartTransition } = UseLoading();

  const fadeProps = UseImageTransition(
    photosLength,
    shouldStartTransition,
    currentPhotoSet,
    setCurrentImages
  );

  const [pageTransitionProps, setPageTransitionProps] = useSpring(() => ({
    opacity: 0,
    config: { duration: 1500 },
  }));

  useEffect(() => {
    setPageTransitionProps({ opacity: 1 });
  }, [currentPhotoSet, setPageTransitionProps]);

  useEffect(() => {
    const img = new Image();
    img.src = currentPhotoSetMetadata[currentImages].path;
  }, [currentImages, currentPhotoSetMetadata]);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] bg-primary z-30">
          <div>
            <div className="flex w-[100vw] h-[100vh]">
              <animated.div
                id="parent"
                style={pageTransitionProps}
                className="max-sm:flex max-sm:items-start max-sm:justify-center"
              >
                <div
                  id="title"
                  className={`flex z-30 max-sm:h-[10vh] max-sm:w-full pl-[170px] max-sm:absolute max-sm:top-48 max-sm:pl-0 max-sm:text-center font-outfit font-semibold max-sm:text-[20px] xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] max-sm:leading-[3rem] leading-[66.8px] justify-start max-sm:justify-center items-center w-[650px] h-full bg-primary`}
                >
                  {currentFolderName}
                </div>
                <animated.div
                  style={fadeProps}
                  className="w-[50%] absolute max-sm:relative max-sm:w-full top-0 right-0 h-full max-sm:h-[50vh]"
                >
                  <MemoizedPhotoDisplay
                    imagePath={currentImagePath}
                    altText={`Image ${currentImages + 1}`}
                  />
                </animated.div>
              </animated.div>
            </div>

            <div className="absolute z-50 flex items-end justify-end top-0">
              <MemoizedLibraryCard
                setNext={nextPhotoSet}
                setPrev={prevPhotoSet}
                thumbnail={thumbnailPath}
                length={images.length}
              />
            </div>

            <Suspense>
              <LazyPhotos
                currentLibrary={currentPhotoSetMetadata}
                currentImage={currentPhotoSetMetadata[0].path}
              />
            </Suspense>

            <div className="absolute z-[3] -left-1/2 top-0 w-[30%] h-[30%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(WorksPage);

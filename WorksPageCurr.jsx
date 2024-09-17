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
    //currentPhotoSet,
    currentImages,
    setCurrentImages,
    //photosLength,
    //currentPhotoSetMetadata,
    //currentImagePath,
    //currentFolderName,
    //thumbnailPath,
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
      <nav>
        <NavBar />
      </nav>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] bg-primary z-30 max-sm:mt-20">
          <div>
            <div className="flex w-[100vw] h-[100vh]">
              <animated.div
                id="parent"
                style={pageTransitionProps}
                className="max-sm:flex max-sm:items-center max-sm:justify-end max-sm:flex-col-reverse max-sm:w-[100vw]"
              >
                <div
                  id="title"
                  className={`flex z-20 max-sm:h-[15vh] max-sm:w-[250px] pl-[170px] max-sm:pl-0 max-sm:text-center font-outfit font-semibold max-sm:text-[30px] xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] max-sm:leading-[3rem] leading-[66.8px] justify-start max-sm:justify-center items-center w-[650px] h-full`}
                >
                  {currentFolderName}
                </div>
                <animated.div
                  style={fadeProps}
                  className="w-[50%] overflow-hidden absolute max-sm:relative max-sm:w-full top-0 right-0 h-[100%] max-sm:h-[35vh] max-sm:bg-gradient-to-t z-0"
                >
                  <MemoizedPhotoDisplay
                    imagePath={currentImagePath}
                    altText={`Image ${currentImages + 1}`}
                  />
                </animated.div>
              </animated.div>

              <div className="absolute top-0 max-sm:top-[1.5rem]">
                <MemoizedLibraryCard
                  setNext={nextPhotoSet}
                  setPrev={prevPhotoSet}
                  thumbnail={thumbnailPath}
                  length={images.length}
                />
              </div>
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

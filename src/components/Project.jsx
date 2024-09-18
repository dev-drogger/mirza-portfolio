import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import { NavBar, LibraryCard, Loading } from "../components";
import ImageDisplay from "../components/ImageDisplay";
import { animated } from "@react-spring/web";
import Image from "../components/Image";

const MemoizedImageDisplay = React.memo(ImageDisplay);
const MemoizedLibraryCard = React.memo(LibraryCard);

function Project() {
  const {
    currentProjectName,
    loading,
    pageAnimation,
    currentImagePath,
    project,
    fade,
    currentProjectMetadata,
  } = useContext(ProjectContext);
  return (
    <main className="w-[100vw] h-[100vh] bg-primary z-30 max-sm:mt-20">
      <nav>
        <NavBar />
      </nav>

      {loading ? (
        <Loading />
      ) : (
        <section>
          <section className={`flex w-[100vw] h-[100vh]`}>
            <animated.div
              id="parent"
              style={pageAnimation}
              className="max-sm:flex max-sm:items-center max-sm:justify-end max-sm:flex-col-reverse max-sm:w-[100vw]"
            >
              <div
                id="title"
                className={`flex z-30 max-sm:h-[15vh] max-sm:w-[250px] pl-[170px] max-sm:pl-0 max-sm:text-center font-outfit font-semibold max-sm:text-[30px] xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] max-sm:leading-[3rem] leading-[66.8px] justify-start max-sm:justify-center items-center w-[650px] h-full`}
              >
                {currentProjectName}
              </div>
              <animated.div
                style={fade}
                className="w-[50%] absolute top-0 right-0 h-[100%] max-sm:relative max-sm:w-full max-sm:h-[35vh] max-sm:bg-gradient-to-t z-0"
              >
                <MemoizedImageDisplay imagePath={currentImagePath} />
              </animated.div>
            </animated.div>

            <div className="absolute top-0 max-sm:top-[1.5rem]">
              <MemoizedLibraryCard length={project.length} />
            </div>
          </section>

          <section>
            <Image
              currentLibrary={currentProjectMetadata}
              currentImage={currentProjectMetadata[0].path}
            />
          </section>

          <div className="absolute z-[3] -left-1/2 top-0 w-[30%] h-[30%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </section>
      )}
    </main>
  );
}

export default React.memo(Project);

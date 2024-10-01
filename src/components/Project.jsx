import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import ImageDisplay from "../components/ImageDisplay";
import Carousel from "../components/Carousel";
import { animated } from "@react-spring/web";
import Image from "../components/Image";
import { Skeleton } from "@mui/material";

const MemoizedImageDisplay = React.memo(ImageDisplay);
const MemoizedCarousel = React.memo(Carousel);

function Project() {
  const { currentProjectName, loading, pageAnimation, currentImageURL, fade } =
    useContext(ProjectContext);
  return (
    <main className="w-[100vw] h-[100vh] bg-primary z-30 max-sm:mt-20 fade-in">
      <section>
        <section className={`flex w-[100vw] h-[100vh]`}>
          <animated.div
            id="parent"
            className={`max-sm:flex max-sm:items-center max-sm:justify-end max-sm:flex-col-reverse max-sm:w-[100vw]`}
            style={pageAnimation}
          >
            <div
              id="title"
              className={`flex z-30 max-sm:h-[15vh] max-sm:w-[250px] pl-[170px] max-sm:pl-0 max-sm:text-center font-outfit font-semibold max-sm:text-[30px] xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] max-sm:leading-[3rem] leading-[66.8px] justify-start max-sm:justify-center items-center w-[650px] h-full`}
            >
              {loading ? (
                <Skeleton
                  sx={{ bgcolor: "#181421" }}
                  variant="text"
                  animation="wave"
                  height={125}
                  width={600}
                />
              ) : (
                currentProjectName
              )}
            </div>
            <animated.div
              style={fade}
              className="w-[50%] flex items-center absolute top-0 right-0 h-[100%] max-sm:relative max-sm:w-full max-sm:h-[35vh] max-sm:bg-gradient-to-t z-0"
            >
              {loading ? (
                <Skeleton
                  sx={{
                    bgcolor: "#181421",
                  }}
                  variant="text"
                  animation="wave"
                  height="100%"
                  width="90%"
                />
              ) : (
                <MemoizedImageDisplay imagePath={currentImageURL} />
              )}
            </animated.div>
          </animated.div>

          <div className="absolute top-0 max-sm:top-[1.5rem]">
            <MemoizedCarousel />
          </div>
        </section>

        <section>
          <Image />
        </section>

        <div className="absolute z-[3] -left-1/2 top-0 w-[30%] h-[30%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </section>
    </main>
  );
}

export default React.memo(Project);

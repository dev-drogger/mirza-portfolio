import { useState } from "react";
import styles, { layout } from "../constants/style";
import { landingCarousel } from "../constants";
import Button from "./Button";
import ImageGallery from "./ImageGallery";

function Portfolio() {
  const [landingImage, setLandingImage] = useState(landingCarousel[0].image);

  return (
    <div
      className={`${layout.sectionReverse} max-sm:justify-center max-sm:items-center px-[170px] max-sm:px-0 space-x-52 max-sm:space-x-0 max-sm:h-[100vh] bg-primary`}
    >
      <div className="relative flex-1 flex flex-col gap-10 max-sm:gap-2 justify-center max-sm:justify-start items-center xl:min-h-screen max-xl:py-40">
        <img
          src={landingImage}
          loading="lazy"
          alt={`Portfolio image ${landingImage + 1}`}
          className="w-full h-[60%] max-sm:w-[275px] object-contain flex z-10"
        />

        <div className="flex sm:gap-6 gap-4 items-center justify-center max-sm:w-[300px]">
          {landingCarousel.map((image, index) => (
            <ImageGallery
              key={image.id}
              index={index}
              imgURL={image.image}
              changeLandingImage={() => setLandingImage(image.image)}
              landingImage={landingImage}
            />
          ))}
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div
        className={`${layout.sectionInfo} max-sm:justify-center max-sm:items-center relative z-50`}
      >
        <h2
          className={`${styles.heading2} max-sm:text-[32px] max-sm:text-center max-sm:leading-[3rem]`}
        >
          Do you think I am a <br></br>Front End Developer?
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] max-sm:w-[275px] mt-5 max-sm:text-center`}
        >
          Yes, I do learn about front-end, especially JavaScript and other
          programming languages, and deploy this website on my own. But
          actually, I am a{" "}
          <span className="font-bold text-white">Content Creator</span>. Can you
          believe it?
        </p>

        <Button title="View more" path="/works" />
      </div>
    </div>
  );
}

export default Portfolio;

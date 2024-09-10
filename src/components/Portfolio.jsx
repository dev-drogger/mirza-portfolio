import { useState } from "react";
import styles, { layout } from "../constants/style";
import { landingCarousel } from "../constants";
import Button from "./Button";
import PhotoCard from "./PhotoCard";

function Portfolio() {
  const [landingImage, setLandingImage] = useState(landingCarousel[0].image);

  return (
    <div
      className={`${layout.sectionReverse} px-[170px] space-x-52 bg-primary`}
    >
      <div className="relative flex-1 flex flex-col gap-10 justify-center items-center xl:min-h-screen max-xl:py-40">
        <img
          src={landingImage}
          loading="lazy"
          alt={`Portfolio image ${landingImage + 1}`}
          className="w-full h-full object-contain flex z-10"
        />

        <div className="flex sm:gap-6 gap-4 items-center justify-center">
          {landingCarousel.map((image, index) => (
            <PhotoCard
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

      <div className={`${layout.sectionInfo} relative z-50`}>
        <h2 className={styles.heading2}>
          Do you think I am <br className="sm:block hidden" /> a Front End
          Developer?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
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

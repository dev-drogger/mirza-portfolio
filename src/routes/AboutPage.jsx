import { experiences, chunkArray, job } from "../constants";
import {
  AboutDetails,
  NavBar,
  Heading,
  DownloadButton,
  Loading,
} from "../components";
import styles from "../constants/style";
import { lsprlogo } from "../assets/icon";
import { useMemo, useState, useEffect } from "react";

const AboutPage = () => {
  const experienceChunks = useMemo(() => chunkArray(experiences, 3), []);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFade("fade-in");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className={`bg-primary w-full h-full ${fade}`}>
          <Heading title1="Educational" title2="Background" />

          <div
            className={`flex-1 ${styles.flexStart} flex-col mb-[350px] xl:px-0 sm:px-16 mx-[100px]`}
          >
            <div className="flex-1 flex flex-row gap-32 items-center justify-center">
              <img
                loading="lazy"
                src={lsprlogo}
                alt="logo"
                className="w-[200px] h-[200px]"
              />
              <div className="flex flex-col">
                <h2 className={`${styles.heading2}`}>
                  London School of Public Relations Jakarta
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Public Relations and Digital Communication Major
                </p>

                <div className="absolute z-[3] w-[50%] h-[50%] rounded-full white__gradient" />
              </div>
            </div>
          </div>

          <Heading title1="Professional" title2="Background" />

          <div className="w-[100vw] px-[100px]">
            {job.map((_, index) => {
              const currentJob = job[index];
              return (
                <div key={index}>
                  <AboutDetails
                    experiences={experienceChunks[index] || []}
                    company={currentJob.company}
                    position={currentJob.position}
                    logo={currentJob.logo}
                  />
                </div>
              );
            })}
          </div>

          <DownloadButton title1="Download" title2="my resume" />
        </div>
      )}
    </>
  );
};

export default AboutPage;

import { experiences, job, chunkArray } from "../constants";
import { useMemo } from "react";
import AboutDetails from "./AboutDetails";

const Works = () => {
  const experienceChunks = useMemo(() => chunkArray(experiences, 3), []);

  return (
    <div className="w-[100vw] max-sm:h-full max-sm:w-[100vw] px-[100px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-start max-sm:px-0 max-sm:gap-20">
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
  );
};

export default Works;

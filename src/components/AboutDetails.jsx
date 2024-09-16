import ExperienceCard from "./ExperienceCard";
import styles, { layout } from "../constants/style";

const AboutDetails = ({ experiences, position, company, logo }) => (
  <section
    className={`${layout.section} ${styles.flexCenter} h-[100vh] max-sm:h-full ${styles.boxWidth} ${styles.paddingX} max-sm:py-0`}
  >
    <div className={`${layout.sectionInfo} max-sm:items-center`}>
      <div className="flex w-[200px] h-[120px] items-center justify-center">
        <img loading="lazy" src={logo} alt="logo" className="object-contain" />
      </div>

      <h2
        className={`${styles.heading2} max-sm:text-center max-sm:text-[30px] max-sm:leading-[3rem]`}
      >
        {company}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{position}</p>
    </div>

    <div className={`${layout.sectionImg} flex flex-col space-y-6 items-start`}>
      {experiences.map((experience, index) => (
        <ExperienceCard key={experience.id} {...experience} index={index} />
      ))}

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default AboutDetails;

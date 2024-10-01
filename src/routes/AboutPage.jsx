import { Works, Heading, DownloadButton, Education } from "../components";
import styles from "../constants/style";

const AboutPage = () => {
  return (
    <main
      className={`bg-primary w-full overflow-hidden mt-20 max-sm:mt-0 fade-in`}
    >
      <section>
        <div className={`${styles.flexStart} bg-primary`}>
          <div className={`${styles.boxWidth} z-30`}>
            <Heading title1="Educational" title2="Background" />

            <Education />

            <Heading title1="Professional" title2="Background" />

            <Works />

            <DownloadButton title1="Download" title2="my resume" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

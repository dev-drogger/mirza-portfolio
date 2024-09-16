import styles, { layout } from "../constants/style";
import Button from "./Button";
import { emoji } from "../assets/icon";

const Cta = () => {
  return (
    <section
      className={`${layout.section} flex items-center justify-center max-sm:justify-start w-[100vw] h-[100vh] max-sm:h-[85vh] `}
    >
      <div className="absolute items-center justify-between px-[170px] flex flex-row w-full max-sm:px-0 max-sm:flex-col-reverse">
        <div
          className={`${layout.sectionInfo} flex max-sm:items-center max-sm:justify-center`}
        >
          <h2
            className={`${styles.heading2} max-sm:text-[32px] max-sm:text-center max-sm:leading-[3rem]`}
          >
            Wow! <br />I didn&apos;t expect you <br />
            to scroll this far.
          </h2>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 max-sm:w-[275px] max-sm:text-center`}
          >
            {" "}
            You&apos;ve found your path all the way down here, let&apos;s find
            out more about my work and passions!
          </p>

          <Button title={"Learn more"} path={"/about"} />
        </div>

        <div className="max-sm:mb-10">
          <img
            src={emoji}
            loading="lazy"
            alt=""
            className="w-[350px] h-[350px] max-sm:h-[225px] max-sm:w-[225px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;

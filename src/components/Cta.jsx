import styles, { layout } from "../constants/style";
import Button from "./Button";
import { emoji } from "../assets/icon";

const Cta = () => {
  return (
    <section
      className={`${layout.section} flex items-center justify-center w-[100vw] h-[100vh] `}
    >
      <div className="absolute items-center justify-between px-[170px] flex flex-row w-full">
        <div className={`${layout.sectionInfo} `}>
          <h2 className={styles.heading2}>
            Wow! <br />I didn&apos;t expect you <br />
            to scroll this far.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {" "}
            You&apos;ve found your path all the way down here, let&apos;s find
            out more about my work and passions!
          </p>

          <Button title={"Learn more"} path={"/about"} />
        </div>

        <div>
          <img
            src={emoji}
            loading="lazy"
            alt=""
            className="w-[350px] h-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;

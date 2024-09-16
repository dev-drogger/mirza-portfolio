import styles from "../constants/style";
import GetStartedButton from "./GetStartedButton";
import HeroBackground from "./HeroBackground";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col mb-[100px] max-sm:w-[100vh] max-sm:h-[100vh] max-sm:mb-0 ${styles.paddingY}`}
    >
      <HeroBackground />

      <div
        id="heading"
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 my-[200px] mx-[100px] max-sm:ml-10 max-sm:py-2`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"> I hope you have </span> {""}
            <span className="text-white"> a great day!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-outfit font-semibold ss:text-[72px] text-[52px] text-white ss-leading-[100px] leading-[75px]">
            Hello, <br className="sm:block" /> I Am
            <span className="text-gradient"> Mirza</span>{" "}
          </h1>

          <div className="flex md:mr-4 mr-0">
            <Link
              to="github-heading"
              spy={true}
              smooth={true}
              offset={-290}
              duration={500}
            >
              <GetStartedButton />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import styles from "../constants/style";
import Button from "./Button";

function Github() {
  return (
    <div
      className={`px-[170px] mb-16 bg-gradient-to-t from-primary via-primary/75 z-30 w-full`}
    >
      <div id="github-heading" className="flex flex-1 flex-col items-center">
        <h2 className="font-outfit text-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
          I took 52 hours course <br />
          to build this website.
        </h2>

        <p className={`${styles.paragraph} max-w-[750px] mt-5`}>
          My next plan is migrate this site using Next.js, move all of the
          resources to the back-end and enhance the user experience. What do you
          think about my code? is it clean enough? maybe you could give me an
          area of improvement so let&apos;s check it out!
        </p>

        <Button
          title="Open Github"
          path="https://github.com/dev-drogger/mirza-portfolio"
        />
      </div>
    </div>
  );
}

export default Github;

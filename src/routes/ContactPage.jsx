import { NavBar, SocialMedia, Loading } from "../components";
import { useState, useEffect } from "react";
import { Velustro } from "uvcanvas";
import styles, { layout } from "../constants/style";

function ContactPage() {
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
        <section
          className={`bg-primary flex items-center justify-center w-[100vw] h-[100vh] ${fade}`}
        >
          <div className="max-sm:size-full md:w-[100vw] md:h-[100vh]">
            <Velustro />
          </div>

          <div className="absolute max-sm:flex-col max-sm:gap-10 items-center justify-between px-[170px] max-sm:px-0 flex flex-row w-full mt-16">
            <div className="flex">
              <div className={`${layout.sectionInfo}`}>
                <h2
                  className={` ${styles.heading2} max-sm:text-[30px] max-sm:text-center max-sm:leading-[3rem]`}
                >
                  Thank you for <br />
                  visiting my site
                </h2>

                <p className={`${styles.paragraph} text-primary`}>
                  Nice to e-meet you! Let&apos;s connect
                </p>
              </div>
            </div>

            <div className={`flex flex-col w-[500px] max-sm:w-[300px]`}>
              <SocialMedia />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContactPage;

import { NavBar, SocialMedia, Loading } from "./";
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
          className={`  bg-primary flex items-center justify-center w-[100vw] h-[100vh] ${fade}`}
        >
          <Velustro />

          <div className="absolute items-center justify-between px-[170px] flex flex-row w-full">
            <div className="flex">
              <div className={`${layout.sectionInfo}`}>
                <h2 className={` ${styles.heading2}`}>
                  Thank you for <br />
                  visiting my site
                </h2>

                <p className={`${styles.paragraph} text-primary`}>
                  Nice to e-meet you! Let&apos;s connect
                </p>
              </div>
            </div>

            <div className={`flex flex-col w-[500px]`}>
              <SocialMedia />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContactPage;

import {
  NavBar,
  Hero,
  Portfolio,
  Cta,
  Github,
  ScrollToTop,
  Loading,
} from "../components";
import { Outlet } from "react-router-dom";
import styles from "../constants/style";
import { useState, useEffect } from "react";

function HomePage() {
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
      <nav>
        <div>{<NavBar />}</div>
      </nav>
      {loading ? (
        <Loading />
      ) : (
        <main className={`bg-primary w-full overflow-hidden mt-20 ${fade}`}>
          <ScrollToTop />

          <section>
            <div className={`${styles.flexStart} bg-primary`}>
              <div className={`${styles.boxWidth}`}>{<Hero />}</div>
            </div>

            <div className={`${styles.flexStart}`}>
              <div className={`${styles.boxWidth} z-30`}>
                {<Github />}
                {<Portfolio />}
                {<Cta />}
              </div>
            </div>
          </section>
          <Outlet />
        </main>
      )}
    </>
  );
}
export default HomePage;

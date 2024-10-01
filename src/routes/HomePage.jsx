import { Hero, Portfolio, Cta, Github, ScrollToTop } from "../components";
import { Outlet } from "react-router-dom";
import styles from "../constants/style";

function HomePage() {
  return (
    <main
      className={`bg-primary w-full overflow-hidden mt-20 max-sm:mt-0 fade-in`}
    >
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
  );
}
export default HomePage;

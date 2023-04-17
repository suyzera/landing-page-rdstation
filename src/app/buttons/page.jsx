import styles from "./Buttons.module.scss";
import HeadingLg from "../components/Typograph/HeadingLg";
import { Darker_Grotesque, Nunito_Sans } from "next/font/google";
import PrimaryButton from "../components/Buttons/Primary";
import SecondaryButton from "../components/Buttons/Secondary";
import HighlightButton from "../components/Buttons/Highlight";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

const Buttons = () => {
  return (
    <div className={styles.grid}>
      <section className={styles.components}>
        <h1 className={darker.className}>Components</h1>
      </section>

      <section className={styles.buttons}>
        <HeadingLg content="Button"></HeadingLg>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <PrimaryButton></PrimaryButton>
          </div>

          <div className={styles.button}>
            <SecondaryButton></SecondaryButton>
          </div>

          <div className={styles.button}>
            <HighlightButton></HighlightButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buttons;

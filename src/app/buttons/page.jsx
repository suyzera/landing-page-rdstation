import styles from "./Buttons.module.scss";
import HeadingLg from "../components/Typograph/HeadingLg";
import { Darker_Grotesque } from "next/font/google";
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
        <HeadingLg>Button</HeadingLg>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <PrimaryButton>Primary Button</PrimaryButton>
          </div>

          <div className={styles.button}>
            <SecondaryButton>Secondary Button</SecondaryButton>
          </div>

          <div className={styles.button}>
            <HighlightButton>Highlight Button</HighlightButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buttons;

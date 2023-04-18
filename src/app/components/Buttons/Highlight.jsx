import styles from "./Highlight.module.scss";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "700" });

const HighlightButton = ({ children = "button" }) => {
  return (
    <button className={`${styles.highlight} ${nunito.className}`}>
      {children}
    </button>
  );
};

export default HighlightButton;

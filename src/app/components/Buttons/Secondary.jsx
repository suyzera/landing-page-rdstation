import styles from "./Secondary.module.scss";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "700" });

const SecondaryButton = ({ children = "button" }) => {
  return (
    <button className={`${styles.secondary} ${nunito.className}`}>
      {children}
    </button>
  );
};
export default SecondaryButton;

import styles from "./Primary.module.scss";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "700" });

const PrimaryButton = ({ children = "button" }) => {
  return (
    <button className={`${styles.primary} ${nunito.className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;

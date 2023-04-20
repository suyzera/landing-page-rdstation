import { useCallback } from "react";
import styles from "./Highlight.module.scss";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "700" });

const HighlightButton = ({
  children = "button",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <button
      className={`${styles.highlight} ${nunito.className}`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default HighlightButton;

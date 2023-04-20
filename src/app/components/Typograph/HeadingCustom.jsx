import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "800" });

export const HeadingCustom = ({ children, color = "#000" }) => {
  return (
    <h6
      style={{ color: color, fontSize: "20px", fontWeight: "800" }}
      className={darker.className}
    >
      {children}
    </h6>
  );
};

export default HeadingCustom;

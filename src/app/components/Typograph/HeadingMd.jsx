import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

export const HeadingMd = ({ children, color = "#000" }) => {
  return (
    <h3 style={{ color: color }} className={darker.className}>
      {children}
    </h3>
  );
};

export default HeadingMd;

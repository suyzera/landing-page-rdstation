import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

export const HeadingSm = ({ children, color = "#000" }) => {
  return (
    <h4 style={{ color: color }} className={darker.className}>
      {children}
    </h4>
  );
};

export default HeadingSm;

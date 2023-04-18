import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "700" });

export const HeadingXs = ({ children, color = "#000" }) => {
  return (
    <h5 style={{ color: color }} className={darker.className}>
      {children}
    </h5>
  );
};

export default HeadingXs;

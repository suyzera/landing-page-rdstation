import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

export const HeadingLg = ({ content }) => {
  return <h2 className={darker.className}>{content}</h2>;
};

export default HeadingLg;

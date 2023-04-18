import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

export const HeadingMd = ({ children }) => {
  return <h4 className={darker.className}>{children}</h4>;
};

export default HeadingMd;

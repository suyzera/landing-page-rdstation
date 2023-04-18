import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

export const HeadingMd = ({ children }) => {
  return <h3 className={darker.className}>{children}</h3>;
};

export default HeadingMd;

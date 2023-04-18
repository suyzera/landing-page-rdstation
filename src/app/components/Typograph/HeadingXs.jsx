import { Darker_Grotesque } from "next/font/google";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "700" });

export const HeadingXs = ({ children }) => {
  return <h5 className={darker.className}>{children}</h5>;
};

export default HeadingXs;

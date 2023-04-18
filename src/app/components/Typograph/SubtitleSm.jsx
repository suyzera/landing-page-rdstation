import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const SubtitleSm = ({ children }) => {
  return <p className={nunito.className}>{children}</p>;
};

export default SubtitleSm;

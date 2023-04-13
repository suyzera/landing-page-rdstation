import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const SubtitleSm = ({ content }) => {
  return <p className={roboto.className}>{content}</p>;
};

export default SubtitleSm;

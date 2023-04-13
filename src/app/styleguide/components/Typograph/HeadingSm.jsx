import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const HeadingMd = ({ content }) => {
  return <h3 className={roboto.className}>{content}</h3>;
};

export default HeadingMd;

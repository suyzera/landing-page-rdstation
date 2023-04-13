import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const HeadingMd = ({ content }) => {
  return <h2 className={roboto.className}>{content}</h2>;
};

export default HeadingMd;

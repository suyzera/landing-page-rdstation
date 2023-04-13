import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const HeadingXs = ({ content }) => {
  return <h4 className={roboto.className}>{content}</h4>;
};

export default HeadingXs;

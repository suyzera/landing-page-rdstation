import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

export const HeadingLg = ({ content }) => {
  return <h1 className={roboto.className}>{content}</h1>;
};

export default HeadingLg;

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const BodyXs = ({ content }) => {
  return <span className={roboto.className}>{content}</span>;
};

export default BodyXs;

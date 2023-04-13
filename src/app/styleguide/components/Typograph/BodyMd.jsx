import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const BodyMd = ({ content }) => {
  return <span className={roboto.className}>{content}</span>;
};

export default BodyMd;

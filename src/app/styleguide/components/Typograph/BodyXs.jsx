import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const BodyXs = ({ content }) => {
  return <p className={nunito.className}>{content}</p>;
};

export default BodyXs;

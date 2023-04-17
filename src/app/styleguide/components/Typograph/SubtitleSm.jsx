import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const SubtitleSm = ({ content }) => {
  return (
    <p className={nunito.className} style={{ paddingBottom: "24px" }}>
      {content}
    </p>
  );
};

export default SubtitleSm;

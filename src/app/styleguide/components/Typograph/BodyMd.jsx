import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const BodyMd = ({ content }) => {
  return (
    <p className={roboto.className} style={{ paddingBottom: "24px" }}>
      {content}
    </p>
  );
};

export default BodyMd;

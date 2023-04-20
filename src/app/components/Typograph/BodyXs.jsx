import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const BodyXs = ({ children, color = "black" }) => {
  return (
    <p style={{ color: color }} className={nunito.className}>
      {children}
    </p>
  );
};

export default BodyXs;

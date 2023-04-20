import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const FormLabelMd = ({ children, color = "#7E8A98" }) => {
  return (
    <p style={{ color: color, fontSize: "12px" }} className={nunito.className}>
      {children}
    </p>
  );
};

export default FormLabelMd;

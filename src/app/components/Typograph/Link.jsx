import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

export const LinkText = ({ children, color = "#19C1CE", href = "#" }) => {
  return (
    <a
      href={href}
      style={{ color: color, textDecoration: "underline" }}
      className={nunito.className}
    >
      {children}
    </a>
  );
};

export default LinkText;

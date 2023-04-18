import styles from "./HamburgerMenu.module.scss";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "700" });

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul>
        <li>
          <a className={nunito.className} href="#">
            Menu 1
          </a>
        </li>
        <li>
          <a className={nunito.className} href="#">
            Menu 2
          </a>
        </li>
        <li>
          <a className={nunito.className} href="#">
            Menu 3
          </a>
        </li>
        <li>
          <a className={nunito.className} href="#">
            Menu 4
          </a>
        </li>
        <li>
          <a className={nunito.className} href="#">
            Menu 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

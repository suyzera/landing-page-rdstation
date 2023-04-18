import styles from "./HamburgerMenu.module.scss";
import { Nunito_Sans } from "next/font/google";
import SecondaryButton from "../Buttons/Secondary";
import PrimaryButton from "../Buttons/Primary";
import Image from "next/image";
import arrow from "./../../images/icons/arrow.png";

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

        <li className={styles.buttonContainer}>
          <SecondaryButton>Button</SecondaryButton>
          <PrimaryButton>
            Button <Image style={{ marginLeft: "5px" }} src={arrow} />
          </PrimaryButton>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

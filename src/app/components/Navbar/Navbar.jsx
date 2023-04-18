import Image from "next/image";
import styles from "./Navbar.module.scss";

import rdStationLogo from "../../images/rd-station-cor-md.svg";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={rdStationLogo} width="100%" />

      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
};

export default Navbar;

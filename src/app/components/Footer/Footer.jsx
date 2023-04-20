import Image from "next/image";
import styles from "./Footer.module.scss";
import rdStationLogo from "@/app/images/rd-station-cor-md.svg";
import twitterIcon from "@/app/images/icons/twitter.svg";
import facebookIcon from "@/app/images/icons/facebook.svg";
import linkedinIcon from "@/app/images/icons/linkedin.svg";
import instagramIcon from "@/app/images/icons/instagram.svg";
import youtubeIcon from "@/app/images/icons/youtube.svg";
import BodyXs from "../Typograph/BodyXs";
import LinkText from "../Typograph/Link";

const socialNetworkIcon = [
  {
    icon: twitterIcon,
    url: "https://twitter.com/rd_station",
  },
  {
    icon: facebookIcon,
    url: "https://www.facebook.com/ResultadosDigitais/",
  },
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/company/resultadosdigitais",
  },
  { icon: instagramIcon, url: "https://www.instagram.com/resdigitais/" },
  {
    icon: youtubeIcon,
    url: "https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ",
  },
];
const Footer = () => {
  return (
    <footer className={styles.rdFooter}>
      <Image
        className={styles.logo}
        src={rdStationLogo}
        alt="RD Station Logo"
      ></Image>
      <hr className={styles.line}></hr>

      <div className={styles.icons}>
        {socialNetworkIcon.map(({ icon, url }) => {
          return (
            <a href={url} key={url}>
              <Image className={styles.icon} src={icon} alt="url" />
            </a>
          );
        })}
      </div>

      <div className={styles.text}>
        <BodyXs>
          © 2021 <strong>RD Station</strong>.{" "}
          <LinkText
            href="https://legal.rdstation.com/pt/privacy-policy/"
            color="#000"
          >
            Política de privacidade
          </LinkText>
          .
        </BodyXs>
      </div>
    </footer>
  );
};
export default Footer;

import styles from "./Assets.module.scss";
import Image from "next/image";
import { Darker_Grotesque } from "next/font/google";
import rdStationLogo from "../images/rd-station-cor-md.svg";
import imgVideoThumbnail from "../images/img-video-thumbnail.svg";
import imgRdoer from "../images/img-rdoer.svg";
import HeadingLg from "../components/Typograph/HeadingLg";
import SubtitleSm from "../components/Typograph/SubtitleSm";
import Icons from "./icons";

const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

const Assets = () => {
  return (
    <div className={styles.grid}>
      <section className={styles.assets}>
        <h1 className={darker.className}>Assets</h1>
      </section>

      <section className={styles.logos}>
        <HeadingLg content="Logo"></HeadingLg>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={rdStationLogo} />
            <SubtitleSm content="logo-rd-station-default.svg"></SubtitleSm>
          </div>
          <div className={styles.logo}>
            <Image src={rdStationLogo} />
            <SubtitleSm content="logo-rd-station-default.svg"></SubtitleSm>
          </div>
        </div>
      </section>

      <section className={styles.images}>
        <HeadingLg content="Logo"></HeadingLg>
        <div className={styles.iconsContainer}>
          {Icons.map((icon) => (
            <div className={styles.icon}>
              <Image src={icon} key={icon} />
            </div>
          ))}
        </div>
        <div className={styles.photosContainer}>
          <div className={styles.photo}>
            <Image src={imgRdoer} />
            <span>img-results.jpg</span>
          </div>
          <div className={styles.photo}>
            <Image src={imgVideoThumbnail} />
            <span>img-video-thumbnail.jpg</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assets;

import { useState } from "react";
import styles from "./VideoSection.module.scss";
import HeadingXs from "@/app/components/Typograph/HeadingXs";
import VideoModal from "@/app/components/VideoModal/VideoModal";
import playIcon from "@/app/images/icons/play.svg";
import SecondaryButton from "@/app/components/Buttons/Secondary";
import Image from "next/image";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.rdVideo}>
      <div className={styles.topCut}></div>
      <div className={styles.titles}>
        <HeadingXs>
          Entenda melhor como o RD Station Marketing funciona na prática
        </HeadingXs>
        <div style={{ maxWidth: "270px", textAlign: "center" }}>
          <SecondaryButton>assista a demonstração</SecondaryButton>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <Image
          onClick={handleClick}
          src={playIcon}
          className={styles.playIcon}
          alt="Tocar vídeo"
        />
      </div>

      <div className={styles.cut}></div>
      <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default VideoSection;

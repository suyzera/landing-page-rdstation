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
      <HeadingXs>
        Entenda melhor como o RD Station Marketing funciona na prática
      </HeadingXs>
      <SecondaryButton>assista a demonstração</SecondaryButton>

      <div className={styles.videoContainer}>
        <Image
          onClick={handleClick}
          src={playIcon}
          className={styles.playIcon}
          alt="Tocar vídeo"
        />
      </div>
      <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default VideoSection;

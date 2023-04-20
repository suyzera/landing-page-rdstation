import { useState } from "react";
import Modal from "react-modal";
import styles from "./VideoModal.module.scss";

const VideoModal = ({ isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/lGCesaaLi4s?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
          onLoad={handleOnLoad}
        ></iframe>
        {!isLoaded && <div className={styles.loading}>Loading...</div>}
      </div>
    </Modal>
  );
};

export default VideoModal;

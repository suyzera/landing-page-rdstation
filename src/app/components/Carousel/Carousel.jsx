"use client";

import { useState } from "react";
import BodyMd from "../Typograph/BodyMd";
import HeadingXs from "../Typograph/HeadingXs";
import styles from "./Carousel.module.scss";
import icon from "../../images/icons/icon.svg";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const renderCircles = () => {
    return (
      <div className={styles.circleContainer}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`${styles.circle} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleCircleClick(index)}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselContent}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />
            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />
            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />

            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />
            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />
            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.carouselItemContainer}>
            <Image src={icon} key={icon} />
            <HeadingXs>
              Torne sua operação de Marketing Digital mais produtiva
            </HeadingXs>

            <BodyMd>
              Chega de usar várias ferramentas separadas e perder as informações
              no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos
              os principais recursos de Marketing Digital em um só lugar para
              sua operação ser mais eficaz.
            </BodyMd>
          </div>
        </div>
      </div>
      {renderCircles()}
    </div>
  );
};

export default Carousel;

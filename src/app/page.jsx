"use client";

import styles from "./Home.module.scss";
import Navbar from "./components/Navbar/Navbar";
import BodyMd from "./components/Typograph/BodyMd";
import BodyXs from "./components/Typograph/BodyXs";
import HeadingMd from "./components/Typograph/HeadingMd";
import HeadingXs from "./components/Typograph/HeadingXs";
import HeadingSm from "./components/Typograph/HeadingSm";
import Carousel from "./components/Carousel/Carousel";
import SubtitleSm from "./components/Typograph/SubtitleSm";
import HighlightButton from "./components/Buttons/Highlight";
import SecondaryButton from "./components/Buttons/Secondary";
import PrimaryButton from "./components/Buttons/Primary";
import rdStationCrmIcon from "./images/icons/rd-station-crm.svg";
import salesforceIcon from "./images/icons/salesforce.svg";
import googleIcon from "./images/icons/google.svg";
import facebookIcon from "./images/icons/facebook.svg";
import linkedinIcon from "./images/icons/linkedin.svg";
import wordpressIcon from "./images/icons/wordpress.svg";
import hotmartIcon from "./images/icons/hotmart.svg";
import pagseguroIcon from "./images/icons/pagseguro.svg";
import shopifyIcon from "./images/icons/shopify.svg";
import zapierIcon from "./images/icons/zapier.svg";
import twitterIcon from "./images/icons/twitter.svg";
import instagramIcon from "./images/icons/instagram.svg";
import youtubeIcon from "./images/icons/youtube.svg";
import rdStationLogo from "./images/rd-station-cor-md.svg";
import playIcon from "./images/icons/play.svg";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "./components/VideoModal/VideoModal";

const icons = [
  {
    component: rdStationCrmIcon,
    name: "RD Station CRM",
  },
  {
    component: salesforceIcon,
    name: "Salesforce",
  },
  {
    component: googleIcon,
    name: "Google",
  },
  {
    component: facebookIcon,
    name: "Facebook",
  },
  {
    component: linkedinIcon,
    name: "Linkedin",
  },
  {
    component: wordpressIcon,
    name: "Wordpress",
  },
  {
    component: hotmartIcon,
    name: "Hotmart",
  },
  {
    component: pagseguroIcon,
    name: "PagSeguro",
  },
  {
    component: shopifyIcon,
    name: "Shopify",
  },
  {
    component: zapierIcon,
    name: "Zapier",
  },
];

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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.grid}>
      <Navbar></Navbar>

      <main className={styles.main}>
        <HeadingMd>
          Gere mais <span style={{ color: "#19C1CE" }}>oportunidades</span> para
          seu negócio
        </HeadingMd>
        <BodyMd>
          O RD Station Marketing é um software para sua empresa fazer campanhas
          melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e
          alcançar mais resultados.
        </BodyMd>

        <form className={styles.form} action="POST"></form>
      </main>

      <section className={styles.rdMarketing}>
        <div className={styles.rdMarketingContainer}>
          <div className={styles.cut}></div>
          <HeadingXs color="#FFF">
            Estaremos juntos desde o primeiro passo!
          </HeadingXs>
          <BodyMd color="#FFF">
            Se você ainda não sabe como extrair o máximo das ações digitais, não
            tem problema. O RD Station Marketing é mais que uma ferramenta, nos
            importamos com os seus resultados.
          </BodyMd>
          <BodyMd color="#FFF">
            Estaremos com você do planejamento até a prática!
          </BodyMd>
        </div>
      </section>

      <section className={styles.results}>
        <HeadingXs>
          Resultados previsíveis e mais clientes para sua empresa
        </HeadingXs>

        <BodyXs>Torne sua atuação no Marketing Digital mais eficaz</BodyXs>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className="check-icon"></span>
            <BodyMd>
              Ferramentas intuitivas e com modelos prontos, vídeos explicativos
              e passo a passo guiado
            </BodyMd>
          </li>
          <li className={styles.item}>
            <span className="check-icon"></span>
            <BodyMd>
              Implementação com especialistas focada em planejamento e prática
              (nos planos Marketing Pro e Enterprise)
            </BodyMd>
          </li>
          <li className={styles.item}>
            <span className="check-icon"></span>
            <BodyMd>
              Time de especialistas em Sucesso do Cliente para apoiar na
              otimização da estratégia em cada fase da sua jornada (nos planos
              Marketing Pro e Enterprise)
            </BodyMd>
          </li>
          <li className={styles.item}>
            <span className="check-icon"></span>
            <BodyMd>
              Suporte técnico em português, espanhol e inglês para tirar
              dúvidas, com 97% de satisfação entre nossos clientes
            </BodyMd>
          </li>
          <li className={styles.item}>
            <span className="check-icon"></span>
            <BodyMd>
              Muito conteúdo educativo, eventos, cursos da RD University e
              comunidades para você continuar evoluindo
            </BodyMd>
          </li>
        </ul>

        <div className={styles.imageContainer}>
          <div className={styles.triangle}></div>
        </div>

        <div className={styles.resultsCut}></div>
      </section>

      <section className={styles.tool}>
        <div className={styles.tool}>
          <HeadingSm>
            A ferramenta de Automação de Marketing líder na América Latina
          </HeadingSm>

          <Carousel></Carousel>
        </div>
      </section>

      <section className={styles.accountContainer}>
        <div className={styles.account}>
          <HeadingSm color="#FFF">
            Por que mais de 25.000 empresas escolheram o RD Station?
          </HeadingSm>
          <SubtitleSm color="#FFF">
            Combinamos nossos produtos de Marketing e Vendas com pessoas que se
            importam com seus resultados e um ecossistema que apoia o seu
            negócio do planejamento à prática.
          </SubtitleSm>
          <HighlightButton>criar conta gratuita</HighlightButton>
        </div>
      </section>

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

      <section className={styles.operation}>
        <HeadingSm>
          Torne sua operação de Marketing ainda mais poderosa
        </HeadingSm>
        <BodyMd>
          O RD Station Marketing é um software para sua empresa fazer campanhas
          melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e
          alcançar mais resultados.
        </BodyMd>
        <div className={styles.icons}>
          {icons.map((icon) => {
            return (
              <div className={styles.icon} key={icon.name}>
                <Image src={icon.component} alt={icon.name}></Image>
                <BodyXs>{icon.name}</BodyXs>
              </div>
            );
          })}
        </div>
        <a href="https://app.rdstation.com.br/signup" target="_blank">
          <PrimaryButton>Criar conta gratuita</PrimaryButton>
        </a>
      </section>

      <footer className={styles.rdFooter}>
        <Image
          className={styles.logo}
          src={rdStationLogo}
          alt="RD Station Logo"
        ></Image>
        <hr className={styles.line}></hr>
        <div className={styles.iconContainer}>
          {socialNetworkIcon.map(({ icon, url }) => {
            return (
              <a href={url}>
                <Image className={styles.icon} src={icon} key={url} alt="url" />
              </a>
            );
          })}
        </div>
        <BodyXs>© 2021 RD Station. Política de Privacidade.</BodyXs>
      </footer>
    </div>
  );
}

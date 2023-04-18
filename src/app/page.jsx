import styles from "./Home.module.scss";
import Navbar from "./components/Navbar/Navbar";
import BodyMd from "./components/Typograph/BodyMd";
import BodyXs from "./components/Typograph/BodyXs";
import HeadingMd from "./components/Typograph/HeadingMd";
import HeadingXs from "./components/Typograph/HeadingXs";
import HeadingSm from "./components/Typograph/HeadingSm";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
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
      </section>

      <section className={styles.tool}>
        <HeadingSm>
          A ferramenta de Automação de Marketing líder na América Latina
        </HeadingSm>

        <Carousel></Carousel>
      </section>
    </div>
  );
}

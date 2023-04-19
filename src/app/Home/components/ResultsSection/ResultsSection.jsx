import styles from "./ResultsSection.module.scss";
import BodyMd from "../../../components/Typograph/BodyMd";
import BodyXs from "../../../components/Typograph/BodyXs";
import HeadingXs from "../../../components/Typograph/HeadingXs";

const ResultsSection = () => {
  return (
    <section className={styles.results}>
      <HeadingXs>
        Resultados previsíveis e mais clientes para sua empresa
      </HeadingXs>

      <BodyXs>Torne sua atuação no Marketing Digital mais eficaz</BodyXs>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            Ferramentas intuitivas e com modelos prontos, vídeos explicativos e
            passo a passo guiado
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
            Suporte técnico em português, espanhol e inglês para tirar dúvidas,
            com 97% de satisfação entre nossos clientes
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
  );
};

export default ResultsSection;

import styles from "./ResultsSection.module.scss";
import BodyMd from "../../../components/Typograph/BodyMd";
import BodyXs from "../../../components/Typograph/BodyXs";
import HeadingXs from "../../../components/Typograph/HeadingXs";

const ResultsSection = () => {
  return (
    <section className={styles.results}>
      <div className={styles.titles}>
        <HeadingXs>
          Resultados previsíveis e mais clientes para sua empresa
        </HeadingXs>

        <BodyXs>Torne sua atuação no Marketing Digital mais eficaz</BodyXs>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            <strong>Ferramentas intuitivas</strong> e com modelos prontos,
            vídeos explicativos e passo a passo guiado
          </BodyMd>
        </li>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            <strong>Implementação com especialistas</strong> focada em
            planejamento e prática (nos planos Marketing Pro e Enterprise)
          </BodyMd>
        </li>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            <strong>Time de especialistas em Sucesso do Cliente</strong> para
            apoiar na otimização da estratégia em cada fase da sua jornada (nos
            planos Marketing Pro e Enterprise)
          </BodyMd>
        </li>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            <strong>Suporte técnico em português</strong>, espanhol e inglês
            para tirar dúvidas, com 97% de satisfação entre nossos clientes
          </BodyMd>
        </li>
        <li className={styles.item}>
          <span className="check-icon"></span>
          <BodyMd>
            <strong>Muito conteúdo educativo</strong>, eventos, cursos da RD
            University e comunidades para você continuar evoluindo
          </BodyMd>
        </li>
      </ul>

      <div className={styles.imageContainer}>
        <div className={styles.triangle}></div>
      </div>

      <div className={styles.resultsCut}></div>
      <div className={styles.backgroundCut}></div>
      <div className={styles.backgroundCutSecondary}></div>
    </section>
  );
};

export default ResultsSection;

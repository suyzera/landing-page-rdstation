import styles from "./MktSection.module.scss";
import BodyMd from "../../../components/Typograph/BodyMd";
import HeadingXs from "../../../components/Typograph/HeadingXs";

const MktSection = () => {
  return (
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
  );
};

export default MktSection;

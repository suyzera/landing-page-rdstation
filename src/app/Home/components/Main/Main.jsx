import styles from "./Main.module.scss";
import BodyMd from "./../../../components/Typograph/BodyMd";
import HeadingMd from "./../../../components/Typograph/HeadingMd";

const Main = () => {
  return (
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
  );
};

export default Main;
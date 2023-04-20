import styles from "./AccountContainer.module.scss";
import HeadingSm from "../../../components/Typograph/HeadingSm";
import SubtitleSm from "../../../components/Typograph/SubtitleSm";
import HighlightButton from "../../../components/Buttons/Highlight";

const AccountContainer = () => {
  return (
    <section className={styles.accountContainer}>
      <div className={styles.account}>
        <div className={styles.text}>
          <HeadingSm color="#FFF">
            Por que mais de 25.000 empresas escolheram o RD Station?
          </HeadingSm>
          <SubtitleSm color="#FFF">
            Combinamos nossos produtos de Marketing e Vendas com pessoas que se
            importam com seus resultados e um ecossistema que apoia o seu
            negócio do planejamento à prática.
          </SubtitleSm>
          <div className={styles.button}>
            <HighlightButton>criar conta gratuita</HighlightButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountContainer;

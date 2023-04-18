import styles from "./Home.module.scss";

import Navbar from "./components/Navbar/Navbar";
import BodyMd from "./components/Typograph/BodyMd";
import HeadingMd from "./components/Typograph/HeadingMd";
import HeadingXs from "./components/Typograph/HeadingXs";

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
    </div>
  );
}

import styles from "./ToolsSection.module.scss";
import HeadingSm from "../../../components/Typograph/HeadingSm";
import Carousel from "../../../components/Carousel/Carousel";

const Main = () => {
  return (
    <section className={styles.tool}>
      <div className={styles.tool}>
        <HeadingSm>
          A ferramenta de Automação de Marketing líder na América Latina
        </HeadingSm>

        <Carousel></Carousel>
      </div>
    </section>
  );
};

export default Main;

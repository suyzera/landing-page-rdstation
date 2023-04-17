import styles from "./StyleGuide.module.scss";
import ColorSquare from "./components/ColorSquare/ColorSquare";
import colors from "./variables/colors";
import tableInfo from "./tableInfo";
import HeadingLg from "./components/Typograph/HeadingLg";
import { Darker_Grotesque, Nunito_Sans } from "next/font/google";
import BodyMd from "./components/Typograph/BodyMd";
import HeadingXs from "./components/Typograph/HeadingXs";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });
const darker = Darker_Grotesque({ subsets: ["latin"], weight: "900" });

const StyleGuide = () => {
  return (
    <div className={styles.grid}>
      <section className={styles.styleguide}>
        <h1 className={darker.className}>Style Guide</h1>
      </section>

      <section className={styles.colors}>
        <HeadingLg content="Colors"></HeadingLg>
        <div className={styles.color}>
          {colors.map((color) => (
            <ColorSquare color={color} key={color.value} />
          ))}
        </div>
      </section>

      <section className={styles.typograph}>
        <HeadingLg content="Tipografia"></HeadingLg>

        <div className={styles.fonts}>
          <div className={styles.square}>
            <h3 className={nunito.className}>Nunito Sams</h3>
            <BodyMd content="Google Fonts"></BodyMd>
          </div>
          <div className={styles.square}>
            <h3 className={nunito.className}>Darker Grotesque</h3>
            <BodyMd content="Google Fonts"></BodyMd>
          </div>
        </div>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>
                <HeadingXs content="Name"></HeadingXs>
              </th>
              <th className={styles.th}>
                <HeadingXs content="Family"></HeadingXs>
              </th>
              <th className={styles.th}>
                <HeadingXs content="Size Desktop"></HeadingXs>{" "}
              </th>
              <th className={styles.th}>
                <HeadingXs content="Size Mobile"></HeadingXs>{" "}
              </th>
              <th className={styles.th}>
                <HeadingXs content="Line Height"></HeadingXs>{" "}
              </th>
              <th className={styles.th}>
                <HeadingXs content="Weight"></HeadingXs>
              </th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {tableInfo.map((item) => {
              return (
                <tr className={styles.tr} key={item.title}>
                  <td className={styles.td}>
                    <BodyMd content={item.component}></BodyMd>
                  </td>
                  <td className={styles.td}>
                    <BodyMd content={item.family}></BodyMd>
                  </td>
                  <td className={styles.td}>
                    <BodyMd content={item.desktopSize}></BodyMd>
                  </td>
                  <td className={styles.td}>
                    <BodyMd content={item.mobileSize}></BodyMd>
                  </td>
                  <td className={styles.td}>
                    <BodyMd content={item.lineHeight}></BodyMd>
                  </td>
                  <td className={styles.td}>
                    <BodyMd content={item.weight}></BodyMd>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StyleGuide;

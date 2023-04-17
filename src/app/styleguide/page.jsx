import styles from "./StyleGuide.module.scss";
import ColorSquare from "./components/ColorSquare/ColorSquare";
import colors from "./variables/colors";
import tableInfo from "./tableInfo";

import HeadingLg from "./components/Typograph/HeadingLg";

const StyleGuide = () => {
  return (
    <div className={styles.grid}>
      <section className={styles.styleguide}>
        <HeadingLg content="Style Guide"></HeadingLg>
      </section>

      <section className={styles.colors}>
        <HeadingLg content="Colors"></HeadingLg>
        <div className={styles.color}>
          {colors.map((color) => (
            <ColorSquare color={color} key={color.value} />
          ))}
        </div>
      </section>

      <section>
        <HeadingLg content="Typograph"></HeadingLg>

        <div className={styles.typograph}>
          <div className={styles.square}>
            <h3>Nunito Sams</h3>
            <h4>Google Fonts</h4>
          </div>
          <div className={styles.square}>
            <h3>Darker Grotesque</h3>
            <h4>Google Fonts</h4>
          </div>
        </div>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Family</th>
              <th className={styles.th}>Size Desktop</th>
              <th className={styles.th}>Size Mobile</th>
              <th className={styles.th}>Line Height</th>
              <th className={styles.th}>Weight</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {tableInfo.map((item) => {
              return (
                <tr className={styles.tr} key={item.title}>
                  <td className={styles.td}>{item.component}</td>
                  <td className={styles.td}>{item.family}</td>
                  <td className={styles.td}>{item.desktopSize}</td>
                  <td className={styles.td}>{item.mobileSize}</td>
                  <td className={styles.td}>{item.lineHeight}</td>
                  <td className={styles.td}>{item.weight}</td>
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

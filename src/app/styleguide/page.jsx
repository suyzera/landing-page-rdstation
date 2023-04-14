import styles from "./StyleGuide.module.scss";
import ColorSquare from "./components/ColorSquare/ColorSquare";
import colors from "./variables/colors";
import HeadingLg from "./components/Typograph/HeadingLg";
import HeadingMd from "./components/Typograph/HeadingMd";
import HeadingSm from "./components/Typograph/HeadingSm";
import HeadingXs from "./components/Typograph/HeadingXs";
import SubtitleSm from "./components/Typograph/SubtitleSm";
import SubtitleXs from "./components/Typograph/SubtitleXs";
import BodyLg from "./components/Typograph/BodyLg";
import BodyMd from "./components/Typograph/BodyMd";
import BodyXs from "./components/Typograph/BodyXs";

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
            <tr className={styles.tr}>
              <td className={styles.td}>
                <HeadingLg content="Heading Lg" />
              </td>
              <td className={styles.td}>Darker Grotesque</td>
              <td className={styles.td}>56</td>
              <td className={styles.td}>40</td>
              <td className={styles.td}>100% </td>
              <td className={styles.td}>Black</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <HeadingMd content="Heading Md" />
              </td>
              <td className={styles.td}>Darker Grotesque</td>
              <td className={styles.td}>40</td>
              <td className={styles.td}>32</td>
              <td className={styles.td}>100% </td>
              <td className={styles.td}>Black</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <HeadingSm content="Heading Sm" />
              </td>
              <td className={styles.td}>Darker Grotesque</td>
              <td className={styles.td}>32</td>
              <td className={styles.td}>24</td>
              <td className={styles.td}>110% </td>
              <td className={styles.td}>Black</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <HeadingXs content="Heading Xs" />
              </td>
              <td className={styles.td}>Darker Grotesque</td>
              <td className={styles.td}>24</td>
              <td className={styles.td}>20</td>
              <td className={styles.td}>110% </td>
              <td className={styles.td}>ExtraBold</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <SubtitleSm content="Subtitle Sm" />
              </td>
              <td className={styles.td}>Nunito Sans</td>
              <td className={styles.td}>20</td>
              <td className={styles.td}>16</td>
              <td className={styles.td}>140% </td>
              <td className={styles.td}>Regular</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <SubtitleXs content="Subtitle Xs" />
              </td>
              <td className={styles.td}>Nunito Sans</td>
              <td className={styles.td}>14</td>
              <td className={styles.td}>14</td>
              <td className={styles.td}>120% </td>
              <td className={styles.td}>Regular</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <BodyLg content="Body Lg" />
              </td>
              <td className={styles.td}>Nunito Sans</td>
              <td className={styles.td}>20</td>
              <td className={styles.td}>20</td>
              <td className={styles.td}>150% </td>
              <td className={styles.td}>RegularBold</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <BodyMd content="Body Md" />
              </td>
              <td className={styles.td}>Nunito Sans</td>
              <td className={styles.td}>16</td>
              <td className={styles.td}>16</td>
              <td className={styles.td}>150% </td>
              <td className={styles.td}>RegularBold</td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <BodyXs content="Body Sm" />
              </td>
              <td className={styles.td}>Nunito Sans</td>
              <td className={styles.td}>14</td>
              <td className={styles.td}>14</td>
              <td className={styles.td}>150% </td>
              <td className={styles.td}>RegularBold</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StyleGuide;

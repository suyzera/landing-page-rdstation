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
        <h1>Style Guide</h1>
      </section>

      <section className={styles.colors}>
        {colors.map((color) => (
          <ColorSquare color={color} key={color.value} />
        ))}
      </section>

      <section>
        <h2>Typograph</h2>
        <div>
          <h3>Nunito Sams</h3>
          <h4>Google Fonts</h4>
        </div>
        <div>
          <h3>Darker Grotesque</h3>
          <h4>Google Fonts</h4>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Family</th>
              <th>Size Desktop</th>
              <th>Size Mobile</th>
              <th>Line Height</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <HeadingLg content="Heading Lg" />
              </td>
              <td>Darker Grotesque</td>
              <td>56</td>
              <td>40</td>
              <td>100% </td>
              <td>Black</td>
            </tr>

            <tr>
              <td>
                <HeadingMd content="Heading Md" />
              </td>
              <td>Darker Grotesque</td>
              <td>40</td>
              <td>32</td>
              <td>100% </td>
              <td>Black</td>
            </tr>

            <tr>
              <td>
                <HeadingSm content="Heading Sm" />
              </td>
              <td>Darker Grotesque</td>
              <td>32</td>
              <td>24</td>
              <td>110% </td>
              <td>Black</td>
            </tr>

            <tr>
              <td>
                <HeadingXs content="Heading Xs" />
              </td>
              <td>Darker Grotesque</td>
              <td>24</td>
              <td>20</td>
              <td>110% </td>
              <td>ExtraBold</td>
            </tr>

            <tr>
              <td>
                <SubtitleSm content="Subtitle Sm" />
              </td>
              <td>Nunito Sans</td>
              <td>20</td>
              <td>16</td>
              <td>140% </td>
              <td>Regular</td>
            </tr>

            <tr>
              <td>
                <SubtitleXs content="Subtitle Xs" />
              </td>
              <td>Nunito Sans</td>
              <td>14</td>
              <td>14</td>
              <td>120% </td>
              <td>Regular</td>
            </tr>

            <tr>
              <td>
                <BodyLg content="Body Lg" />
              </td>
              <td>Nunito Sans</td>
              <td>20</td>
              <td>20</td>
              <td>150% </td>
              <td>RegularBold</td>
            </tr>

            <tr>
              <td>
                <BodyMd content="Body Md" />
              </td>
              <td>Nunito Sans</td>
              <td>16</td>
              <td>16</td>
              <td>150% </td>
              <td>RegularBold</td>
            </tr>

            <tr>
              <td>
                <BodyXs content="Body Sm" />
              </td>
              <td>Nunito Sans</td>
              <td>14</td>
              <td>14</td>
              <td>150% </td>
              <td>RegularBold</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StyleGuide;

import styles from "./ColorSquare.module.scss";
import BodyLg from "../Typograph/BodyLg";

const ColorSquare = ({ color }) => {
  return (
    <div className={styles.color} key={color.value}>
      <div
        className={styles.square}
        style={{ backgroundColor: color.value }}
      ></div>
      <BodyLg content={color.value}></BodyLg>
    </div>
  );
};

export default ColorSquare;

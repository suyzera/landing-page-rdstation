import styles from "./ColorSquare.module.scss";

const ColorSquare = ({ color }) => {
  return (
    <div className={styles.color} key={color.value}>
      <div
        className={styles.square}
        style={{ backgroundColor: color.value }}
      ></div>
      <span>{color.name}</span>
    </div>
  );
};

export default ColorSquare;

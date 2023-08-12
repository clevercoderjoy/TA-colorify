import styles from "./shape.module.css";
import "./shapeTypes";
import { shapeProps } from "./shapeTypes";

const ShapeComponent = (props: shapeProps) => {
  const { radius = "0%" } = props;
  return (
    <>
      <div style={{ borderRadius: `${radius}` }} className={styles.shape}></div>
    </>
  );
};

export default ShapeComponent;

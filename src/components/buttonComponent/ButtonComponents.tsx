import styles from "./button.module.css";
import { buttonProps } from "./buttonTypes";

const ButtonComponents = (props: buttonProps) => {
  return (
    <>
      <div className={styles.btns}>
        <button style={{ background: props.btn1 }} className={styles.btn}>
          {props.btn1}
        </button>
        <button style={{ background: props.btn2 }} className={styles.btn}>
          {props.btn2}
        </button>
        <button style={{ background: props.btn3 }} className={styles.btn}>
          {props.btn3}
        </button>
      </div>
    </>
  );
};

export default ButtonComponents;

import styles from "./header.module.css";
import { headerProps } from "./headerTypes";

const HeaderComponent = (props: headerProps) => {
  const { heading = "Some Random App" } = props;
  return (
    <>
      <h1 className={styles.header}>{heading}</h1>
    </>
  );
};

export default HeaderComponent;

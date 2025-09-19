import React from "react";
import styles from "./NestedLayout.module.scss";

interface Props {
  children: React.ReactNode;
}
const NestedLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles["header__container"]}>
          <img src="/logo.svg" />
          <div className={styles["header__right"]}>
            <p>¡Compra por este medio!</p>
            <div className={styles["header__right--phone"]}>
              <img src="/icon-phone.svg" />
              <p>(01) 411 6001</p>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default NestedLayout;

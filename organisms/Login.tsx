import React from "react";
import styles from "./Login.module.scss";
import FormLogin from "@/components/FormLogin";
import IconLogo from "@/icons/IconLogo";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <section className={styles["login__container"]}>
            <div className={styles["login__image"]}>
              <img src="/family-login.webp" />
            </div>
            <div className={styles["login__top"]}>
              <span className={styles["login__top--chip"]}>
                Seguro Salud Flexible
              </span>
              <h1>Creado para ti y tu familia</h1>
            </div>
            <FormLogin />
          </section>
          <picture>
            <source
              srcSet="/gradient-purple-mobile.webp"
              media="(max-width: 768px)"
            />
            <img
              src="/gradient-purple.webp"
              className={`${styles["login__gradient"]} ${styles["login__gradient--purple"]}`}
              alt=""
            />
          </picture>
          <picture>
            <source
              srcSet="/gradient-turquoise-mobile.webp"
              media="(max-width: 768px)"
            />
            <img
              src="/gradient-turquoise.webp"
              className={`${styles["login__gradient"]} ${styles["login__gradient--turquoise"]}`}
              alt=""
            />
          </picture>
        </div>
      </div>
      <footer className={styles.footer}>
        <IconLogo fill="#FFFFFF" />
        <div className={styles["footer__divider"]}></div>
        <p>© 2025 RIMAC Seguros y Reaseguros.</p>
      </footer>
    </>
  );
};

export default Login;

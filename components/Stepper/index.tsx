import React from "react";
import styles from "./index.module.scss";

interface Props {
  stepActive: string;
}
const Stepper: React.FC<Props> = ({ stepActive }) => {
  return (
    <>
      <div className={styles.slider}>
        <Step
          step="1"
          label="Planes y coberturas"
          active={stepActive === "1" ? true : false}
        />
        <div
          className={`${styles.dash} ${stepActive === "2" ? styles.step2 : ""}`}
        >
          <div />
          <div />
          <div />
          <div />
        </div>
        <Step
          step="2"
          label="Resumen"
          active={stepActive === "2" ? true : false}
        />
      </div>
      <div className={styles.sliderMobile}>
        <div className={styles["sliderMobile__backButton"]}>
          {svgArrowLeft()}
        </div>
        <p>{stepActive === "1" ? "Paso 1 de 2" : "Paso 2 de 2"}</p>
        <div className={styles["sliderMobile__bar"]}>
          <div
            className={`${styles["sliderMobile__bar--filled"]} ${
              stepActive === "2" ? styles.step2 : ""
            } `}
          />
        </div>
      </div>
    </>
  );
};

const Step: React.FC<{ step: string; label: string; active?: boolean }> = ({
  step,
  label,
  active,
}) => (
  <div className={styles.step}>
    <div className={active ? styles.active : ""}>{step}</div>
    <span className={active ? styles.active : ""}>{label}</span>
  </div>
);

const svgArrowLeft = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.55317 4.99995L5.80942 1.74683L6.69067 2.62808L4.32192 4.99995L6.69067 7.37183L5.80942 8.25308L2.55317 4.99995Z"
      fill="#a9afd9"
    />
  </svg>
);

export default Stepper;

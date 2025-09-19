"use client";
import React from "react";
import Stepper from "@/components/Stepper";
import styles from "./page.module.scss";
import BackButton from "@/components/BackButton";
import { useGlobalContext } from "@/contexts/GlobalProvider";

const PageResume = () => {
  const { state } = useGlobalContext();
  const { user, userApi, planSelected } = state;

  return (
    <div className={styles.container}>
      <Stepper stepActive="2" />
      <div className={styles.section}>
        <BackButton />
        <p>Resumen del seguro </p>
        <div className={styles["section__card"]}>
          <div className={styles["section__card--head"]}>
            <p>Precios calculados para:</p>
            <div>
              <img src="/icon-family.svg" alt="" />
              <p>
                {userApi.name} {userApi.lastName}
              </p>
            </div>
          </div>
          <div className={styles["section__card--divider"]} />
          <div className={styles["section__card--summary"]}>
            <p>Responsable de pago</p>
            <p>DNI: {user.document}</p>
            <p>Celular: {user.phone}</p>
          </div>
          <div className={styles["section__card--summary"]}>
            <p>Plan elegido</p>
            <p>{planSelected?.name}</p>
            <p>
              Costo del Plan: $
              {planSelected?.priceDiscount ?? planSelected?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageResume;

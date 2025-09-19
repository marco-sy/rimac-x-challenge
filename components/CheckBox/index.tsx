import React from "react";
import styles from "./index.module.scss";
import IconCheck from "@/icons/IconCheck";
import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  error?: string;
}
const CheckBox: React.FC<Props> = ({ label, register, name, error }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...register(name)} />
      <div
        className={`${styles["checkbox__icon"]} ${
          error ? styles["checkbox__icon--error"] : ""
        }`}
      >
        <IconCheck />
      </div>
      <p className={`${error ? "error" : ""} `}>{label}</p>
    </label>
  );
};

export default CheckBox;

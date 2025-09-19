import React from "react";
import styles from "./index.module.scss";
import { UseFormRegister } from "react-hook-form";

interface Props {
  error?: string;
  className?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
}
const Input: React.FC<Props> = ({
  error,
  className,
  placeholder,
  name,
  register,
}) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <input placeholder={placeholder} {...register(name)} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;

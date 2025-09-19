import React, { ChangeEvent } from "react";
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  };
  return (
    <div className={`${styles.input} ${className}`}>
      <input
        placeholder={placeholder}
        {...register(name)}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;

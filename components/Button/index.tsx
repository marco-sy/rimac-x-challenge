import React from "react";
import styles from "./index.module.scss";
import { VariantButton } from "@/lib/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}

const Button: React.FC<Props> = ({
  children,
  className = "",
  variant = VariantButton.primary,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className} ${
        variant === VariantButton.primary
          ? styles["button__primary"]
          : styles["button__secondary"]
      } `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

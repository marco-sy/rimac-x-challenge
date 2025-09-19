import React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

interface Props {
  path: string;
}
const BackButton: React.FC<Props> = ({ path }) => {
  const router = useRouter();
  const goBack = () => router.replace(path);

  return (
    <div className={styles.button} onClick={goBack}>
      <div className={styles.circle}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.55317 4.99995L5.80942 1.74683L6.69067 2.62808L4.32192 4.99995L6.69067 7.37183L5.80942 8.25308L2.55317 4.99995Z"
            fill="#4F4FFF"
          />
        </svg>
      </div>
      <p>Volver</p>
    </div>
  );
};

export default BackButton;

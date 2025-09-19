import React from "react";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  srcImg: string;
  title: string;
  description: string;
  active?: boolean;
}
const CardPlan: React.FC<Props> = ({
  srcImg,
  title,
  description,
  active,
  ...props
}) => {
  return (
    <div {...props} className={`${styles.card} ${active ? styles.active : ""}`}>
      <div className={`${styles.circle} ${active ? styles.active : ""}`}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1813 5.11293C15.5607 5.434 15.6081 6.00188 15.287 6.38133L8.687 14.1813C8.52153 14.3769 8.28058 14.4927 8.02451 14.4996C7.76844 14.5066 7.52153 14.4042 7.34564 14.2179L3.94564 10.6179C3.60435 10.2566 3.62063 9.68696 3.98199 9.34567C4.34336 9.00438 4.91297 9.02066 5.25427 9.38202L7.96311 12.2502L13.9129 5.21863C14.234 4.83919 14.8019 4.79187 15.1813 5.11293Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles["card__content"]}>
        <img src={srcImg} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardPlan;

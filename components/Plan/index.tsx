import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { ValueDispatch, VariantButton } from "@/lib/types";
import { useRouter } from "next/navigation";
import { PlanDTO } from "@/application/dtos/plan-dto";
import { useGlobalContext } from "@/contexts/GlobalProvider";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  recommended?: boolean;
  srcIcon: string;
  plan: PlanDTO;
}

const Plan: React.FC<Props> = ({
  recommended = false,
  srcIcon,
  plan,
  ...props
}) => {
  const { dispatch } = useGlobalContext();
  const router = useRouter();

  const selectPlan = () => {
    dispatch({ type: ValueDispatch.selectPlan, value: plan });
    router.replace("/resume");
  };

  const { name, description: descriptions, price, priceDiscount } = plan;

  return (
    <div className={styles.plan} {...props}>
      <div className={styles["chip__wrapper"]}>
        {recommended && <div className={styles.chip}>Plan recomendado</div>}
      </div>
      <div className={styles["plan__head"]}>
        <div>
          <h3>{name}</h3>
          <div className={styles["plan__cost"]}>
            <p className={styles["plan__cost--label"]}>Costo del plan</p>
            {priceDiscount && (
              <p className={styles["plan__cost--price"]}>${price} antes</p>
            )}
            <p className={styles["plan__cost--total"]}>
              ${priceDiscount || price} al mes
            </p>
          </div>
        </div>
        <img src={srcIcon} alt="" />
      </div>
      <div className={styles["plan__divider"]}></div>
      <ul className={styles["plan__descriptions"]}>
        {descriptions.map((description, i) => (
          <li key={i}>{description}</li>
        ))}
      </ul>
      <Button
        onClick={selectPlan}
        variant={VariantButton.secondary}
        className={styles["plan__button"]}
      >
        Seleccionar Plan
      </Button>
    </div>
  );
};

export default Plan;

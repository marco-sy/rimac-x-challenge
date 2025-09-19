"use client";
import React from "react";
import styles from "./page.module.scss";
import BackButton from "@/components/BackButton";
import CardPlan from "@/components/CardPlan";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { PlanApiRepository } from "@/infraestructure/PlanApiRepository";
import { GetPlans } from "@/application/plan/GetPlans";
import { UserApiRepository } from "@/infraestructure/UserApiRepository";
import { User } from "@/domain/models/User";
import { ValueDispatch } from "@/lib/types";
import PlanComponent from "@/components/Plan";
import { PlanDTO } from "@/application/dtos/plan-dto";
import Stepper from "@/components/Stepper";

const PagePlans = () => {
  const { state, dispatch } = useGlobalContext();
  const [indexPlan, setIndexPlan] = React.useState(0);
  const [loadingPlans, setLoadingPlans] = React.useState(false);
  const [plans, setPlans] = React.useState<PlanDTO[]>([]);

  // Initialize repositories
  const planRepository = new PlanApiRepository();
  const userRepository = new UserApiRepository();
  const getPlans = new GetPlans(planRepository);

  const selectPlan = async (index: number) => {
    setIndexPlan(index);
    try {
      setLoadingPlans(true);
      const { birthDay } = state.userApi;
      const plans = await getPlans.execute(birthDay, index);
      setPlans(plans);
    } catch {
    } finally {
      setLoadingPlans(false);
    }
  };

  React.useEffect(() => {
    userRepository
      .getUser()
      .then((userApiResponse: User) =>
        dispatch({ type: ValueDispatch.addUserApi, value: userApiResponse })
      );
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Stepper stepActive="1" />
      <div className={styles.section}>
        <BackButton />
        <div className={styles.plans}>
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className={styles["plans__options"]}>
            <CardPlan
              active={indexPlan === 1 ? true : false}
              onClick={() => selectPlan(1)}
              srcImg="icon-lc-protection.svg"
              title="Para mi"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            />
            <CardPlan
              active={indexPlan === 2 ? true : false}
              onClick={() => selectPlan(2)}
              srcImg="icon-lc-adduser.svg"
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
            />
          </div>
        </div>
        {loadingPlans ? (
          <p>Loading...</p>
        ) : (
          <div className={styles["plans__list"]}>
            {plans.map((plan, i) => {
              const { name, price, description } = plan;
              return (
                <PlanComponent
                  key={i}
                  plan={plan}
                  srcIcon="icon-plan-home.svg"
                  recommended={i == 1 ? true : false}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PagePlans;

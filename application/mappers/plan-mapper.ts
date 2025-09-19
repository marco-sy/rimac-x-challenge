import { Plan } from "@/domain/models/Plan";

export const plansMapperByTypePlan2 = (plans: Plan[]) => {
  return plans.map((plan) => {
    const { price } = plan;
    const priceDiscount = price * 0.95;
    return { ...plan, priceDiscount };
  });
};

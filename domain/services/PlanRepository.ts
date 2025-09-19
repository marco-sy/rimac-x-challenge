import { PlansResponse } from "../models/Plan";

export interface PlanRepository {
  getPlans(): Promise<PlansResponse>;
}

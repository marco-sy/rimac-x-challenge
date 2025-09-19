import { PlansResponse } from "@/domain/models/Plan";
import { PlanRepository } from "@/domain/services/PlanRepository";

export class PlanApiRepository implements PlanRepository {
  async getPlans(): Promise<PlansResponse> {
    const response = await fetch(
      `https://rimac-front-end-challenge.netlify.app/api/plans.json`
    );
    return response.json();
  }
}

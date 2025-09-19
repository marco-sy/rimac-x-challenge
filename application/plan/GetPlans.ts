import { PlanRepository } from "@/domain/services/PlanRepository";
import { getAgeByBirthday } from "@/lib/helpers";
import { plansMapperByTypePlan2 } from "../mappers/plan-mapper";
import { Plan } from "@/domain/models/Plan";
import { PlanDTO } from "../dtos/plan-dto";

export class GetPlans {
  constructor(private planRepository: PlanRepository) {}

  async execute(
    birthDay: string,
    typePlan: number
  ): Promise<Plan[] | PlanDTO[]> {
    const age = getAgeByBirthday(birthDay);
    const plansResponse = await this.planRepository.getPlans();

    let plansFiltered = plansResponse.list.filter((plan) => plan.age > age);

    if (typePlan == 2) {
      plansFiltered = plansMapperByTypePlan2(plansFiltered);
    }

    return plansFiltered;
  }
}

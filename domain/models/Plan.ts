export interface PlansResponse {
  list: Plan[];
}

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

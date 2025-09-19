import { User, UserLoginDTO } from "../models/User";

export interface UserRepository {
  loginUser(body: UserLoginDTO): Promise<UserLoginDTO>;

  getUser(): Promise<User>;
}

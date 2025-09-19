import { User, UserLoginDTO } from "@/domain/models/User";
import { UserRepository } from "@/domain/services/UserRepository";

export class UserApiRepository implements UserRepository {
  async loginUser(body: UserLoginDTO) {
    const response = new Promise((resolve, reject) =>
      setTimeout(() => {
        const { document, phone, type_document } = body;
        if (document == "76661335" && phone == "918322123") {
          const response = {
            type_document,
            document,
            phone,
          };
          resolve(response);
        } else reject(false);
      }, 1500)
    ) as Promise<UserLoginDTO>;

    return response;
  }

  async getUser() {
    const response = await fetch(
      `https://rimac-front-end-challenge.netlify.app/api/user.json`
    );
    return response.json();
  }
}

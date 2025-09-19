export interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface UserLoginDTO {
  type_document: string;
  document: string;
  phone: string;
}

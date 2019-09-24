interface user {
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
}
export class User {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  constructor(obj: user) {
    this.name = obj.name;
    this.email = obj.email;
    this.phoneNumber = obj.phoneNumber;
    this.password = obj.password;
  }
}
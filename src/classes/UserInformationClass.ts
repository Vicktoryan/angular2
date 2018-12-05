import { UserInformation } from '../app/interfaces/UserInformation';
export class UserInformationClass implements UserInformation {
  private userId: string;
  private firstName: string;
  private lastName: string;
  private userFullName: string;
  private rules: string[];
  constructor() {}
}

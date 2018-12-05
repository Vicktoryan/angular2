import { UserInformation } from '../app/interfaces/UserInformation';
export class UserInformationClass implements UserInformation {
  public userId: string;
  public firstName: string;
  public lastName: string;
  public userFullName: string;
  public rules: string[];
  constructor() {}
}

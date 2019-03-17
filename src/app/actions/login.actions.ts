import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[Login] Login'
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
}

export type CourseActions = Login;

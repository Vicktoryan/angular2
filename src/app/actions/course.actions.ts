import { Action } from '@ngrx/store';

export enum CourseActionTypes {
  LoadCourse = '[LoadItem] Load item',
  AddCourse = '[AddItem] Load item'
}

export class LoadCourse implements Action {
  readonly type = CourseActionTypes.LoadCourse;
}

export class AddCourse implements Action {
  readonly type = CourseActionTypes.AddCourse;
}

export type CourseActions = LoadCourse | AddCourse;

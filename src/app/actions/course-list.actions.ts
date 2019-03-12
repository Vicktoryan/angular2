import { Action } from '@ngrx/store';

export enum CourseListActionTypes {
  LoadCourseLists = '[LoadList] Load list',
  AddCourseLists = '[LoadList] Add list'
}

export class LoadCourseLists implements Action {
  readonly type = CourseListActionTypes.LoadCourseLists;
}

export class AddCourseLists implements Action {
  readonly type = CourseListActionTypes.AddCourseLists;
}


export type CourseListActions = LoadCourseLists | AddCourseLists;

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCourseList from './course-list.reducer';
import * as fromCourse from './course.reducer';
import * as user from './login.reducer';

export interface State {
  courseList: fromCourseList.State;
  course: fromCourse.State,
  user: user.State
}

export const reducers: ActionReducerMap<State> = {
  courseList: fromCourseList.reducer,
  course: fromCourse.reducer,
  user: user.reducer
};

export const selectListStore = (state: State) => state.courseList;

export const getListObject = createSelector(
  selectListStore,
  fromCourseList.getList
);

export const selectDetailStore = (state: State) => state.course;

export const getDetailObject = createSelector(
  selectDetailStore,
  fromCourse.getItem
);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

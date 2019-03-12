import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCourseList from './course-list.reducer';

export interface State {
  courseList: fromCourseList.State;
}

export const reducers: ActionReducerMap<State> = {

  courseList: fromCourseList.reducer,
};

export const selectListStore = (state: State) => state.courseList;

export const getListObject = createSelector(
  selectListStore,
  fromCourseList.getList
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

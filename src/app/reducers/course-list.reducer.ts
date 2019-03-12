import { Action } from '@ngrx/store';
import { CourseItem } from '../interfaces/CourseItem';
import { CourseListActionTypes } from '../actions/course-list.actions';

export interface State {
  itemList: CourseItem[]
}

export const initialState: State = {
  itemList: []
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case CourseListActionTypes.LoadCourseLists: {
      state.itemList = action.itemList;

      return { ...state, itemList: state.itemList }
    }
    case CourseListActionTypes.AddCourseLists: {
      state.itemList.push(...action.itemList);

      return { ...state, itemList: state.itemList }
    }
    default:
      return state;
  }
}

export const getList = (state: State): CourseItem[] => {
  return state.itemList;
};

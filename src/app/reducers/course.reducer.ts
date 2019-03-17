import { CourseItem } from '../interfaces/CourseItem';
import { CourseActionTypes } from '../actions/course.actions';

export interface State {
  item: CourseItem
}

export const initialState: State = {
  item: {
    id: null,
    name: '',
    description: '',
    createDate: new Date(),
    authors: []
  }
};

export function reducer(state = initialState, action: any): State {
  console.log(1);
  switch (action.type) {
    case CourseActionTypes.LoadCourse: {
      state.item = action.item;

      return { ...state, item: state.item}
    }
    case CourseActionTypes.AddCourse: {
      return { ...state, item: initialState.item}
    }
    default:
      return state;
  }
}

export const getItem = (state: State): CourseItem => {
  return state.item;
};

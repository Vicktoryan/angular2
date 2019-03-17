import { CourseItem } from '../interfaces/CourseItem';
import { LoginActionTypes } from '../actions/login.actions';
import { UserInformation } from '../interfaces/UserInformation';

export interface State {
  user: UserInformation
}

export const initialState: State = {
  user: {
    userId: null,
    firstName: '',
    lastName: '',
    userFullName: '',
    rules: []
  }
};

export function reducer(state = initialState, action: any): State {
  console.log(1);
  switch (action.type) {
    case LoginActionTypes.Login: {
      state.user = action.userInformation;

      return { ...state, user: state.user }
    }
    default:
      return state;
  }
}

import {IUser} from '../../../interfaces/auth/IUser';
import {IAction} from '../../../redux/action.types';

const initialState:IUser = {
  username: '',
  isFirstTime: false,
  isLoggedIn: false,
};

export const UserReducer = (state = initialState, action: IAction<IUser>) => {
  switch (action.type) {
    case 'user':
      return {...state, [action.type]: action.payload};
    default:
      return state;
  }
};

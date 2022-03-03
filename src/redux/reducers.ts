import {combineReducers} from 'redux';
import {appLoadingReducer} from './appLoading/appLoading.redcr';
import {IRootState} from './state.types';
import {UserReducer} from './../modules/auth/redux/user.reducer';

const loader:Record<keyof IRootState, any> = {
  appLoading: appLoadingReducer,
  user: UserReducer,
};

export const combinedReducer = combineReducers(loader);

import {IUser} from '../interfaces/auth/IUser';
import {IAppLoadingState} from './appLoading/appLoading.state';

export interface IRootState {
  appLoading: IAppLoadingState;
  user: IUser;
}

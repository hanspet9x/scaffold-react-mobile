import {IUser} from '../../../interfaces/auth/IUser';
import {useAppSelector, useAppDispatch} from
  '../../../redux/hooks/use.dispatch.selector';


export const useUser = () => {
  const user = useAppSelector<IUser>('user');
  const info: IUser = {
    username: user.username,
    isLoggedIn: user.username.length > 0,
    isFirstTime: user.isFirstTime,
  };
  const dispatch = useAppDispatch<IUser>();
  const setUser = (user: IUser) => {
    dispatch({type: 'user', payload: user});
  };

  return {info, setUser};
};

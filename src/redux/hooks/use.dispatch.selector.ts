import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {IAction} from '../action.types';
import {IRootState} from '../state.types';

export const useAppSelector = <T>(key: keyof IRootState) => {
  return useSelector((state: IRootState) => {
    const nState = state[key] as unknown;
    if (nState === undefined) {
      throw new Error(`${key} is not mounted on the state.`);
    }
    return nState as T;
  });
};

export const useAppDispatch = <T>() => {
  const dispatch = useDispatch();
  return (action: IAction<T>) => dispatch(action);
};

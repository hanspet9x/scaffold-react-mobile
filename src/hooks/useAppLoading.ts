import {IAppLoadingState} from '../redux/appLoading/appLoading.state';
import {useAppDispatch} from '../redux/hooks/use.dispatch.selector';

export const useAppLoading = () => {
  const dispatch = useAppDispatch<IAppLoadingState>();
  const set = (payload: IAppLoadingState) => {
    dispatch({type: 'appLoading', payload});
  };
  const onShow = (message: string) => set({toggle: true, message});
  const onHide = () => set({toggle: false, message: ''});
  return {onShow, onHide};
};

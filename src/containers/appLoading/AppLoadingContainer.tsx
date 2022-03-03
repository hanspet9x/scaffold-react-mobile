import React from 'react';
import AppLoading from '../../components/appLoading.tsx/AppLoading';
import {IAppLoadingState} from '../../redux/appLoading/appLoading.state';
import {useAppSelector} from '../../redux/hooks/use.dispatch.selector';

const AppLoadingContainer = () => {
  const loading = useAppSelector<IAppLoadingState>('appLoading');
  return (
    <AppLoading show={loading.toggle} message={loading.message} />
  );
};

export default AppLoadingContainer;

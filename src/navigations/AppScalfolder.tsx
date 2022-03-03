import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useOnAppRender} from '../hooks/useCacheAssets';
import {useUser} from '../modules/auth/hooks/useUser';
import AppNavigation from './AppNavigation';

const AppScalfolder = () => {
  const loaded = useOnAppRender();
  const {info} = useUser();

  return loaded ?
  <AppNavigation isReady={loaded} userInfo={info} /> :
  <ActivityIndicator animating={true} color={Colors.transparent} />;
};

export default AppScalfolder;

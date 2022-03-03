import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {appTheme} from './src/styles/paperTheme';
import {navigationRef} from './src/navigations/navigations';
import {registerRootComponent} from 'expo';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppLoadingContainer from
  './src/containers/appLoading/AppLoadingContainer';
import AppScalfolder from './src/navigations/AppScalfolder';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={appTheme}>
        <AppLoadingContainer />
        <NavigationContainer ref={navigationRef}>
          <AppScalfolder />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
registerRootComponent(App);


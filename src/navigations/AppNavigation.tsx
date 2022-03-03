// import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stacks';
import {fontFamily} from '../assets/assets';
import DialogContainer from '../containers/dialog/DialogContainer';
import LoginView from '../modules/auth/views/login/LoginView';
import {IAppNavigationProps} from './navigation.types';
import Advert from '../modules/advert/views/Advert';
import {useTheme} from 'react-native-paper';


const AppNavigation = (props: IAppNavigationProps) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {colors} = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{
        contentStyle: {marginHorizontal: 10,
          backgroundColor: colors.background},
        headerTitleStyle: {fontFamily: fontFamily.bold}}}>
        {props.userInfo.isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name='Advert' component={Advert} />
          </Stack.Group>
        ):(
          <Stack.Group>
            {props.userInfo.isFirstTime ?
            <Stack.Screen name='Advert' component={Advert} /> :
            <Stack.Group>
              <Stack.Screen name='Login' component={LoginView} />
            </Stack.Group>
            }
          </Stack.Group>
        )}
      </Stack.Group>
      <Stack.Group screenOptions={{
        presentation: 'transparentModal',
        headerShown: false,
      }}>
        <Stack.Screen name='Dialog' component={DialogContainer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;

// const styles = StyleSheet.create({});

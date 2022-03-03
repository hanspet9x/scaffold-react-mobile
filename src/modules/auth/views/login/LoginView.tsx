import React from 'react';
import {RootScreenStackProps} from '../../../../navigations/stacks';
import LoginContainer from '../../containers/login/LoginContainer';

type Props = RootScreenStackProps<'Login'>;


const LoginView = ({navigation}: Props) => {
  const gotoRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <LoginContainer onLogin={gotoRegister} />
  );
};

export default LoginView;

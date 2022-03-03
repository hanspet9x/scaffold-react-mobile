import {View} from 'react-native';
import React from 'react';
import {ILogin} from './login.types';
import {useInputChange} from '../../../../hooks/useInputChange';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import AppTextInput from '../../../../components/textInputs/AppTextInput';

type Props ={
  onLogin():void;
}
const LoginContainer = (props: Props) => {
  const {input, set} = useInputChange<ILogin>();
  return (
    <View>
      <AppTextInput
        autoComplete={true}
        label="Email"
        value={input?.email}
        onChangeText={(text: string) => set('email', text)}
      />
      <AppTextInput
        autoComplete={true}
        label="Password"
        value={input?.email}
        secureTextEntry={true}
        onChangeText={(text: string) => set('password', text)}
      />
      <PrimaryButton
        accessibilityLabel='login'
        onPress={props.onLogin}>Login</PrimaryButton>
    </View>
  );
};

export default LoginContainer;

import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

type Props = React.ComponentProps<typeof TextInput>

const AppTextInput = (props: Props) => {
  const nProps = {...props};
  nProps.style = Object.assign({}, nProps.style, styles.comp);
  return (
    <TextInput {...nProps} />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  comp: {
    marginBottom: 10,
  },
});

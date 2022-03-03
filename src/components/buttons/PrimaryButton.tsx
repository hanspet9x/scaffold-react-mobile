import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {FC} from 'react';

type Props = React.ComponentProps<typeof Button>;

const PrimaryButton: FC<Props>= (props) => {
  return (
    <Button style={styles.button}
      mode='contained'
      uppercase={false} {...props}>{props.children}</Button>
  );
};


export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    padding: 5,
  },
});

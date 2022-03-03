import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {FC} from 'react';

type Props = React.ComponentProps<typeof Button>;

const OptionalButton: FC<Props>= (props) => {
  return (
    <Button style={styles.button}
      uppercase={false} {...props}>{props.children}</Button>
  );
};


export default OptionalButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
  },
});

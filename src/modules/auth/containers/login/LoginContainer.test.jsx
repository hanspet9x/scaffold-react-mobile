import {render, fireEvent} from '@testing-library/react-native';
import LoginContainer from './LoginContainer';

test('Submitted login form should trigger callback', () => {
  const submitFunc = jest.mock();

  const {getAllByA11yLabel} = render(<LoginContainer onLogin={submitFunc} />);

  fireEvent.press(getAllByA11yLabel('login'));

  expect(submitFunc).toHaveBeenCalled();
});

import * as React from 'react';
import renderer from 'react-test-renderer';

import {Button, Props} from './';

jest.mock('./styles', () => ({
  Container: 'Container',
  ButtonText: 'ButtonText',
}));

const initialProps = {
  text: 'Hello Button',
  onPress: () => {},
};

const testComponent = (props?: Props) => {
  return renderer.create(<Button {...initialProps} {...props} />);
};

describe('<Button />', () => {
  it('renders correctly with default props', () => {
    const tree = testComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom text', () => {
    const tree = testComponent({
      ...initialProps,
      text: 'Some other text',
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

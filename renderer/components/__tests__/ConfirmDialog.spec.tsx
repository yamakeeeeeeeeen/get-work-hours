import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmDialog } from '~/components/ConfirmDialog';

test('ConfirmDialog', () => {
  const propsFunc = () => console.log();

  const component = shallow(<ConfirmDialog isOpen callback={propsFunc} body="" setClose={propsFunc} />);
  expect(component).toMatchSnapshot();
});

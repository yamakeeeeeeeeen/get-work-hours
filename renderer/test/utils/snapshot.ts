import { ReactElement } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

export const snapshot = (component: ReactElement) => {
  const wrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
};

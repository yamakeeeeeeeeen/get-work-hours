import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component as TimePickerSet, ComponentProps as Props } from '~/components/TimePickerSet';
import { ORDINAL_NUMBERS } from '~/constants';

const setOpen = jest.fn();
const setClose = jest.fn();
const errors = jest.fn();
const getValues = jest.fn();
const register = jest.fn();
const handleRemove = jest.fn();
const props: Props = {
  index: 0,
  value: { start: '09:00', end: '18:00' },
  isDisabled: true,
  isOpen: true,
  setOpen,
  setClose, // propsで渡すのみ
  errors,
  getValues,
  register,
  handleRemove, // propsで渡すのみ
};
const wrapper = shallow(<TimePickerSet {...props} />);

describe('<TimePickerSet />', () => {
  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('times should be displayed as "first"', () => {
    expect(wrapper.find('.times').text()).toBe(ORDINAL_NUMBERS[props.index + 1]);
  });

  it('setOpen should be called', () => {
    wrapper.find('.delete-btn').simulate('click');
    expect(setOpen).toHaveBeenCalled();
  });
});

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component as InputForm, ComponentProps as InputFormProps } from '~/components/InputForm';

const setClose = jest.fn();
const handleAppend = jest.fn();
const handleConfirm = jest.fn();
const handleReset = jest.fn();
const handleSubmit = jest.fn();
const props: InputFormProps = {
  fields: [{ start: '09:00', end: '18:00', id: 'test-id' }],
  remove: jest.fn(), // propsで渡すのみ
  result: { breakTime: '01:00', uptime: '08:00' }, // propsで渡すのみ
  isDisabled: true,
  isOpen: true,
  setClose, // propsで渡すのみ
  handleAppend,
  handleConfirm, // handleConfirmでラップするからテストは不要
  handleReset,
  handleSubmit,
};
const wrapper = shallow(<InputForm {...props} />);

describe('<InputForm />', () => {
  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('There should be one TimePickerSet', () => {
    expect(wrapper.find('TimePickerSet').length).toBe(1);
  });

  it('handleAppend should be called', () => {
    wrapper.find('.append-btn').simulate('click');
    expect(handleAppend).toHaveBeenCalled();
  });

  it('handleSubmit(handleConfirm) should be called', () => {
    wrapper.find('.confirm-btn').simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('handleReset should be called', () => {
    wrapper.find('.reset-btn').simulate('click');
    expect(handleReset).toHaveBeenCalled();
  });
});

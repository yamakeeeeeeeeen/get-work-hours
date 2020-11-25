import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Props, ResultDialog } from '~/components/ResultDialog';

const setClose = jest.fn();
const props: Props = {
  isOpen: true,
  result: { breakTime: '01:00', uptime: '08:00' },
  setClose,
};
const wrapper = shallow(<ResultDialog {...props} />);

describe('<ResultDialog />', () => {
  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('uptime should be displayed as "08:00"', () => {
    expect(wrapper.find('.uptime').text()).toBe(props.result.uptime);
  });

  it('break time should be displayed as "01:00"', () => {
    expect(wrapper.find('.break-time').text()).toBe(props.result.breakTime);
  });

  it('setClose should be called', () => {
    wrapper.find('.close-btn').simulate('click');
    expect(setClose).toHaveBeenCalled();
  });
});

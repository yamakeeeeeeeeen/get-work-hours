import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ConfirmDialog, Props } from '~/components/ConfirmDialog';

describe('<ConfirmDialog />', () => {
  const body = 'test body';
  const callback = jest.fn();
  const setClose = jest.fn();
  const props: Props = {
    isOpen: true,
    body,
    callback,
    setClose,
  };
  const wrapper = shallow(<ConfirmDialog {...props} />);

  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('The body should be displayed as "test body"', () => {
    expect(wrapper.find('.body-text').text()).toBe(body);
  });

  it('The callback should be called', () => {
    wrapper.find('.apply-btn').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('The setClose should be called', () => {
    wrapper.find('.cancel-btn').simulate('click');
    expect(setClose).toHaveBeenCalled();
  });
});

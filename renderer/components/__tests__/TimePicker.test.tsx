import { shallow } from 'enzyme';
import { TimePicker } from '~/components/TimePicker';
import toJson from 'enzyme-to-json';

const wrapper = shallow(<TimePicker />);

// NOTE: これ以上のテストは必要ない
describe('<TimePicker />', () => {
  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

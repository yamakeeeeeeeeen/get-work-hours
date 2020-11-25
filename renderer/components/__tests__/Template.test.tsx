import { shallow } from 'enzyme';
import { Props, Template } from '~/components/Template';
import toJson from 'enzyme-to-json';

const props: Pick<Props, 'title'> = {
  title: 'title: Template test',
};
const childrenText = 'children: Template test';
const wrapper = shallow(
  <Template {...props}>
    <p>{childrenText}</p>
  </Template>,
);

describe('<Template />', () => {
  it('snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('children should be displayed as "children: Template test"', () => {
    expect(wrapper.find('p').text()).toBe(childrenText);
  });

  it('title should be displayed as "title: Template test"', () => {
    expect(wrapper.find('title').text()).toBe(props.title);
  });

  it('title should be displayed default', () => {
    const withoutTitlePropsWrapper = shallow(<Template>without title props</Template>);
    expect(withoutTitlePropsWrapper.find('title').text()).toBe('This is the default title');
  });
});

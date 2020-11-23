import { Template, Props } from '~/components/Template';
import { snapshot } from '~/test/utils';

const props: Pick<Props, 'title'> = {
  title: 'title: Template test',
};

describe('<Template />', () => {
  it('snapshot', () => {
    snapshot(
      <Template {...props}>
        <p>children: Template test</p>
      </Template>,
    );
  });
});

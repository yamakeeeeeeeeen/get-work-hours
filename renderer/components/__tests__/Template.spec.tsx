import { Template, Props } from '~/components/Template';
import { snapshot } from '~/test/utils';

test('<Template />', () => {
  const props: Pick<Props, 'title'> = {
    title: 'title: Template test',
  };

  snapshot(
    <Template {...props}>
      <p>children: Template test</p>
    </Template>,
  );
});

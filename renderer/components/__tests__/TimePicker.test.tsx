import { TimePicker } from '~/components/TimePicker';
import { snapshot } from '~/test/utils';

describe('<TimePicker />', () => {
  it('snapshot', () => {
    snapshot(<TimePicker />);
  });
});

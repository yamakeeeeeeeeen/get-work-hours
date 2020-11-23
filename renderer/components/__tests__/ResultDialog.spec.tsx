import { ResultDialog, Props } from '~/components/ResultDialog';
import { snapshot } from '~/test/utils';

const mockFn = jest.fn();
const props: Props = {
  isOpen: true,
  result: { breakTime: '01:00', uptime: '08:00' },
  setClose: mockFn,
};

describe('<ResultDialog />', () => {
  it('snapshot', () => {
    snapshot(<ResultDialog {...props} />);
  });
});

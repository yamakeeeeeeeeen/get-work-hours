import { ConfirmDialog, Props } from '~/components/ConfirmDialog';
import { snapshot } from '~/test/utils';

const mockFn = jest.fn();
const props: Props = {
  isOpen: true,
  body: '',
  callback: mockFn,
  setClose: mockFn,
};

describe('<ConfirmDialog />', () => {
  it('snapshot', () => {
    snapshot(<ConfirmDialog {...props} />);
  });
});

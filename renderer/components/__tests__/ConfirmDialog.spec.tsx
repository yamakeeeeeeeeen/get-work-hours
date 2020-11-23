import { ConfirmDialog, Props } from '~/components/ConfirmDialog';
import { snapshot } from '~/test/utils';

test('<ConfirmDialog />', () => {
  const mockFn = jest.fn();
  const props: Props = {
    isOpen: true,
    body: '',
    callback: mockFn,
    setClose: mockFn,
  };

  snapshot(<ConfirmDialog {...props} />);
});

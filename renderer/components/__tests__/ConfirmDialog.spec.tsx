import { ConfirmDialog } from '~/components/ConfirmDialog';
import { snapshot } from '~/test/utils';

test('<ConfirmDialog />', () => {
  const props = {
    isOpen: true,
    callback: jest.fn(),
    body: '',
    setClose: jest.fn(),
  };

  snapshot(<ConfirmDialog {...props} />);
});

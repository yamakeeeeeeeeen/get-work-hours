import { Component as InputForm, ComponentProps as InputFormProps } from '~/components/InputForm';
import { snapshot } from '~/test/utils';

const mockFn = jest.fn();
const props: InputFormProps = {
  fields: [],
  remove: mockFn,
  result: { breakTime: '01:00', uptime: '08:00' },
  isDisabled: true,
  isOpen: true,
  setClose: mockFn,
  handleAppend: mockFn,
  handleConfirm: mockFn,
  handleReset: mockFn,
  handleSubmit: mockFn,
};

describe('<InputForm />', () => {
  it('snapshot', () => {
    snapshot(<InputForm {...props} />);
  });
});

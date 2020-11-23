import { Component as InputForm, ComponentProps as InputFormProps } from '~/components/InputForm';
import { snapshot } from '~/test/utils';

test('<InputForm />', () => {
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

  snapshot(<InputForm {...props} />);
});

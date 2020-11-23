import { Component as TimePickerSet, ComponentProps as Props } from '~/components/TimePickerSet';
import { snapshot } from '~/test/utils';

test('<TimePickerSet />', () => {
  const mockFn = jest.fn();
  const props: Props = {
    index: 0,
    value: { start: '09:00', end: '18:00' },
    isDisabled: true,
    isOpen: true,
    setOpen: mockFn,
    setClose: mockFn,
    errors: mockFn,
    getValues: mockFn,
    register: mockFn,
    handleRemove: mockFn,
  };
  snapshot(<TimePickerSet {...props} />);
});

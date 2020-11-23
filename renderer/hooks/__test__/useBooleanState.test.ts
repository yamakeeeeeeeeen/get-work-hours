import { renderHook, act } from '@testing-library/react-hooks';
import { useBooleanState } from '~/hooks';

it('useBooleanState', () => {
  const { result } = renderHook(() => useBooleanState(false));

  // initial state
  expect(result.current[0]).toBe(false);

  // setTrue
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);

  // setFalse
  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(false);
});

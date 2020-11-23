import { renderHook, act } from '@testing-library/react-hooks';
import { useBooleanState } from '~/hooks';

it('useBooleanState', () => {
  const { result } = renderHook(() => useBooleanState(false));
  const setTrue = result.current[1];
  const setFalse = result.current[2];

  // initial state
  expect(result.current[0]).toBe(false);

  // setTrue
  act(() => {
    setTrue();
  });
  expect(result.current[0]).toBe(true);

  // setFalse
  act(() => {
    setFalse();
  });
  expect(result.current[0]).toBe(false);
});

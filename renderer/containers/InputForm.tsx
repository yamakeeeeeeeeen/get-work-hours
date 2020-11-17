import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Component } from '~/components/InputForm';
import { ComponentProps, Inputs } from '~/pages';
import useBooleanState from '~/hooks/useBooleanState';
import { getWorkingTime } from '~/utils/getWorkingTime';

export type Props = ComponentProps;

type Time = { hour: number; minute: number };
const INITIAL_TIME: Time = {
  hour: 0,
  minute: 0,
};

export const InputForm: FC<Props> = memo(({ append, ...props }) => {
  const { formState, handleSubmit, reset } = useFormContext();
  const { isDirty } = formState;
  const [isOpen, setOpen, setClose] = useBooleanState(false);
  const [uptime, setUptime] = useState<Time>(INITIAL_TIME);
  const [breakTime, setBreakTime] = useState<Time>(INITIAL_TIME);

  const result = useMemo(
    () => `
    稼働時間は${uptime.hour}時間${uptime.minute}分です。
    休憩時間は${breakTime.hour}時間${breakTime.minute}分です。
  `,
    [breakTime.hour, breakTime.minute, uptime.hour, uptime.minute],
  );

  const handleAppend = useCallback(() => {
    append({ start: '00:00', end: '00:00' });
  }, [append]);

  const handleConfirm = useCallback(
    (val: Inputs) => {
      const workTimes = val.workTimes;
      const data = getWorkingTime(workTimes);

      setUptime(data.uptime);
      setBreakTime(data.breakTime);
      setOpen();
    },
    [setOpen],
  );

  const handleReset = useCallback(() => {
    reset({
      workTimes: [
        {
          start: '09:00',
          end: '10:00',
        },
      ],
    });
  }, [reset]);

  return (
    <Component
      {...props}
      result={result}
      isDisabled={isDirty}
      isOpen={isOpen}
      setClose={setClose}
      handleAppend={handleAppend}
      handleConfirm={handleConfirm}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
    />
  );
});

InputForm.displayName = 'InputForm';

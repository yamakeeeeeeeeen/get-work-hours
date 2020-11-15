import { FC, useCallback, useMemo, useState } from 'react';
import { useFormContext, UseFieldArrayMethods } from 'react-hook-form';
import { Component } from '~/components/Presenter/InputForm';
import { Inputs } from '~/pages';
import useBooleanState from '~/hooks/useBooleanState';
import { getWorkingTime } from '~/utils/getWorkingTime';

type Props = {
  fields: UseFieldArrayMethods['fields'];
  append: UseFieldArrayMethods['append'];
  remove: UseFieldArrayMethods['remove'];
};

type Time = { hour: number; minute: number };
const INITIAL_TIME: Time = {
  hour: 0,
  minute: 0,
};

export const InputForm: FC<Props> = ({ fields, append, remove }) => {
  const { handleSubmit } = useFormContext();
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

  return (
    <Component
      fields={fields}
      remove={remove}
      result={result}
      isOpen={isOpen}
      setClose={setClose}
      handleAppend={handleAppend}
      handleConfirm={handleConfirm}
      handleSubmit={handleSubmit}
    />
  );
};

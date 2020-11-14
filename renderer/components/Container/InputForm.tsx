import { FC, useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Component } from '~/components/Presenter/InputForm';
import { Append, Fields, Remove } from '~/@types/ReactHookForm';
import { Inputs } from '~/pages';
import useBooleanState from '~/hooks/useBooleanState';
import { getUptimeAndBreakTime } from '~/utils/getUptimeAndBreakTime';
import { calcTime } from '~/utils/calcTime';

type Props = {
  fields: Fields;
  append: Append;
  remove: Remove;
};

type Time = { hour: number; minute: number };
const INITIAL_TIME: Time = {
  hour: 0,
  minute: 0,
};

export const InputForm: FC<Props> = ({ fields, append, remove }) => {
  const { getValues, handleSubmit } = useFormContext();
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
    const values = getValues();
    const workTimes = values.workTimes;
    const lastWorkTime = workTimes[workTimes.length - 1];
    const nextTime = calcTime(lastWorkTime.start, lastWorkTime.end);
    console.log('nextTime', nextTime);
    append({ start: '12:00', end: '12:00' });
  }, [append, getValues]);
  const handleConfirm = useCallback(
    (val: Inputs) => {
      const workTimes = val.workTimes;
      const data = getUptimeAndBreakTime(workTimes);
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

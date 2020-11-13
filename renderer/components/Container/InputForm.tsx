import { FC, useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Component } from '~/components/Presenter/InputForm';
import { Append, Fields, Remove } from '~/@types/ReactHookForm';
import { Inputs } from '~/pages';
import useBooleanState from '~/hooks/useBooleanState';

type Props = {
  fields: Fields;
  append: Append;
  remove: Remove;
};

export const InputForm: FC<Props> = ({ fields, append, remove }) => {
  const { handleSubmit } = useFormContext();
  const [isOpen, setOpen, setClose] = useBooleanState(false);
  const [workHours, setWorkHours] = useState<number>(0);
  const [workMinutes, setWorkMinutes] = useState<number>(0);

  const result = `稼働時間は${workHours}時間${workMinutes}分です`;

  const handleAppend = useCallback(() => {
    append({ start: '12:00', end: '12:00' });
  }, [append]);
  const handleConfirm = useCallback(
    (val: Inputs) => {
      setOpen();
      const workTimes = val.workTimes;
      console.log('workTimes', workTimes);
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

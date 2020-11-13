import { FC, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Component } from '~/components/Presenter/InputForm';
import { Append, Fields, Remove } from '~/@types/ReactHookForm';

type Props = {
  fields: Fields;
  append: Append;
  remove: Remove;
};

export const InputForm: FC<Props> = ({ fields, append, remove }) => {
  const { handleSubmit } = useFormContext();

  const handleAppend = useCallback(() => {
    append({ start: '12:00', end: '12:00' });
  }, [append]);
  const handleConfirm = useCallback((val) => {
    console.log('val', val);
  }, []);

  return (
    <Component
      fields={fields}
      remove={remove}
      handleAppend={handleAppend}
      handleConfirm={handleConfirm}
      handleSubmit={handleSubmit}
    />
  );
};

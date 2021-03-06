import { FC, memo, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ComponentProps } from '~/components/InputForm';
import { Component } from '~/components/TimePickerSet';
import { useBooleanState } from '~/hooks';

export type Props = Pick<ComponentProps, 'fields' | 'remove'> & {
  index: number;
  value: {
    start: string;
    end: string;
  };
};

export const TimePickerSet: FC<Props> = memo(({ fields, remove, ...props }) => {
  const { errors, getValues, register } = useFormContext();

  const isDisabled = useMemo<boolean>(() => fields.length === 1, [fields.length]);
  const [isOpen, setOpen, setClose] = useBooleanState(false);

  const handleRemove = useCallback(() => {
    remove(props.index);
    setClose();
  }, [props.index, remove, setClose]);

  return (
    <Component
      {...props}
      isDisabled={isDisabled}
      isOpen={isOpen}
      setOpen={setOpen}
      setClose={setClose}
      errors={errors}
      getValues={getValues}
      register={register}
      handleRemove={handleRemove}
    />
  );
});

TimePickerSet.displayName = 'TimePickerSet';

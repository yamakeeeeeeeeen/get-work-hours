import { FC, memo, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Fields, Remove } from '~/@types/ReactHookForm';
import { Component } from '~/components/Presenter/TimePickerSet';
import useBooleanState from '~/hooks/useBooleanState';

type Props = {
  index: number;
  value: {
    start: string;
    end: string;
  };
  fields: Fields;
  remove: Remove;
};

export const TimePickerSet: FC<Props> = memo(({ fields, remove, ...props }) => {
  const { register } = useFormContext();

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
      register={register}
      handleRemove={handleRemove}
    />
  );
});

TimePickerSet.displayName = 'TimePickerSet';

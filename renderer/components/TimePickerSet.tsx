import { FC, memo, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { TimePicker } from '~/components/TimePicker';
import { Fields, Register, Remove } from '~/@types/ReactHookForm';
import { ConfirmDialog } from '~/components/ConfirmDialog';
import useBooleanState from '~/hooks/useBooleanState';

type ComponentProps = {
  index: number;
  value: {
    start: string;
    end: string;
  };
  isDisabled: boolean;
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  register: Register;
  handleRemove: () => void;
};

const Component: FC<ComponentProps> = memo(
  ({ index, value, isDisabled, isOpen, setOpen, setClose, register, handleRemove }) => {
    return (
      <>
        <Box display="flex" alignItems="center" mb={3}>
          <Typography>着席{index + 1}回目</Typography>
          <TimePicker
            name={`workTimes[${index}].start`}
            label="着席"
            defaultValue={value.start}
            inputRef={register()}
          />
          <Typography>~</Typography>
          <TimePicker name={`workTimes[${index}].end`} label="離席" defaultValue={value.end} inputRef={register()} />
          <Button variant="contained" color="secondary" disabled={isDisabled} onClick={setOpen}>
            削除
          </Button>
        </Box>
        <ConfirmDialog isOpen={isOpen} setClose={setClose} body="削除してもよろしいですか？" callback={handleRemove} />
      </>
    );
  },
);
Component.displayName = 'Component';

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

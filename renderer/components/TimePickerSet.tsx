import { FC, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { TimePicker } from '~/components/TimePicker';
import { Fields, Register, Remove } from '~/@types/ReactHookForm';

type ComponentProps = {
  index: number;
  isDisabled: boolean;
  register: Register;
  handleRemove: () => void;
};

const Component: FC<ComponentProps> = ({ index, isDisabled, register, handleRemove }) => {
  return (
    <Box display="flex" alignItems="center" mb={3}>
      <Typography>着席{index + 1}回目</Typography>
      <TimePicker name={`workTimes[${index}].start`} label="着席" inputRef={register()} />
      <Typography>~</Typography>
      <TimePicker name={`workTimes[${index}].end`} label="離席" inputRef={register()} />
      <Button variant="contained" color="secondary" disabled={isDisabled} onClick={handleRemove}>
        削除
      </Button>
    </Box>
  );
};

type Props = {
  index: number;
  fields: Fields;
  remove: Remove;
};

export const TimePickerSet: FC<Props> = ({ index, fields, remove }) => {
  const { register } = useFormContext();

  const isDisabled = useMemo<boolean>(() => fields.length === 1, [fields.length]);

  const handleRemove = useCallback(() => {
    remove(index);
  }, [index, remove]);

  return <Component index={index} isDisabled={isDisabled} register={register} handleRemove={handleRemove} />;
};

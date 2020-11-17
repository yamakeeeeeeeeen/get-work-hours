import { FC, memo } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { Props } from '~/containers/TimePickerSet';
import { TimePicker } from '~/components/TimePicker';
import { ConfirmDialog } from '~/components/ConfirmDialog';
import { getValidation } from '~/utils/getValidation';

type ComponentProps = Omit<Props, 'fields' | 'remove'> & {
  isDisabled: boolean;
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  errors: UseFormMethods['errors'];
  getValues: UseFormMethods['getValues'];
  register: UseFormMethods['register'];
  handleRemove: () => void;
};

export const Component: FC<ComponentProps> = memo(
  ({ index, value, isDisabled, isOpen, setOpen, setClose, errors, getValues, register, handleRemove }) => {
    const { biggerThanThePrevious, formatHHMM } = getValidation();

    return (
      <>
        <Box display="flex" alignItems="center" mb={3}>
          <Typography>着席{index + 1}回目</Typography>
          <TimePicker
            name={`workTimes[${index}].start`}
            label="着席"
            defaultValue={value.start}
            inputRef={register({
              validate: {
                ...formatHHMM(),
                ...biggerThanThePrevious('start', index, getValues),
              },
            })}
            error={!!errors?.workTimes?.[index]?.start}
            helperText={errors?.workTimes?.[index]?.start && errors?.workTimes?.[index]?.start?.message}
          />
          <Typography>~</Typography>
          <TimePicker
            name={`workTimes[${index}].end`}
            label="離席"
            defaultValue={value.end}
            inputRef={register({
              validate: {
                ...formatHHMM(),
                ...biggerThanThePrevious('end', index, getValues),
              },
            })}
            error={!!errors?.workTimes?.[index]?.end}
            helperText={errors?.workTimes?.[index]?.end && errors?.workTimes?.[index]?.end?.message}
          />
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
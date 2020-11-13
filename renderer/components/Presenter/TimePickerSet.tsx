import { FC, memo } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { TimePicker } from '~/components/TimePicker';
import { Register } from '~/@types/ReactHookForm';
import { ConfirmDialog } from '~/components/ConfirmDialog';

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

export const Component: FC<ComponentProps> = memo(
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

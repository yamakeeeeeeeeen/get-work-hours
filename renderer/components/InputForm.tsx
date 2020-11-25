import { FC, memo } from 'react';
import { Box, Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Props } from '~/containers/InputForm';
import { TimePickerSet } from '~/containers/TimePickerSet';
import { ResultDialog } from '~/components/ResultDialog';
import { Inputs } from '~/pages';
import { UseFormMethods } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoText: {
      marginBottom: theme.spacing(3),
    },
  }),
);

export type ComponentProps = Omit<Props, 'append'> & {
  result: { breakTime: string; uptime: string };
  isDisabled: boolean;
  isOpen: boolean;
  setClose: () => void;
  handleAppend: () => void;
  handleConfirm: (val: Inputs) => void;
  handleReset: () => void;
  handleSubmit: UseFormMethods['handleSubmit'];
};

export const Component: FC<ComponentProps> = memo(
  ({ result, isDisabled, isOpen, setClose, handleAppend, handleConfirm, handleReset, handleSubmit, ...props }) => {
    const classes = useStyles();

    return (
      <>
        <Box maxWidth={500} mx="auto">
          <Typography className={classes.infoText}>Please enter the hours you worked👨‍💻</Typography>
          {props.fields.map((item, index) => {
            if (item.start && item.end) {
              const value = {
                start: item.start,
                end: item.end,
              };
              return <TimePickerSet key={item.id} index={index} value={value} {...props} />;
            }
            return null;
          })}
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleAppend}>
              APPEND
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit(handleConfirm)}>
              CONFIRM
            </Button>
            <Button variant="contained" color="secondary" disabled={!isDisabled} onClick={handleReset}>
              RESET
            </Button>
          </Box>
        </Box>
        <ResultDialog isOpen={isOpen} setClose={setClose} result={result} />
      </>
    );
  },
);

Component.displayName = 'Component';

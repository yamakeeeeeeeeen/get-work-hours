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
  result: string;
  isOpen: boolean;
  setClose: () => void;
  handleAppend: () => void;
  handleConfirm: (val: Inputs) => void;
  handleReset: () => void;
  handleSubmit: UseFormMethods['handleSubmit'];
};

export const Component: FC<ComponentProps> = memo(
  ({ handleSubmit, result, isOpen, setClose, handleAppend, handleConfirm, handleReset, ...props }) => {
    const classes = useStyles();

    return (
      <>
        <Box>
          <Typography className={classes.infoText}>着席していた時間を入力してください</Typography>
          {props.fields.map((item, index) => {
            const value = {
              start: item.start,
              end: item.end,
            };
            return <TimePickerSet key={item.id} index={index} value={value} {...props} />;
          })}
          <Button variant="contained" color="primary" onClick={handleAppend}>
            追加
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit(handleConfirm)}>
            確認
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            リセット
          </Button>
        </Box>
        <ResultDialog isOpen={isOpen} setClose={setClose} result={result} />
      </>
    );
  },
);

Component.displayName = 'Component';

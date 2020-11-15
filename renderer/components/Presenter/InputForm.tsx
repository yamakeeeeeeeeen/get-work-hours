import { FC, memo } from 'react';
import { UseFieldArrayMethods } from 'react-hook-form';
import { Box, Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { TimePickerSet } from '~/components/Container/TimePickerSet';
import { ResultDialog } from '~/components/ResultDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoText: {
      marginBottom: theme.spacing(3),
    },
  }),
);

type ComponentProps = {
  fields: UseFieldArrayMethods['fields'];
  remove: UseFieldArrayMethods['remove'];
  result: string;
  isOpen: boolean;
  setClose: () => void;
  handleAppend: () => void;
  handleConfirm: any;
  handleSubmit: any;
};

export const Component: FC<ComponentProps> = memo(
  ({ handleSubmit, fields, remove, result, isOpen, setClose, handleAppend, handleConfirm }) => {
    const classes = useStyles();

    return (
      <>
        <Box>
          <Typography className={classes.infoText}>着席していた時間を入力してください</Typography>
          {fields.map((item, index) => {
            const value = {
              start: item.start,
              end: item.end,
            };
            return <TimePickerSet key={item.id} index={index} value={value} fields={fields} remove={remove} />;
          })}
          <Button variant="contained" color="primary" onClick={handleAppend}>
            追加
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit(handleConfirm)}>
            確認
          </Button>
        </Box>
        <ResultDialog isOpen={isOpen} setClose={setClose} result={result} />
      </>
    );
  },
);

Component.displayName = 'Component';

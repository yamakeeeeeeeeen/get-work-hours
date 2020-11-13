import { FC, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { TimePickerSet } from '~/components/TimePickerSet';
import { Append, Fields, Remove } from '~/@types/ReactHookForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoText: {
      marginBottom: theme.spacing(3),
    },
  }),
);

type ComponentProps = {
  fields: Fields;
  remove: Remove;
  handleAppend: () => void;
  handleConfirm: any;
  handleSubmit: any;
};

const Component: FC<ComponentProps> = ({ handleSubmit, fields, remove, handleAppend, handleConfirm }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.infoText}>着席していた時間を入力してください</Typography>
      {fields.map((item, index) => (
        <TimePickerSet key={item.id} index={index} fields={fields} remove={remove} />
      ))}
      <Button variant="contained" color="primary" onClick={handleAppend}>
        追加
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit(handleConfirm)}>
        確認
      </Button>
    </>
  );
};

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

import { FC, memo } from 'react';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { TimePickerSet } from '~/components/Container/TimePickerSet';
import { Fields, Remove } from '~/@types/ReactHookForm';

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

export const Component: FC<ComponentProps> = memo(({ handleSubmit, fields, remove, handleAppend, handleConfirm }) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
});

Component.displayName = 'Component';

import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 120,
    },
  }),
);

type Props = {
  label: string;
};

export const TimePicker: FC<Props> = ({ label }) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      type="time"
      defaultValue="12:00"
      variant="outlined"
      color="primary"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

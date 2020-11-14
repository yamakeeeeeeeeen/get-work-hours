import { FC } from 'react';
import { createStyles, makeStyles, TextField, TextFieldProps, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 120,
    },
  }),
);

export const TimePicker: FC<TextFieldProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      type="time"
      variant="outlined"
      color="primary"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

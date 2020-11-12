import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography } from '~/components/parts';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            勤務時間計算～～～！！！
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

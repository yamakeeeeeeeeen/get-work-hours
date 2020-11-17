import { FC, memo } from 'react';
import { Box, Button, Dialog, Typography } from '@material-ui/core';

type Props = {
  isOpen: boolean;
  setClose: () => void;
  body: string;
  callback: () => void;
};

export const ConfirmDialog: FC<Props> = memo(({ isOpen, setClose, body, callback }) => {
  return (
    <>
      <Dialog open={isOpen}>
        <Typography variant="h4">{body}</Typography>
        <Box display="flex">
          <Button variant="contained" color="primary" onClick={callback}>
            Yes
          </Button>
          <Button variant="contained" color="secondary" onClick={setClose}>
            No
          </Button>
        </Box>
      </Dialog>
    </>
  );
});

ConfirmDialog.displayName = 'ConfirmDialog';

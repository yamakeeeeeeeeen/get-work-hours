import { FC, memo } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@material-ui/core';

type Props = {
  isOpen: boolean;
  setClose: () => void;
  body: string;
  callback: () => void;
};

export const ConfirmDialog: FC<Props> = memo(({ isOpen, setClose, body, callback }) => {
  return (
    <Dialog open={isOpen} onClose={setClose}>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h4">{body}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={setClose}>
          No
        </Button>
        <Button variant="contained" color="primary" onClick={callback}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
});

ConfirmDialog.displayName = 'ConfirmDialog';

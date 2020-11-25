import { FC, memo } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@material-ui/core';

export type Props = {
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
          <Typography className="body-text" variant="h4">
            {body}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="cancel-btn" variant="contained" color="secondary" onClick={setClose}>
          No
        </Button>
        <Button className="apply-btn" variant="contained" color="primary" onClick={callback}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
});

ConfirmDialog.displayName = 'ConfirmDialog';

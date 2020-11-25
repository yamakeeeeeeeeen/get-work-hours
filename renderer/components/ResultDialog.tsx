import { FC, memo } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';

export type Props = {
  isOpen: boolean;
  setClose: () => void;
  result: { breakTime: string; uptime: string };
};

export const ResultDialog: FC<Props> = memo(({ isOpen, setClose, result }) => {
  return (
    <Dialog open={isOpen} onClose={setClose}>
      <DialogTitle>
        <Typography variant="h3">Result</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography className="uptime" variant="h4">
            {result.uptime}
          </Typography>
          <Typography className="break-time" variant="h4">
            {result.breakTime}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="close-btn" variant="contained" color="secondary" onClick={setClose}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
});

ResultDialog.displayName = 'ResultDialog';

import { FC, memo } from 'react';
import { Box, Button, Dialog, Typography } from '@material-ui/core';

type Props = {
  isOpen: boolean;
  setClose: () => void;
  result: string;
};

export const ResultDialog: FC<Props> = memo(({ isOpen, setClose, result }) => {
  return (
    <>
      <Dialog open={isOpen}>
        <Typography variant="h4">{result}</Typography>
        <Box display="flex">
          <Button variant="contained" color="secondary" onClick={setClose}>
            閉じる
          </Button>
        </Box>
      </Dialog>
    </>
  );
});

ResultDialog.displayName = 'ResultDialog';

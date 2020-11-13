import { FC, memo } from 'react';
import { Box, Button, Dialog, Typography } from '@material-ui/core';

type ComponentProps = {
  isOpen: boolean;
  setClose: () => void;
  body: string;
  callback: () => void;
};

const Component: FC<ComponentProps> = memo(({ isOpen, setClose, body, callback }) => {
  return (
    <>
      <Dialog open={isOpen}>
        <Typography variant="h4">{body}</Typography>
        <Box display="flex">
          <Button variant="contained" color="secondary" onClick={setClose}>
            いいえ
          </Button>
          <Button variant="contained" color="primary" onClick={callback}>
            はい
          </Button>
        </Box>
      </Dialog>
    </>
  );
});
Component.displayName = 'Component';

type Props = {
  isOpen: boolean;
  setClose: () => void;
  body: string;
  callback: () => void;
};

export const ConfirmDialog: FC<Props> = memo((props) => {
  return <Component {...props} />;
});
ConfirmDialog.displayName = 'ConfirmDialog';

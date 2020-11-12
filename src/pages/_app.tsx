import { FC } from 'react';
import { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';

const MyApp: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <CssBaseline />
      <Component />
    </>
  );
};

export default MyApp;

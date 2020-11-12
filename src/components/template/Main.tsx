import { FC, ReactNode } from 'react';
import { Header } from '~/components/container';

type Props = {
  children: ReactNode;
};

export const Main: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

import { FC, memo, ReactNode } from 'react';
import Head from 'next/head';

export type Props = {
  children: ReactNode;
  title?: string;
};

export const Template: FC<Props> = memo(({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
));

Template.displayName = 'Template';

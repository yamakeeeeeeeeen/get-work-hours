import { FC } from 'react';
import { Template } from '~/components/Template';
import { TimePicker } from '~/components/TimePicker';

const IndexPage: FC = () => {
  return (
    <Template title="Home | Next.js + TypeScript + Electron Example">
      <h1>稼働 / 休憩 Getter 👋</h1>
      <TimePicker label="start" />
    </Template>
  );
};

export default IndexPage;

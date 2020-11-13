import { FC } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { Typography } from '@material-ui/core';
import { Template } from '~/components/Template';
import { InputForm } from '~/components/Container/InputForm';
import { Append, Fields, Remove } from '~/@types/ReactHookForm';

type ComponentProps = {
  fields: Fields;
  append: Append;
  remove: Remove;
};

const Component: FC<ComponentProps> = ({ fields, append, remove }) => {
  return (
    <Template title="Home | Next.js + TypeScript + Electron Example">
      <Typography variant="h4">稼働 / 休憩 Getter 👋</Typography>
      <InputForm fields={fields} append={append} remove={remove} />
    </Template>
  );
};

export type Inputs = {
  workTimes: {
    start: string;
    end: string;
  }[];
};

const IndexPage: FC = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      workTimes: [{ start: '12:00', end: '12:00' }],
    },
  });
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workTimes',
  });

  return (
    <FormProvider {...methods}>
      <Component fields={fields} append={append} remove={remove} />
    </FormProvider>
  );
};

export default IndexPage;

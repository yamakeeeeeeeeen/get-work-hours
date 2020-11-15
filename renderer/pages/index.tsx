import { FC } from 'react';
import { FormProvider, useFieldArray, useForm, UseFieldArrayMethods } from 'react-hook-form';
import { Typography } from '@material-ui/core';
import { Template } from '~/components/Template';
import { InputForm } from '~/components/Container/InputForm';

type ComponentProps = {
  fields: UseFieldArrayMethods['fields'];
  append: UseFieldArrayMethods['append'];
  remove: UseFieldArrayMethods['remove'];
};

const Component: FC<ComponentProps> = ({ fields, append, remove }) => {
  return (
    <Template title="Get Work Time">
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
      workTimes: [{ start: '09:00', end: '10:00' }],
    },
    mode: 'all',
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

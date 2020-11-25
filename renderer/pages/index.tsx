import { FC } from 'react';
import { FormProvider, useFieldArray, UseFieldArrayMethods, useForm } from 'react-hook-form';
import { Box, Typography } from '@material-ui/core';
import { Template } from '~/components/Template';
import { InputForm } from '~/containers/InputForm';

export type ComponentProps = {
  fields: UseFieldArrayMethods<WorkTime>['fields'];
  append: UseFieldArrayMethods<WorkTime>['append'];
  remove: UseFieldArrayMethods<WorkTime>['remove'];
};

const Component: FC<ComponentProps> = ({ ...props }) => {
  return (
    <Template title="Get Work Time">
      <Box maxWidth={500} mx="auto" mb={3}>
        <Typography variant="h4">Get Uptime and Break Time🔥</Typography>
      </Box>
      <InputForm {...props} />
    </Template>
  );
};

type WorkTime = {
  start: string;
  end: string;
};
export type Inputs = {
  workTimes: WorkTime[];
};

const IndexPage: FC = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      workTimes: [{ start: '09:00', end: '10:00' }],
    },
    mode: 'all',
  });
  const { control } = methods;
  const { fields, append, remove } = useFieldArray<WorkTime>({
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

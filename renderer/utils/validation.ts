import { timeStringToMs } from '~/utils/timeStringToMs';
import { GetValues } from '~/@types/ReactHookForm';

type Validation = () => {
  biggerThanThePrevious: (
    pos: 'start' | 'end',
    index: number,
    getValues: GetValues,
  ) => { biggerThanThePrevious: (value: string) => undefined | boolean | string };
};

export const validation: Validation = () => {
  return {
    biggerThanThePrevious: (pos: 'start' | 'end', index: number, getValues: GetValues) => ({
      biggerThanThePrevious: (value: string) => {
        // 業務開始時の着席はバリデーションかけない
        if (pos === 'start' && index === 0) return;

        const inputs = getValues();
        const workTimes: any[] = inputs.workTimes;

        const previous =
          pos === 'start' ? timeStringToMs(workTimes[index - 1].end) : timeStringToMs(workTimes[index].start);
        const current = timeStringToMs(value);

        return current > previous || '前の時間よりも遅い時間を入力してください';
      },
    }),
  };
};

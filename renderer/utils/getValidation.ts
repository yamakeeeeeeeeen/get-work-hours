import { UseFormMethods } from 'react-hook-form';
import { timeStringToMs } from '~/utils/timeStringToMs';
import { isFormatHHMM } from '~/utils/isFormatHHMM';

type FormatHHMM = () => { formatHHMM: (value: string) => boolean | string };
type BiggerThanThePrevious = (
  pos: 'start' | 'end',
  index: number,
  getValues: UseFormMethods['getValues'],
) => { biggerThanThePrevious: (value: string) => undefined | boolean | string };
type GetValidation = () => {
  formatHHMM: FormatHHMM;
  biggerThanThePrevious: BiggerThanThePrevious;
};

export const getValidation: GetValidation = () => {
  return {
    formatHHMM: () => ({
      formatHHMM: (value: string) => isFormatHHMM(value) || '時刻形式(HH:MM)で入力してください',
    }),
    biggerThanThePrevious: (pos: 'start' | 'end', index: number, getValues: UseFormMethods['getValues']) => ({
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

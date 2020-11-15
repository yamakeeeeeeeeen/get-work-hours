import { Duration } from 'luxon';
import { timeSplit } from '~/utils/timeSplit';
import { FRACTIONS_OF_AN_HOUR } from '~/constants';
import { convertToHourAndMinute } from '~/utils/convertToHourAndMinute';

type WorkingData = { start: string; end: string }[];
type WorkingTime = {
  uptime: {
    hour: number;
    minute: number;
  };
  breakTime: {
    hour: number;
    minute: number;
  };
};

/**
 * 稼働時間と休憩時間を返す
 * @param times 稼働データ
 */
export const getWorkingTime = (times: WorkingData): WorkingTime => {
  const NO_BREAK = times.length === 1;
  // // 初めに着席した時間から最後に離席した時間を算出
  const total_time = getTotalTime(times);
  // 合計稼働時間を算出
  const total_uptime = getTotalUptime(times);
  // 合計休憩時間を算出
  const total_breakTime = NO_BREAK && total_uptime > 540 ? FRACTIONS_OF_AN_HOUR : total_time - total_uptime;

  return {
    uptime: convertToHourAndMinute(total_uptime),
    breakTime: convertToHourAndMinute(total_breakTime),
  };
};

/**
 * 最初に着席した時間から最後に離席した時間までの合計値を返す ※単位(分)
 * @param times 稼働データ
 */
const getTotalTime = (times: WorkingData): number => {
  // 初めに着席した時間から最後に離席した時間を算出
  const first_obj = times[0].start;
  const last_obj = times[times.length - 1].end;

  const [first_hour, first_minute] = timeSplit(first_obj);
  const [last_hour, last_minute] = timeSplit(last_obj);
  const first = Duration.fromObject({ hour: Number(first_hour), minute: Number(first_minute) }).as('minute');
  const last = Duration.fromObject({ hour: Number(last_hour), minute: Number(last_minute) }).as('minute');

  return last - first; // 初めに着席した時間から最後に離席した時間
};

/**
 * 合計稼働時間を返す ※単位(分)
 * @param times 稼働データ
 */
const getTotalUptime = (times: WorkingData): number => {
  const NO_BREAK = times.length === 1;
  let total_uptime = 0; // 合計稼働時間

  times.forEach((time) => {
    const [startHour, startMinute] = timeSplit(time.start);
    const [endHour, endMinute] = timeSplit(time.end);

    const start = Duration.fromObject({ hour: Number(startHour), minute: Number(startMinute) });
    const end = Duration.fromObject({ hour: Number(endHour), minute: Number(endMinute) });
    const uptime = end.as('minute') - start.as('minute');

    total_uptime += uptime;
  });

  console.log('total_uptime', total_uptime);
  // 5時間以上稼働して休憩していない場合は60分休憩する
  if (NO_BREAK && total_uptime > 540) {
    total_uptime -= FRACTIONS_OF_AN_HOUR;
  }

  return total_uptime;
};

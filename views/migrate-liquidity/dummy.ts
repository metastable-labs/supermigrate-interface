import { formatISO, subHours, subDays, subWeeks, subMonths } from 'date-fns';
import { ChartData, Period } from './types';

const periods: { period: Period; text: string }[] = [
  { period: '1h', text: 'Past hour' },
  { period: '24h', text: 'Past day' },
  { period: '1w', text: 'Past week' },
  { period: '1m', text: 'Past month' },
];

const generateRandomLiquidity = (base: number, variation: number): number => {
  return base + Math.random() * variation - variation / 2;
};

const generateChartData = (period: Period): ChartData => {
  const data: ChartData = [];
  const now = new Date();
  let date = now;
  const baseLiquidity = 1000000;
  const variation = 50000;
  let interval: number;

  switch (period) {
    case '1h':
      interval = 60 / 20;
      for (let i = 0; i <= 60; i += interval) {
        date = subHours(now, i / 60);
        data.unshift({
          date: formatISO(date),
          value: generateRandomLiquidity(baseLiquidity, variation),
        });
      }
      break;

    case '24h':
      interval = 24 / 20;
      for (let i = 0; i <= 24; i += interval) {
        date = subHours(now, i);
        data.unshift({
          date: formatISO(date),
          value: generateRandomLiquidity(baseLiquidity, variation),
        });
      }
      break;

    case '1w':
      interval = Math.random() * (14 - 7) + 7;
      for (let i = 0; i <= 7; i += 7 / interval) {
        date = subDays(now, i);
        data.unshift({
          date: formatISO(date),
          value: generateRandomLiquidity(baseLiquidity, variation),
        });
      }
      break;

    case '1m':
      interval = 30 / 10;
      for (let i = 0; i <= 30; i += interval) {
        date = subDays(now, i);
        data.unshift({
          date: formatISO(date),
          value: generateRandomLiquidity(baseLiquidity, variation),
        });
      }
      break;

    default:
      throw new Error('Invalid period');
  }

  return data;
};

export { periods, generateChartData };

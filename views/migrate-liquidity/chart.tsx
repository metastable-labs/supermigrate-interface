'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import moment from 'moment';

import useScreenDetect from '@/hooks/useScreenDetect';
import { ChartData, Period } from './types';
import { formatAmount, formatNumber } from '@/utils/helpers';

const formatXAxis = (date: string, period: Period) => {
  const xDate = moment(date);
  switch (period) {
    case '1h':
      return xDate.format('HH:mm');
    case '24h':
      return xDate.format('HH:mm');
    case '1w':
      return xDate.format('ddd');
    case '1m':
      return xDate.format('MMM DD');
    default:
      return xDate.format('MMM DD');
  }
};

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const value = Number(payload[0].value || 0);
  const price = formatAmount(value);

  const parsedDate = moment(label);

  const day = parsedDate.format('M/D/YY');
  const time = parsedDate.format('h:mma');

  return (
    <div className="flex flex-col items-start gap-0.5 bg-primary-4100 border border-primary-3450 p-5 rounded-xl shadow-tooltip transition-all duration-500">
      <div className="w-full flex items-center justify-between gap-10 text-xs text-primary-4200 font-Aeonik font-medium uppercase">
        <span>{day}</span>
        <span>{time}</span>
      </div>

      <p className="font-Bitform text-2xl tracking-[-0.72px] font-medium">
        <span>${price.toLocaleString()}</span>
      </p>
    </div>
  );
};

const LiquidityChart: React.FC<{ data: ChartData; period: Period }> = ({ data, period }) => {
  const { isMobile } = useScreenDetect();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid stroke="#F2F4F7" vertical={false} horizontal={true} />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#475467' }} tickFormatter={(tick) => formatXAxis(tick, period)} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12, fill: '#475467' }} tickFormatter={formatNumber} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} labelFormatter={(label) => label} />
        <Bar dataKey="value" fill="#525866" radius={[4, 4, 0, 0]} barSize={isMobile ? 16 : 32} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LiquidityChart;

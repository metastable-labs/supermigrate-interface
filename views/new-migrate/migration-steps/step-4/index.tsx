'use client';

import Right from './right';
import Left from './left';

const Step4 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-14 md:gap-[60px] pb-36 flex-wrap">
      <Left />
      <Right />
    </div>
  );
};

export default Step4;

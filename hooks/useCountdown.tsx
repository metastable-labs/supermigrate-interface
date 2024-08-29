import { useState, useEffect } from 'react';
import moment from 'moment';

const useCountdown = (startTimestamp: number, durationHours: number) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const startTime = moment.unix(startTimestamp);
    const endTime = startTime.add(durationHours, 'hours');

    const updateCountdown = () => {
      const now = moment();
      const duration = moment.duration(endTime.diff(now));

      if (duration.asSeconds() > 0) {
        const hours = Math.floor(duration.asHours());
        const minutes = Math.floor(duration.minutes());
        const seconds = Math.floor(duration.seconds());

        if (hours > 0) {
          setCountdown(`${hours}Hrs ${minutes}mins ${seconds}s`);
        } else if (minutes > 0) {
          setCountdown(`${minutes}mins ${seconds}s`);
        } else {
          setCountdown(`${seconds}s`);
        }
      } else {
        setCountdown('0s');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [startTimestamp, durationHours]);

  return countdown;
};

export default useCountdown;

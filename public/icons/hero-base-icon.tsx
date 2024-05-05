'use client';
import useScreenDetect from '@/hooks/useScreenDetect';

const HeroBaseIcon = () => {
  const { isMobile } = useScreenDetect();

  const width = isMobile ? 56 : 90;
  const height = isMobile ? 56 : 91;
  return (
    <svg width={width} height={height} viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect y="0.264893" width="90" height="90" fill="url(#pattern0_1187_67948)" />
      <defs>
        <pattern id="pattern0_1187_67948" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1187_67948" transform="scale(0.00684932)" />
        </pattern>
        <image
          id="image0_1187_67948"
          width="146"
          height="146"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default HeroBaseIcon;

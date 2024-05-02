"use client";
import useScreenDetect from "@/hooks/useScreenDetect";

const HeroScrollIcon = () => {
  const { isMobile } = useScreenDetect();

  const width = isMobile ? 56 : 90;
  const height = isMobile ? 56 : 91;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.5"
        y="0.5"
        width="90"
        height="90"
        rx="45"
        fill="url(#pattern0_750_21691)"
      />
      <defs>
        <pattern
          id="pattern0_750_21691"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_750_21691" transform="scale(0.00444444)" />
        </pattern>
        <image
          id="image0_750_21691"
          width="225"
          height="225"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default HeroScrollIcon;
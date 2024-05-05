import useScreenDetect from '@/hooks/useScreenDetect';

const HeroBGLines = () => {
  const { isMobile } = useScreenDetect();

  const width = isMobile ? 250 : 680;
  const height = isMobile ? 250 : 564;
  return (
    <svg width={width} height={height} viewBox="0 0 680 564" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <circle cx="352.425" cy="352.425" r="352.425" transform="matrix(-1 0 0 1 336.94 -566.559)" fill="#375DFB" fill-opacity="0.01" />
        <circle cx="352.425" cy="352.425" r="352.025" transform="matrix(-1 0 0 1 336.94 -566.559)" stroke="#375DFB" stroke-opacity="0.2" stroke-width="0.8" />
      </g>
      <g opacity="0.6">
        <circle cx="474.761" cy="474.761" r="474.761" transform="matrix(-1 0 0 1 500.447 -597.144)" fill="#375DFB" fill-opacity="0.01" />
        <circle cx="474.761" cy="474.761" r="474.361" transform="matrix(-1 0 0 1 500.447 -597.144)" stroke="#375DFB" stroke-opacity="0.2" stroke-width="0.8" />
      </g>
      <g opacity="0.6">
        <circle cx="596.689" cy="596.689" r="596.689" transform="matrix(-1 0 0 1 679.948 -629.441)" fill="#375DFB" fill-opacity="0.01" />
        <circle cx="596.689" cy="596.689" r="596.289" transform="matrix(-1 0 0 1 679.948 -629.441)" stroke="#375DFB" stroke-opacity="0.2" stroke-width="0.8" />
      </g>
    </svg>
  );
};

export default HeroBGLines;

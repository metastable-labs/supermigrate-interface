const XIcon = ({ color = '#31353F', height = 24, width = 24 }: { color?: string; height?: number; width?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M16.6526 4.6875H19.1336L13.7134 10.8825L20.0899 19.3125H15.0971L11.1866 14.1997L6.71216 19.3125H4.22966L10.0272 12.6862L3.91016 4.6875H9.02966L12.5644 9.36075L16.6526 4.6875ZM15.7819 17.8275H17.1566L8.28266 6.0945H6.80741L15.7819 17.8275Z"
      fill={color}
    />
  </svg>
);

export default XIcon;

const RankIcon = ({ color = '#475467', height = 16, width = 16 }: { color?: string; width?: number; height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
    <path
      d="M11.06 6.27998L8 3.21998L4.94 6.27998L4 5.33331L8 1.33331L12 5.33331L11.06 6.27998ZM11.06 10.28L8 7.21998L4.94 10.28L4 9.33331L8 5.33331L12 9.33331L11.06 10.28ZM11.06 14.28L8 11.22L4.94 14.28L4 13.3333L8 9.33331L12 13.3333L11.06 14.28Z"
      fill={color}
    />
  </svg>
);

export default RankIcon;

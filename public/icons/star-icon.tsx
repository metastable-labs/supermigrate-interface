const StarIcon = ({ color = '#525866', height = 12, width = 12 }: { color?: string; width?: number; height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 12" fill="none">
    <path
      d="M5.99999 8.81695L2.82614 10.5936L3.53489 7.02595L0.864136 4.55635L4.47629 4.12795L5.99999 0.824951L7.52369 4.12795L11.1358 4.55635L8.46509 7.02595L9.17384 10.5936L5.99999 8.81695Z"
      fill={color}
    />
  </svg>
);

export default StarIcon;

const FlashIcon = ({ color = '#164564', width = 16, height = 17 }: { color?: string; width?: number; height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
    <path d="M8.59922 7.29999H12.7992L7.39922 15.1V9.69999H3.19922L8.59922 1.89999V7.29999Z" fill={color} />
  </svg>
);

export default FlashIcon;

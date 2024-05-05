const PlusIcon = ({ color = 'white', width = 20, height = 20 }: { color?: string; width?: number; height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill={color} />
  </svg>
);

export default PlusIcon;

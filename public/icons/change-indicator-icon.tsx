const ChangeIndicatorIcon = ({ width = 24, height = 24, color = '#32AE60' }: { width?: number; height?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className="transition-colors duration-500">
    <path
      d="M11.2929 8.70711L5.70711 14.2929C5.07714 14.9229 5.52331 16 6.41421 16H17.5858C18.4767 16 18.9229 14.9229 18.2929 14.2929L12.7071 8.70711C12.3166 8.31658 11.6834 8.31658 11.2929 8.70711Z"
      fill={color}
    />
  </svg>
);

export default ChangeIndicatorIcon;

const WalletAltIcon = ({ color = '#31353F', height = 24, width = 25 }: { color?: string; width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="wallet-line">
      <path
        id="Vector"
        d="M17.9 7.5H20.6C20.8387 7.5 21.0676 7.59482 21.2364 7.76361C21.4052 7.93239 21.5 8.16131 21.5 8.4V19.2C21.5 19.4387 21.4052 19.6676 21.2364 19.8364C21.0676 20.0052 20.8387 20.1 20.6 20.1H4.4C4.16131 20.1 3.93239 20.0052 3.7636 19.8364C3.59482 19.6676 3.5 19.4387 3.5 19.2V4.8C3.5 4.56131 3.59482 4.33239 3.7636 4.16361C3.93239 3.99482 4.16131 3.9 4.4 3.9H17.9V7.5ZM5.3 9.3V18.3H19.7V9.3H5.3ZM5.3 5.7V7.5H16.1V5.7H5.3ZM15.2 12.9H17.9V14.7H15.2V12.9Z"
        fill={color}
      />
    </g>
  </svg>
);

export default WalletAltIcon;

const EthIcon = ({ height = 24, width = 24 }: { height?: number; width?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#5C7FE6" />
    <path d="M11.9705 4.80005L11.875 5.12431V14.5326L11.9705 14.6279L16.3376 12.0464L11.9705 4.80005Z" fill="#BECCF5" />
    <path d="M11.9688 4.80005L7.60156 12.0464L11.9688 14.6279V10.0613V4.80005Z" fill="white" />
    <path d="M11.9679 15.4546L11.9141 15.5202V18.8716L11.9679 19.0287L16.3377 12.8745L11.9679 15.4546Z" fill="#BECCF5" />
    <path d="M11.9688 19.0287V15.4546L7.60156 12.8745L11.9688 19.0287Z" fill="white" />
    <path d="M11.9688 14.6278L16.3359 12.0464L11.9688 10.0613V14.6278Z" fill="#7D99EB" />
    <path d="M7.60156 12.0464L11.9688 14.6278V10.0613L7.60156 12.0464Z" fill="#C3D0F6" />
  </svg>
);

export default EthIcon;

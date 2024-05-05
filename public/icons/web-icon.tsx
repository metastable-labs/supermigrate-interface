const WebIcon = ({ color = '#525866', height = 20, width = 20 }: { color?: string; height?: number; width?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path
      d="M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM8.2825 15.7502C7.54256 14.1807 7.1139 12.4827 7.02025 10.75H4.0465C4.19244 11.9042 4.67044 12.9911 5.42243 13.8788C6.17441 14.7664 7.16801 15.4166 8.2825 15.7502V15.7502ZM8.5225 10.75C8.63575 12.5792 9.1585 14.2975 10 15.814C10.8642 14.2574 11.3691 12.5271 11.4775 10.75H8.5225V10.75ZM15.9535 10.75H12.9797C12.8861 12.4827 12.4574 14.1807 11.7175 15.7502C12.832 15.4166 13.8256 14.7664 14.5776 13.8788C15.3296 12.9911 15.8076 11.9042 15.9535 10.75V10.75ZM4.0465 9.25H7.02025C7.1139 7.51734 7.54256 5.81926 8.2825 4.24975C7.16801 4.58341 6.17441 5.23356 5.42243 6.12122C4.67044 7.00888 4.19244 8.09583 4.0465 9.25V9.25ZM8.52325 9.25H11.4767C11.3686 7.47295 10.864 5.74265 10 4.186C9.13576 5.74259 8.63092 7.47289 8.5225 9.25H8.52325ZM11.7175 4.24975C12.4574 5.81926 12.8861 7.51734 12.9797 9.25H15.9535C15.8076 8.09583 15.3296 7.00888 14.5776 6.12122C13.8256 5.23356 12.832 4.58341 11.7175 4.24975V4.24975Z"
      fill={color}
    />
  </svg>
);

export default WebIcon;

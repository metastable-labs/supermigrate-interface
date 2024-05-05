const MigrateLinkIcon = ({
  color = "#002132",
  width = 20,
  height = 20,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M14.9759 10.0006L10.6654 5.69011L9.68333 6.6722L13.0117 10.0006L9.68333 13.329L10.6654 14.3111L14.9759 10.0006ZM11.0524 10.0006L6.74186 5.69011L5.75977 6.6722L9.08819 10.0006L5.75977 13.329L6.74186 14.3111L11.0524 10.0006Z"
        fill={color}
      />
    </svg>
  );
};

export default MigrateLinkIcon;

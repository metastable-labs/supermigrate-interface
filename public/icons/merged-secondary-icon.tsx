const MergedSecondaryIcon = ({
  color = "#FBFFDF",
  height = 24,
  width = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.6993 5.7H16.4993C16.9767 5.7 17.4346 5.88964 17.7721 6.22721C18.1097 6.56477 18.2993 7.02261 18.2993 7.5V14.853C18.9001 15.0653 19.4064 15.4832 19.7289 16.0327C20.0513 16.5823 20.1691 17.2281 20.0614 17.8561C19.9537 18.4841 19.6274 19.0538 19.1403 19.4645C18.6531 19.8752 18.0365 20.1004 17.3993 20.1004C16.7622 20.1004 16.1455 19.8752 15.6584 19.4645C15.1713 19.0538 14.845 18.4841 14.7373 17.8561C14.6296 17.2281 14.7474 16.5823 15.0698 16.0327C15.3923 15.4832 15.8986 15.0653 16.4993 14.853V7.5H14.6993V10.2L10.6493 6.6L14.6993 3V5.7ZM5.69934 9.147C5.0986 8.93468 4.59226 8.51682 4.26982 7.96727C3.94738 7.41773 3.82961 6.77188 3.93731 6.14389C4.04502 5.5159 4.37128 4.94621 4.85841 4.53551C5.34554 4.12482 5.96218 3.89956 6.59934 3.89956C7.2365 3.89956 7.85314 4.12482 8.34028 4.53551C8.82741 4.94621 9.15367 5.5159 9.26137 6.14389C9.36908 6.77188 9.25131 7.41773 8.92887 7.96727C8.60643 8.51682 8.10009 8.93468 7.49934 9.147V14.853C8.10009 15.0653 8.60643 15.4832 8.92887 16.0327C9.25131 16.5823 9.36908 17.2281 9.26137 17.8561C9.15367 18.4841 8.82741 19.0538 8.34028 19.4645C7.85314 19.8752 7.2365 20.1004 6.59934 20.1004C5.96218 20.1004 5.34554 19.8752 4.85841 19.4645C4.37128 19.0538 4.04502 18.4841 3.93731 17.8561C3.82961 17.2281 3.94738 16.5823 4.26982 16.0327C4.59226 15.4832 5.0986 15.0653 5.69934 14.853V9.147ZM6.59934 7.5C6.83804 7.5 7.06696 7.40518 7.23574 7.2364C7.40452 7.06761 7.49934 6.83869 7.49934 6.6C7.49934 6.3613 7.40452 6.13239 7.23574 5.9636C7.06696 5.79482 6.83804 5.7 6.59934 5.7C6.36065 5.7 6.13173 5.79482 5.96295 5.9636C5.79416 6.13239 5.69934 6.3613 5.69934 6.6C5.69934 6.83869 5.79416 7.06761 5.96295 7.2364C6.13173 7.40518 6.36065 7.5 6.59934 7.5ZM6.59934 18.3C6.83804 18.3 7.06696 18.2052 7.23574 18.0364C7.40452 17.8676 7.49934 17.6387 7.49934 17.4C7.49934 17.1613 7.40452 16.9324 7.23574 16.7636C7.06696 16.5948 6.83804 16.5 6.59934 16.5C6.36065 16.5 6.13173 16.5948 5.96295 16.7636C5.79416 16.9324 5.69934 17.1613 5.69934 17.4C5.69934 17.6387 5.79416 17.8676 5.96295 18.0364C6.13173 18.2052 6.36065 18.3 6.59934 18.3ZM17.3993 18.3C17.638 18.3 17.867 18.2052 18.0357 18.0364C18.2045 17.8676 18.2993 17.6387 18.2993 17.4C18.2993 17.1613 18.2045 16.9324 18.0357 16.7636C17.867 16.5948 17.638 16.5 17.3993 16.5C17.1606 16.5 16.9317 16.5948 16.7629 16.7636C16.5942 16.9324 16.4993 17.1613 16.4993 17.4C16.4993 17.6387 16.5942 17.8676 16.7629 18.0364C16.9317 18.2052 17.1606 18.3 17.3993 18.3Z"
      fill={color}
    />
  </svg>
);

export default MergedSecondaryIcon;
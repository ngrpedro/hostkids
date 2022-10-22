interface LogoProps {
  boxSize: string;
}
function LogoWhite({ boxSize } : LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={boxSize}
      height={boxSize}
      fill="none"
      viewBox="0 0 128 128"
    >
      <path
        stroke="#FFD666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="M47.35 13.55a26 26 0 0117.8 48.85l-17.8-48.85z"
      ></path>
      <path
        stroke="#FFD666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="M13.55 72.65a26 26 0 0148.85-17.8l-48.85 17.8z"
      ></path>
      <path
        stroke="#FFD666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="M72.65 106.45a25.997 25.997 0 01-32.899-15.68A26 26 0 0154.85 57.6l17.8 48.85z"
      ></path>
      <path
        stroke="#FFD666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="M106.45 47.35a25.997 25.997 0 01-15.68 32.899A26 26 0 0157.6 65.15l48.85-17.8zM82.25 82.25L112 112"
      ></path>
    </svg>
  );
}

export default LogoWhite;

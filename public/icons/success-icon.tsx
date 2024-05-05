import { motion } from 'framer-motion';

const SuccessIcon = () => (
  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" fill="url(#paint0_linear_2085_54489)" />
    <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" stroke="url(#paint1_linear_2085_54489)" />
    <g filter="url(#filter0_d_2085_54489)">
      <motion.rect x="16" y="16" width="56" height="56" rx="28" initial={{ fill: '#fff' }} animate={{ fill: '#38C793' }} />
      <rect x="16.5" y="16.5" width="55" height="55" rx="27.5" stroke="#CBF5E5" />
      <path d="M41.901 47.3306L51.5526 37.678L53.0383 39.1627L41.901 50.3L35.2188 43.6178L36.7035 42.1331L41.901 47.3306Z" fill="#EFFAF6" />
    </g>
    <defs>
      <filter id="filter0_d_2085_54489" x="12" y="14" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2085_54489" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2085_54489" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_2085_54489" x1="44" y1="0" x2="44" y2="96.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E9FFF6" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <linearGradient id="paint1_linear_2085_54489" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
        <motion.stop initial={{ stopColor: '#fff' }} animate={{ stopColor: '#38C793' }} />
        <stop offset="0.765625" stop-color="#E4E5E7" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SuccessIcon;

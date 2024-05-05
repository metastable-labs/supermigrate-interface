'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import useScreenDetect from '@/hooks/useScreenDetect';

const iconColors: { [key: number]: string } = {
  0: '#C2540A',
  1: '#1142EF',
  2: '#FF0000',
  3: '#DFFE00',
  4: '#FFEDD8',
};
const HeroIcon = () => {
  const [step, setStep] = useState(0);
  const { isMobile } = useScreenDetect();

  const width = isMobile ? 313 : 553;
  const height = isMobile ? 352 : 617;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width={width} height={height} viewBox="0 0 553 617" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="225.002" y1="540.809" x2="225.002" y2="173.276" stroke="url(#paint0_linear_672_527)" stroke-width="2.66347" />
      <line x1="332.858" y1="481.533" x2="332.858" y2="114" stroke="url(#paint1_linear_672_527)" stroke-width="2.66347" />
      <line x1="278.931" y1="616.307" x2="278.931" y2="173.28" stroke="url(#paint2_linear_672_527)" stroke-width="2.66347" />
      <path d="M278.931 514.559V397.529" stroke="url(#paint3_linear_672_527)" stroke-width="2.66347" stroke-linecap="round" />
      <path d="M332.773 342.954V282.22" stroke="url(#paint4_linear_672_527)" stroke-width="2.66347" stroke-linecap="round" />
      <path d="M225 397.53L225 316.564" stroke="url(#paint5_linear_672_527)" stroke-width="2.66347" stroke-linecap="round" />
      <line x1="203.332" x2="203.332" y2="363.915" stroke="url(#paint6_linear_672_527)" stroke-width="2.66347" />
      <line x1="311.186" x2="311.186" y2="423.193" stroke="url(#paint7_linear_672_527)" stroke-width="2.66347" />
      <line x1="257.259" y1="50.3298" x2="257.259" y2="363.917" stroke="url(#paint8_linear_672_527)" stroke-width="2.66347" />
      <g clip-path="url(#clip0_672_527)">
        <circle cx="266.993" cy="119.193" r="35" transform="rotate(-53.191 266.993 119.193)" fill="#0A0D14" />
        <path
          d="M246.501 102.889L246.521 102.904C246.635 102.958 246.754 103.048 246.874 103.137L261.218 113.872C261.283 113.951 261.258 114.026 261.253 114.115C261.14 114.682 261.021 115.214 260.887 115.765C260.714 116.536 260.546 117.341 260.373 118.112L259.765 120.915C259.592 121.686 259.419 122.456 259.26 123.207C259.072 124.122 258.85 125.041 258.662 125.956C258.489 126.727 258.335 127.512 258.147 128.302C258.009 128.944 257.851 129.57 257.727 130.191C257.717 130.246 257.707 130.301 257.677 130.341C257.663 130.36 257.663 130.36 257.628 130.365L257.135 129.158C256.198 126.843 255.266 124.563 254.329 122.248C253.318 119.784 252.321 117.3 251.309 114.836C250.378 112.556 249.461 110.256 248.529 107.976C247.846 106.317 247.179 104.637 246.496 102.978C246.471 102.929 246.466 102.894 246.426 102.864L246.441 102.844C246.446 102.879 246.481 102.874 246.501 102.889Z"
          fill="#F3F3F3"
        />
        <path
          d="M275.953 105.876L275.988 105.871L275.53 110.091L274.083 123.347C274.073 123.402 274.063 123.457 274.068 123.491C274.023 123.551 273.964 123.506 273.944 123.492L273.765 123.358L261.469 114.156C261.41 114.112 261.33 114.052 261.285 113.988C261.221 113.908 261.285 113.863 261.35 113.819C261.663 113.649 261.991 113.46 262.303 113.291C263.242 112.783 264.181 112.275 265.1 111.752C265.905 111.299 266.714 110.881 267.519 110.428C268.323 109.974 269.148 109.536 269.953 109.083C270.643 108.7 271.368 108.311 272.059 107.928C272.749 107.544 273.474 107.156 274.165 106.773C274.706 106.464 275.267 106.17 275.809 105.861C275.868 105.906 275.903 105.901 275.953 105.876Z"
          fill="#8A8DA7"
        />
        <path
          d="M286.41 132.757C286.43 132.772 286.435 132.807 286.455 132.821L286.44 132.841C286.401 132.812 286.351 132.836 286.296 132.827C283.642 132.765 280.968 132.688 278.314 132.626C275.606 132.555 272.862 132.488 270.154 132.416C267.534 132.35 264.88 132.288 262.261 132.221C261.565 132.197 260.889 132.188 260.194 132.163C260.139 132.154 260.104 132.159 260.015 132.154C260.059 132.094 260.129 132.084 260.164 132.079C262.474 131.107 264.769 130.156 267.079 129.184C269.741 128.073 272.389 126.982 275.052 125.871L276.408 125.303C276.478 125.293 276.517 125.322 276.557 125.352L286.147 132.529C286.246 132.603 286.346 132.677 286.41 132.757Z"
          fill="#F3F3F3"
        />
        <path
          d="M257.651 130.417L257.631 130.402C257.829 129.557 257.992 128.717 258.19 127.872C258.422 126.773 258.674 125.689 258.907 124.591C259.09 123.766 259.268 122.906 259.451 122.08C259.718 120.853 259.99 119.66 260.257 118.432C260.44 117.606 260.623 116.781 260.801 115.921C260.93 115.335 261.073 114.728 261.202 114.142C261.212 114.087 261.236 114.012 261.211 113.963C261.226 113.943 261.246 113.958 261.251 113.993L273.885 123.447C273.944 123.491 273.989 123.556 274.059 123.546C274.089 123.63 273.999 123.626 273.965 123.631C273.731 123.735 273.498 123.84 273.244 123.93C268.103 126.072 262.926 128.22 257.785 130.362C257.75 130.367 257.7 130.392 257.651 130.417Z"
          fill="#C5C8D9"
        />
        <path
          d="M278.312 107.702L278.327 107.682C278.367 107.712 278.377 107.782 278.402 107.831C280.815 115.348 283.249 122.88 285.662 130.397C285.916 131.177 286.156 131.977 286.41 132.757C286.375 132.762 286.355 132.747 286.335 132.732L286.216 132.643L276.567 125.422L276.388 125.288C276.516 124.08 276.649 122.907 276.777 121.699C277.278 117.047 277.8 112.409 278.287 107.777C278.322 107.772 278.317 107.737 278.312 107.702Z"
          fill="#C5C8D9"
        />
        <path
          d="M261.267 113.972L261.227 113.943L261.108 113.853L246.664 103.044C246.604 103 246.549 102.99 246.519 102.905C256.246 103.884 265.954 104.848 275.666 105.846C275.755 105.851 275.88 105.851 275.974 105.891C275.666 106.095 275.333 106.249 275.02 106.419C274.643 106.633 274.231 106.852 273.853 107.066C273.605 107.19 273.361 107.35 273.113 107.474C272.701 107.693 272.308 107.927 271.896 108.146C271.668 108.286 271.419 108.41 271.171 108.535L269.592 109.401C269.328 109.546 269.065 109.69 268.787 109.854L267.654 110.497C267.426 110.636 267.178 110.761 266.929 110.885L265.35 111.752C265.086 111.896 264.823 112.04 264.545 112.205L263.413 112.847C263.149 112.991 262.901 113.116 262.638 113.26C262.176 113.504 261.714 113.748 261.257 114.027C261.282 113.953 261.267 113.972 261.267 113.972Z"
          fill="#C5C8D9"
        />
      </g>
      <g filter="url(#filter0_d_672_527)">
        <rect x="25" y="121" width="502.857" height="330" rx="15" fill="white" />
        <rect x="26.3317" y="122.332" width="500.194" height="327.337" rx="13.6683" stroke="#CDD8E3" stroke-width="2.66347" />
      </g>
      <g filter="url(#filter1_i_672_527)">
        <path
          d="M495.712 174.674H57.1416C53.2756 174.674 50.1416 177.808 50.1416 181.674V390.325C50.1416 394.191 53.2756 397.325 57.1416 397.325H495.712C499.578 397.325 502.712 394.191 502.712 390.325V181.674C502.712 177.808 499.578 174.674 495.712 174.674Z"
          fill="#E9ECF0"
        />
      </g>
      <g filter="url(#filter2_i_672_527)">
        <rect x="449.524" y="376.346" width="78.1778" height="180.694" rx="3.14286" transform="rotate(180 449.524 376.346)" fill="white" />
      </g>
      <rect x="433.315" y="359.307" width="45.7579" height="147.47" rx="3.14286" transform="rotate(180 433.315 359.307)" fill="#E9ECF0" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M394.343 300.214H426.725V257.038H434.44C435.308 257.038 436.012 256.334 436.012 255.467V237.021C436.012 236.154 435.308 235.45 434.44 235.45H387.211C386.343 235.45 385.639 236.154 385.639 237.021V255.467C385.639 256.334 386.343 257.038 387.211 257.038H394.343V300.214Z"
        fill="url(#paint9_linear_672_527)"
      />
      <rect x="426.652" y="247.575" width="31.9617" height="2.66347" rx="1.33174" transform="rotate(180 426.652 247.575)" fill="white" />
      <g filter="url(#filter3_i_672_527)">
        <rect x="103.328" y="195.653" width="78.1778" height="180.694" rx="3.14286" fill="white" />
      </g>
      <rect x="119.537" y="212.692" width="45.7579" height="147.47" rx="3.14286" fill="#E9ECF0" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M158.847 272.098H126.465V315.273H118.75C117.882 315.273 117.179 315.977 117.179 316.845V335.29C117.179 336.158 117.882 336.862 118.75 336.862H165.98C166.847 336.862 167.551 336.158 167.551 335.29V316.845C167.551 315.977 166.847 315.273 165.98 315.273H158.847V272.098Z"
        fill="url(#paint10_linear_672_527)"
      />
      <rect x="126.544" y="324.737" width="31.9617" height="2.66347" rx="1.33174" fill="white" />
      <g filter="url(#filter4_i_672_527)">
        <circle cx="57.6377" cy="147.353" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter5_i_672_527)">
        <circle cx="495.212" cy="147.353" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter6_i_672_527)">
        <circle cx="57.6377" cy="423.732" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter7_i_672_527)">
        <circle cx="495.212" cy="423.732" r="7.49704" fill="#D8E0EA" />
      </g>
      <path
        d="M497.083 146.557H496.014V145.488C496.014 145.048 495.658 144.691 495.217 144.691C494.777 144.691 494.42 145.048 494.42 145.488V146.557H493.352C492.911 146.557 492.555 146.913 492.555 147.354C492.555 147.794 492.911 148.151 493.352 148.151H494.42V149.219C494.42 149.66 494.777 150.017 495.217 150.017C495.658 150.017 496.014 149.66 496.014 149.219V148.151H497.083C497.523 148.151 497.88 147.794 497.88 147.354C497.88 146.913 497.523 146.557 497.083 146.557Z"
        fill="#97A4D0"
      />
      <path
        d="M59.5018 146.557H58.4334V145.488C58.4334 145.048 58.0768 144.691 57.6363 144.691C57.1958 144.691 56.8391 145.048 56.8391 145.488V146.557H55.7708C55.3303 146.557 54.9736 146.913 54.9736 147.354C54.9736 147.794 55.3303 148.151 55.7708 148.151H56.8391V149.219C56.8391 149.66 57.1958 150.017 57.6363 150.017C58.0768 150.017 58.4334 149.66 58.4334 149.219V148.151H59.5018C59.9423 148.151 60.2989 147.794 60.2989 147.354C60.2989 146.913 59.9423 146.557 59.5018 146.557Z"
        fill="#97A4D0"
      />
      <path
        d="M59.5018 422.935H58.4334V421.866C58.4334 421.426 58.0768 421.069 57.6363 421.069C57.1958 421.069 56.8391 421.426 56.8391 421.866V422.935H55.7708C55.3303 422.935 54.9736 423.291 54.9736 423.732C54.9736 424.172 55.3303 424.529 55.7708 424.529H56.8391V425.597C56.8391 426.038 57.1958 426.394 57.6363 426.394C58.0768 426.394 58.4334 426.038 58.4334 425.597V424.529H59.5018C59.9423 424.529 60.2989 424.172 60.2989 423.732C60.2989 423.291 59.9423 422.935 59.5018 422.935Z"
        fill="#97A4D0"
      />
      <path
        d="M497.083 422.935H496.014V421.866C496.014 421.426 495.658 421.069 495.217 421.069C494.777 421.069 494.42 421.426 494.42 421.866V422.935H493.352C492.911 422.935 492.555 423.291 492.555 423.732C492.555 424.172 492.911 424.529 493.352 424.529H494.42V425.597C494.42 426.038 494.777 426.394 495.217 426.394C495.658 426.394 496.014 426.038 496.014 425.597V424.529H497.083C497.523 424.529 497.88 424.172 497.88 423.732C497.88 423.291 497.523 422.935 497.083 422.935Z"
        fill="#97A4D0"
      />
      <rect x="226.427" y="262" width="100" height="48" rx="3.14286" fill="#0A0D14" />
      <rect x="244.894" y="284" width="63.9233" height="5.32694" rx="2.66347" fill="white" />
      <defs>
        <filter id="filter0_d_672_527" x="0.00985384" y="96.0099" width="552.838" height="379.98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="4.99803" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_672_527" />
          <feOffset />
          <feGaussianBlur stdDeviation="9.99606" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_672_527" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_672_527" result="shape" />
        </filter>
        <filter id="filter1_i_672_527" x="50.1416" y="174.674" width="452.57" height="225.795" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="3.14286" />
          <feGaussianBlur stdDeviation="6.28571" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter2_i_672_527" x="371.347" y="195.653" width="78.1777" height="180.694" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1.57143" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter3_i_672_527" x="103.328" y="195.653" width="78.1777" height="180.694" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1.57143" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter4_i_672_527" x="50.1406" y="139.856" width="14.9941" height="17.6576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter5_i_672_527" x="487.715" y="139.856" width="14.9941" height="17.6576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter6_i_672_527" x="50.1406" y="416.235" width="14.9941" height="17.6576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <filter id="filter7_i_672_527" x="487.715" y="416.235" width="14.9941" height="17.6576" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_527" />
        </filter>
        <linearGradient id="paint0_linear_672_527" x1="226.334" y1="281.131" x2="226.334" y2="540.809" gradientUnits="userSpaceOnUse">
          <stop offset="0.641328" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_672_527" x1="334.189" y1="221.855" x2="334.189" y2="481.533" gradientUnits="userSpaceOnUse">
          <stop offset="0.641328" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_672_527" x1="280.263" y1="303.289" x2="280.262" y2="616.307" gradientUnits="userSpaceOnUse">
          <stop offset="0.759788" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_672_527" x1="279.432" y1="395.262" x2="279.432" y2="514.559" gradientUnits="userSpaceOnUse">
          <motion.stop offset="0.09375" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <motion.stop offset="0.78125" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_672_527" x1="333.274" y1="281.043" x2="333.274" y2="342.954" gradientUnits="userSpaceOnUse">
          <motion.stop offset="0.09375" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <motion.stop offset="0.78125" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear_672_527" x1="225.501" y1="314.995" x2="225.501" y2="397.53" gradientUnits="userSpaceOnUse">
          <motion.stop offset="0.09375" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <motion.stop offset="0.78125" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear_672_527" x1="202" y1="257.122" x2="202" y2="1.36278e-10" gradientUnits="userSpaceOnUse">
          <stop offset="0.641328" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear_672_527" x1="309.854" y1="299.004" x2="309.855" y2="2.2368e-10" gradientUnits="userSpaceOnUse">
          <stop offset="0.641328" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint8_linear_672_527" x1="255.928" y1="271.893" x2="255.928" y2="50.3298" gradientUnits="userSpaceOnUse">
          <stop offset="0.759788" stop-color="#D3DFEB" />
          <stop offset="1" stop-color="#D3DFEB" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint9_linear_672_527" x1="410.826" y1="249.326" x2="410.826" y2="300.214" gradientUnits="userSpaceOnUse">
          <motion.stop initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} />
          <motion.stop offset="1" initial={{ stopColor: iconColors[0] }} animate={{ stopColor: iconColors[step] }} transition={{ duration: 1 }} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint10_linear_672_527" x1="142.365" y1="322.986" x2="142.365" y2="272.098" gradientUnits="userSpaceOnUse">
          <stop stop-color="#BAC3D0" />
          <stop offset="1" stop-color="#BAC3D0" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_672_527">
          <rect width="70" height="70" fill="white" transform="translate(218 126.245) rotate(-53.191)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeroIcon;

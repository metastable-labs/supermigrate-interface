"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import useMobileDetect from "@/hooks/useMobileDetect";

const iconColors: { [key: number]: string } = {
  0: "#C2540A",
  1: "#1142EF",
  2: "#FF0000",
  3: "#DFFE00",
  4: "#FFEDD8",
};
const HeroIcon = () => {
  const [step, setStep] = useState(0);
  const isMobile = useMobileDetect();

  const width = isMobile ? 313 : 553;
  const height = isMobile ? 213 : 380;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 553 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_672_544)">
        <rect x="25" y="25" width="502.857" height="330" rx="15" fill="white" />
        <rect
          x="26.3317"
          y="26.3317"
          width="500.194"
          height="327.337"
          rx="13.6683"
          stroke="#CDD8E3"
          stroke-width="2.66347"
        />
      </g>
      <g filter="url(#filter1_i_672_544)">
        <path
          d="M495.712 78.6736H57.1416C53.2756 78.6736 50.1416 81.8077 50.1416 85.6736V294.325C50.1416 298.191 53.2756 301.325 57.1416 301.325H495.712C499.578 301.325 502.712 298.191 502.712 294.325V85.6736C502.712 81.8077 499.578 78.6736 495.712 78.6736Z"
          fill="#E9ECF0"
        />
      </g>
      <g filter="url(#filter2_i_672_544)">
        <rect
          x="449.524"
          y="280.346"
          width="78.1778"
          height="180.694"
          rx="3.14286"
          transform="rotate(180 449.524 280.346)"
          fill="white"
        />
      </g>
      <rect
        x="433.315"
        y="263.307"
        width="45.7579"
        height="147.47"
        rx="3.14286"
        transform="rotate(180 433.315 263.307)"
        fill="#E9ECF0"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M394.343 204.214H426.725V161.038H434.44C435.308 161.038 436.012 160.334 436.012 159.467V141.021C436.012 140.154 435.308 139.45 434.44 139.45H387.211C386.343 139.45 385.639 140.154 385.639 141.021V159.467C385.639 160.334 386.343 161.038 387.211 161.038H394.343V204.214Z"
        fill="url(#paint0_linear_672_544)"
      />
      <rect
        x="426.652"
        y="151.575"
        width="31.9617"
        height="2.66347"
        rx="1.33174"
        transform="rotate(180 426.652 151.575)"
        fill="white"
      />
      <g filter="url(#filter3_i_672_544)">
        <rect
          x="103.328"
          y="99.6528"
          width="78.1778"
          height="180.694"
          rx="3.14286"
          fill="white"
        />
      </g>
      <rect
        x="119.537"
        y="116.692"
        width="45.7579"
        height="147.47"
        rx="3.14286"
        fill="#E9ECF0"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M158.847 176.098H126.465V219.273H118.75C117.882 219.273 117.179 219.977 117.179 220.845V239.29C117.179 240.158 117.882 240.862 118.75 240.862H165.98C166.847 240.862 167.551 240.158 167.551 239.29V220.845C167.551 219.977 166.847 219.273 165.98 219.273H158.847V176.098Z"
        fill="url(#paint1_linear_672_544)"
      />
      <rect
        x="126.544"
        y="228.737"
        width="31.9617"
        height="2.66347"
        rx="1.33174"
        fill="white"
      />
      <g filter="url(#filter4_i_672_544)">
        <circle cx="57.6377" cy="51.3533" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter5_i_672_544)">
        <circle cx="495.212" cy="51.3533" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter6_i_672_544)">
        <circle cx="57.6377" cy="327.732" r="7.49704" fill="#D8E0EA" />
      </g>
      <g filter="url(#filter7_i_672_544)">
        <circle cx="495.212" cy="327.732" r="7.49704" fill="#D8E0EA" />
      </g>
      <path
        d="M497.083 50.5568H496.014V49.4884C496.014 49.0479 495.658 48.6913 495.217 48.6913C494.777 48.6913 494.42 49.0479 494.42 49.4884V50.5568H493.352C492.911 50.5568 492.555 50.9134 492.555 51.3539C492.555 51.7944 492.911 52.1511 493.352 52.1511H494.42V53.2194C494.42 53.6599 494.777 54.0166 495.217 54.0166C495.658 54.0166 496.014 53.6599 496.014 53.2194V52.1511H497.083C497.523 52.1511 497.88 51.7944 497.88 51.3539C497.88 50.9134 497.523 50.5568 497.083 50.5568Z"
        fill="#97A4D0"
      />
      <path
        d="M59.5018 50.5568H58.4334V49.4884C58.4334 49.0479 58.0768 48.6913 57.6363 48.6913C57.1958 48.6913 56.8391 49.0479 56.8391 49.4884V50.5568H55.7708C55.3303 50.5568 54.9736 50.9134 54.9736 51.3539C54.9736 51.7944 55.3303 52.1511 55.7708 52.1511H56.8391V53.2194C56.8391 53.6599 57.1958 54.0166 57.6363 54.0166C58.0768 54.0166 58.4334 53.6599 58.4334 53.2194V52.1511H59.5018C59.9423 52.1511 60.2989 51.7944 60.2989 51.3539C60.2989 50.9134 59.9423 50.5568 59.5018 50.5568Z"
        fill="#97A4D0"
      />
      <path
        d="M59.5018 326.935H58.4334V325.866C58.4334 325.426 58.0768 325.069 57.6363 325.069C57.1958 325.069 56.8391 325.426 56.8391 325.866V326.935H55.7708C55.3303 326.935 54.9736 327.291 54.9736 327.732C54.9736 328.172 55.3303 328.529 55.7708 328.529H56.8391V329.597C56.8391 330.038 57.1958 330.394 57.6363 330.394C58.0768 330.394 58.4334 330.038 58.4334 329.597V328.529H59.5018C59.9423 328.529 60.2989 328.172 60.2989 327.732C60.2989 327.291 59.9423 326.935 59.5018 326.935Z"
        fill="#97A4D0"
      />
      <path
        d="M497.083 326.935H496.014V325.866C496.014 325.426 495.658 325.069 495.217 325.069C494.777 325.069 494.42 325.426 494.42 325.866V326.935H493.352C492.911 326.935 492.555 327.291 492.555 327.732C492.555 328.172 492.911 328.529 493.352 328.529H494.42V329.597C494.42 330.038 494.777 330.394 495.217 330.394C495.658 330.394 496.014 330.038 496.014 329.597V328.529H497.083C497.523 328.529 497.88 328.172 497.88 327.732C497.88 327.291 497.523 326.935 497.083 326.935Z"
        fill="#97A4D0"
      />
      <rect
        x="226.427"
        y="166"
        width="100"
        height="48"
        rx="3.14286"
        fill="#0A0D14"
      />
      <rect
        x="244.894"
        y="188"
        width="63.9233"
        height="5.32694"
        rx="2.66347"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_672_544"
          x="0.00985384"
          y="0.00985384"
          width="552.838"
          height="379.98"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4.99803"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_672_544"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.99606" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_672_544"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_672_544"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_672_544"
          x="50.1416"
          y="78.6736"
          width="452.57"
          height="225.795"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.14286" />
          <feGaussianBlur stdDeviation="6.28571" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter2_i_672_544"
          x="371.347"
          y="99.6529"
          width="78.1777"
          height="180.694"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.57143" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter3_i_672_544"
          x="103.328"
          y="99.6528"
          width="78.1777"
          height="180.694"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.57143" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter4_i_672_544"
          x="50.1406"
          y="43.8563"
          width="14.9941"
          height="17.6576"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter5_i_672_544"
          x="487.715"
          y="43.8563"
          width="14.9941"
          height="17.6576"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter6_i_672_544"
          x="50.1406"
          y="320.235"
          width="14.9941"
          height="17.6576"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <filter
          id="filter7_i_672_544"
          x="487.715"
          y="320.235"
          width="14.9941"
          height="17.6576"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.66347" />
          <feGaussianBlur stdDeviation="2.66347" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.160784 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_672_544"
          />
        </filter>
        <linearGradient
          id="paint0_linear_672_544"
          x1="410.826"
          y1="153.326"
          x2="410.826"
          y2="204.214"
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            stopColor={iconColors[step]}
            initial={{ stopColor: iconColors[0] }}
            animate={{ stopColor: iconColors[step] }}
            transition={{ duration: 1 }}
          />
          <motion.stop
            offset="1"
            stopColor={iconColors[step]}
            stopOpacity="0"
            initial={{ stopColor: iconColors[0], stopOpacity: "0" }}
            animate={{ stopColor: iconColors[step], stopOpacity: "0" }}
            transition={{ duration: 1 }}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_672_544"
          x1="142.365"
          y1="226.986"
          x2="142.365"
          y2="176.098"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BAC3D0" />
          <stop offset="1" stop-color="#BAC3D0" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroIcon;

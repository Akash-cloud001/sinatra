import * as React from "react";
import { motion } from "framer-motion";

const Graph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
    viewBox="0 0 137 100"
  >
    <path fill="#fff" d="M13.036 17.213h-.5v55.662h.5z"></path>
    <path
      fill="url(#paint0_linear_319_14962)"
      d="M20.879 58.792 4.693 49.447V22.422l16.186 9.345z"
    ></path>
    <path
      fill="#fff"
      d="M21.129 59.225 4.443 49.592V21.99l16.686 9.633zM4.943 49.303l15.686 9.056V31.912L4.942 22.856zM36.193 40.465h-.5V94.01h.5z"
    ></path>
    <path
      fill="url(#paint1_linear_319_14962)"
      d="M44.036 90.11 27.85 80.767V53.741l16.185 9.345z"
    ></path>
    <path
      fill="#fff"
      d="M44.286 90.544 27.6 80.91V53.31l16.686 9.633zM28.1 80.622l15.686 9.056V63.23L28.1 54.175zM59.35 17.835h-.5v71.999h.5z"
    ></path>
    <path
      fill="url(#paint2_linear_319_14962)"
      d="m67.193 85.532-16.186-9.345V49.162l16.186 9.345z"
    ></path>
    <path
      fill="#fff"
      d="m67.443 85.964-16.686-9.633V48.73l16.686 9.633zm-16.186-9.922 15.686 9.056V58.651l-15.686-9.056zM82.507 13.66h-.5v82.183h.5z"
    ></path>
    <path
      fill="url(#paint3_linear_319_14962)"
      d="M90.35 81.356 74.164 72.01V17.86l16.186 9.345z"
    ></path>
    <path
      fill="#fff"
      d="m90.6 81.788-16.686-9.633V17.428L90.6 27.06zm-16.186-9.922L90.1 80.922V27.35l-15.686-9.056zM105.664 10.088h-.5v79.36h.5z"
    ></path>
    <path
      fill="url(#paint4_linear_319_14962)"
      d="m113.507 77.927-16.186-9.345V40.71l16.186 9.345z"
    ></path>
    <path
      fill="#fff"
      d="m113.757 78.36-16.686-9.633v-28.45l16.686 9.633zm-16.186-9.922 15.686 9.056V50.198l-15.686-9.056zM128.821 5.106h-.5v91.359h.5z"
    ></path>
    <path
      fill="url(#paint5_linear_319_14962)"
      d="M136.664 72.944 120.479 63.6V.433l16.185 9.345z"
    ></path>
    <path
      fill="#fff"
      d="m136.914 73.377-16.685-9.633V0l16.685 9.633zm-16.186-9.922 15.686 9.056V9.922L120.728.866zM9.3 75.58a.25.25 0 0 1-.25-.25V19.668a.25.25 0 1 1 .5 0V75.33a.25.25 0 0 1-.25.25"
    ></path>
    
    {/* Animated Paths with fill="#E2EFFA" */}
    <motion.path
      fill="#E2EFFA"
      d="M17.392 61.247 1.206 51.902V24.877l16.186 9.345z"
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0,
      }}
    />
    <path
      fill="#fff"
      d="M17.392 61.497a.25.25 0 0 1-.125-.034L1.082 52.12a.25.25 0 0 1-.125-.217V24.878a.25.25 0 0 1 .375-.217l16.185 9.345a.25.25 0 0 1 .125.216v27.025a.25.25 0 0 1-.25.25m-15.936-9.74 15.686 9.057V34.367L1.456 25.31zM32.457 96.715a.25.25 0 0 1-.25-.25V42.92a.25.25 0 0 1 .5 0v53.545a.25.25 0 0 1-.25.25"
    ></path>
    <motion.path
      fill="#E2EFFA"
      d="M40.55 92.566 24.365 83.22V56.196l16.185 9.345z"
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3,
      }}
    />
    <path
      fill="#fff"
      d="M40.55 92.816a.25.25 0 0 1-.125-.034L24.24 83.438a.25.25 0 0 1-.125-.217V56.197a.25.25 0 0 1 .375-.217l16.185 9.345a.25.25 0 0 1 .125.216v27.025a.25.25 0 0 1-.25.25m-15.935-9.74L40.3 92.134V65.686l-15.685-9.057zM55.614 92.538a.25.25 0 0 1-.25-.25V20.29a.25.25 0 1 1 .5 0v71.998a.25.25 0 0 1-.25.25"
    ></path>
    <motion.path
      fill="#E2EFFA"
      d="m63.707 87.986-16.185-9.344V51.617l16.185 9.345z"
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6,
      }}
    />
    <path
      fill="#fff"
      d="M63.707 88.236a.25.25 0 0 1-.125-.033l-16.185-9.345a.25.25 0 0 1-.125-.217V51.617a.25.25 0 0 1 .375-.217l16.185 9.345a.25.25 0 0 1 .125.217v27.024a.25.25 0 0 1-.25.25m-15.935-9.739 15.685 9.056V61.106L47.772 52.05zM78.77 98.547a.25.25 0 0 1-.25-.25V16.114a.25.25 0 0 1 .5 0v82.183a.25.25 0 0 1-.25.25"
    ></path>
    <motion.path
      fill="#E2EFFA"
      d="m86.863 83.81-16.185-9.344v-54.15l16.185 9.344z"
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.9,
      }}
    />
    <path
      fill="#fff"
      d="M86.863 84.06a.25.25 0 0 1-.125-.033l-16.185-9.345a.25.25 0 0 1-.125-.216v-54.15a.25.25 0 0 1 .375-.217l16.185 9.345a.25.25 0 0 1 .125.216v54.15a.25.25 0 0 1-.25.25m-15.935-9.739 15.685 9.056V29.805l-15.685-9.056zM101.929 92.153a.25.25 0 0 1-.25-.25v-79.36a.25.25 0 1 1 .5 0v79.36a.25.25 0 0 1-.25.25"
    ></path>
    <motion.path
      fill="#E2EFFA"
      d="m110.021 80.382-16.185-9.345V43.164l16.185 9.345z"
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.2,
      }}
    />
    <path
      fill="#fff"
      d="M110.021 80.632a.25.25 0 0 1-.125-.034l-16.185-9.344a.25.25 0 0 1-.125-.217V43.164a.25.25 0 0 1 .375-.216l16.185 9.344a.25.25 0 0 1 .125.217v27.873a.25.25 0 0 1-.25.25m-15.935-9.74 15.685 9.057V52.653l-15.685-9.056zM125.085 99.17a.25.25 0 0 1-.25-.25V7.56a.25.25 0 1 1 .5 0v91.36a.25.25 0 0 1-.25.25"
    ></path>
    <motion.path
      fill="#E2EFFA"
      d="m133.177 75.4-16.185-9.346V2.889l16.185 9.345z"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    />
    <path
      fill="#fff"
      d="M133.178 75.65a.25.25 0 0 1-.125-.034l-16.186-9.345a.25.25 0 0 1-.125-.216V2.888a.25.25 0 0 1 .375-.216l16.186 9.344a.25.25 0 0 1 .125.217v63.166a.25.25 0 0 1-.25.25m-15.936-9.74 15.686 9.056V12.377l-15.686-9.056z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_319_14962"
        x1="158.48"
        x2="-5.618"
        y1="135.938"
        y2="28.565"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_319_14962"
        x1="151.073"
        x2="-13.025"
        y1="147.258"
        y2="39.886"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_319_14962"
        x1="160.113"
        x2="-3.984"
        y1="133.442"
        y2="26.069"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_319_14962"
        x1="175.182"
        x2="11.085"
        y1="110.411"
        y2="3.039"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_319_14962"
        x1="177.676"
        x2="13.578"
        y1="106.6"
        y2="-0.772"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_319_14962"
        x1="194.986"
        x2="30.889"
        y1="80.145"
        y2="-27.227"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.008" stopColor="#45B2FF"></stop>
        <stop offset="0.678" stopColor="#2BF9CD"></stop>
        <stop offset="1" stopColor="#FFAEEC"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Graph;

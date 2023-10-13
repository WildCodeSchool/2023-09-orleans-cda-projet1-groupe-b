import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
      ease: 'easeInOut',
      staggerChildren: 0.1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  animationOne: {
    opacity: 1,
    pathLength: 1,
    stroke: 'rgba(49,255,230, 1)',
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  animationTwo: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
    stroke: 'rgba(49,255,230, 0)',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

export default function Logo() {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  useEffect(() => {
    const timer = setTimeout(() => {
      cycleAnimation();
    }, 1000);

    return () => clearTimeout(timer);
  }, [cycleAnimation]);

  return (
    <>
      <motion.svg
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewBox="0 0 539 239"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M53.9339 98.9618H84.5595C79.5683 107.632 69.7798 112.815 56.7445 112.815C35.1806 112.815 24.2291 98.9618 24.2291 80.797C24.2291 62.6323 35.326 49.263 56.7445 49.263L146.974 49.0692L155.696 28.3372H56.6961C17.6388 28.3856 0.24231 53.6225 0.24231 80.9424C0.24231 108.456 17.6388 133.693 56.6961 133.693C69.5859 133.693 80.9736 130.641 89.9868 124.828V220.06L113.15 157.573V77.8907H62.511L53.9339 98.9618Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M478.379 112.815H402.493V49.2629H460.934L478.379 28.3855H379.33V133.693H460.934L478.379 112.815Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M438.692 70.3824L421.247 91.2114H521.071L538.515 70.3824H438.692Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M252.612 189.059V188.575L175.079 0.629761L122.066 133.693H137.766V133.838H198.824L190.586 113.009H154.678L175.322 60.6946L253.097 237.498V237.983L291.137 162.902H460.498L478.427 142.073H276.841L252.612 189.059Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M248.203 133.741L248.251 133.838H262.352V74.9842L293.753 127.928H307.564L338.771 74.9842V133.693L361.934 104.774V28.3855H340.225L300.634 95.2803L261.093 28.3855H239.189V113.009H229.352L238.559 133.838L248.203 133.741Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M310.617 170.022H296.079V187.17H284.982L280.96 194.92H296.079V205.189H304.947V194.92H310.617C320.648 194.92 326.22 189.204 326.22 182.423C326.172 175.738 320.648 170.022 310.617 170.022ZM310.229 187.17H304.996V177.773H310.229C314.493 177.773 317.304 179.42 317.304 182.423C317.304 185.426 314.493 187.17 310.229 187.17Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M354.956 188.962C354.956 195.017 353.841 198.698 346.912 198.698C340.079 198.698 338.868 194.969 338.868 188.962V170.022H330V190.948C330 198.505 335.137 205.189 346.912 205.189C358.687 205.189 363.824 198.505 363.824 190.948V170.022H354.956V188.962Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M378.652 170.022H369.736V205.189H393.383V197.439H378.652V170.022Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M413.396 176.416C417.952 176.416 420.471 178.645 423.427 181.696L429.921 175.98C425.269 170.604 420.568 168.666 413.445 168.666C404.092 168.666 397.648 172.929 397.648 180.146C397.648 193.273 420.132 190.464 420.132 195.356C420.132 197.342 417.273 198.505 413.687 198.505C409.084 198.505 406.612 196.325 403.608 193.225L397.163 198.941C401.233 204.366 407.048 206.352 413.639 206.352C422.846 206.352 429.436 202.138 429.436 194.969C429.436 182.277 406.952 184.699 406.952 179.759C406.952 177.385 409.374 176.416 413.396 176.416Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M443.053 177.773H460.352L466.652 170.022H434.185V205.189H460.352L466.652 197.439H443.053V177.773Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M443.053 177.773H460.352L466.652 170.022H434.185V205.189H460.352L466.652 197.439H443.053V177.773Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={animation}
          d="M448.189 191.529H460.401L466.7 183.682H454.489L448.189 191.529Z"
          stroke="white"
          stroke-width="1"
          stroke-miterlimit="10"
          fill="none"
        />
      </motion.svg>
    </>
  );
}

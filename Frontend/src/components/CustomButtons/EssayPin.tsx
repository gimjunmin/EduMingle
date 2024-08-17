"use client";

import React from 'react';
import Pin from '../../../public/images/svgs/Pin.svg';

const ButtonWithIcon: React.FC = () => {
  return (
    <button className="flex justify-center items-center">
      <Pin className="w-9 h-9 fill-point1" />
    </button>
  );
};

export default ButtonWithIcon;

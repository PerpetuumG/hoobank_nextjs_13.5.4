import React from 'react';

const Button = ({ styleTop }) => {
  return (
    <button
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styleTop}`}
      type={'button'}
    >
      Get Started
    </button>
  );
};

export default Button;

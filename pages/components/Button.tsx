import React from "react";

const Button: React.FC<IButtonProps> = (props) => {
  const { text, click } = props;
  return (
    <div className='hover:opacity-80 hover:cursor-pointer bg-[#26c000] text-[#e5e4e2] rounded w-80 h-12 my-5 flex items-center justify-center' onClick={click}>
      <div className='font-bold text-l'>
        {text}
      </div>
    </div>
  )
}

export default Button;
import React from 'react'

const Input: React.FC<IInputProps> = (props) => {
  const { placeholder, textChange, value, type, required } = props;
  return (
    <div className='my-2'>
      <input 
      className='text-black flex-1 rounded sm:text-sm pr-10 focus:ring-white-500 focus:border-white-500 w-full border-gray-300 h-10' 
      type={type} required={required} placeholder={placeholder} onChange={el => textChange(el.target.value)} value={value} />
    </div>
  )
}

export default Input;
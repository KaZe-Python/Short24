import { NextComponentType } from "next";

const Loader: NextComponentType = () => {
  return (
    <div className='rounded-full border-b-0 border-r-0 animate-spin w-40 h-40 border-[#e7e6e3] border-4 top-5'></div>
  )
}

export default Loader;
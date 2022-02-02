import type { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <div className='text-l'>
      <span>&copy; <a href='http://marquesstech.com'>Bruno Pio Cosentini</a>, 2022. All rights reserved</span>
    </div>
  )
}

export default Footer;
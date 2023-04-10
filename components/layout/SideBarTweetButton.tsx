import { useRouter } from 'next/router'
import React from 'react'
import { FaFeather } from 'react-icons/fa';

const SideBarTweetButton = () => {
    const router = useRouter();
  return (
    <div className='' onClick={()=>router.push('/')}>
        <div className="
        mt-6 
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-opacity-80
        transition
        cursor-pointer
        bg-sky-500


        ">
            {/* <p className='text-white '>Tweet</p> */}
          <FaFeather size={24} color='white'/>

        </div>
        <div className="
        mt-4
        hidden
        lg:block
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        cursor-pointer
        transition
        ">
            <p className='
            hidden
            lg:block
            font-semibold
            text-white
            text-[20px]
            '>Tweet</p>

        </div>
    </div>
  )
}

export default SideBarTweetButton
import React from 'react'

const Shimmer = () => {
    return (
        <div className='mt-2 grid grid-cols-3 gap-0'>
            {
                Array(6).fill([]).map((e, index) => (
                    <div key={index} className='mx-4 my-10 rounded-lg h-52'>
                        <div className=' bg-gray-100 dark:bg-[#2d2d2d] w-full h-full'></div>
                        <div className='w-10 h-10 mt-2 rounded-full bg-gray-100 dark:bg-[#2d2d2d]'></div>
                        <div className='w-[70%] h-3 bg-gray-100 mt-2 dark:bg-[#2d2d2d]'></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer
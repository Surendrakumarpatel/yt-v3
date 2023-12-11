import React from 'react'
 


const Header = () => {
 
  return (
    <div className='flex border-b-2 justify-center items-center w-[100%] fixed bg-white dark:bg-[#121212] dark:text-white transition-all duration-500'>
      <div className='flex w-[96%] justify-between items-center py-2 md:py-0'>
        <div className='flex items-center'>
           
          <img className='w-28 ml-5 hidden md:block' src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt="youtube" />
        </div>
         
      </div>
    </div>
  )
}

export default Header;
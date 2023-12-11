import React from 'react'
import { useEffect } from 'react';
import Avatar from 'react-avatar'; 
import { useState } from 'react';
import { YOUR_API_KEY } from '../utils/constant';
 
const VideoCart = ({ item, addWalaHai }) => {

  const [ytIcon, setYtIcon] = useState(null);
  const { snippet } = item;
  const { channelTitle, thumbnails, title, channelId } = snippet;

  useEffect(() => {
    const ytIcon = async () => {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUR_API_KEY}`);
      const jsonData = await res.json();
      const ytIcon = jsonData?.items[0]?.snippet?.thumbnails?.default?.url;
      setYtIcon(ytIcon);
    }
    ytIcon();
  }, [])

  return (
    <div className='m-1 mt-5 w-94 p-1 cursor-pointer'>
      <img className='rounded-xl w-full' src={thumbnails.medium.url} alt="thumbnails" />
      <div className='flex mt-3'>
        <div>
          <Avatar src={ytIcon} size="35" round={true} className='cursor-pointer' />
        </div>
        <ul className='ml-2 dark:text-white'>
          <li className='font-medium text-sm dark:text-white'>{title}</li>
          {
            !addWalaHai ? (<>
              <li className='text-gray-500 dark:text-white text-sm'>{channelTitle}</li>
              <li className='text-gray-500 dark:text-white text-sm'>{item?.statistics?.viewCount} views</li>
            </>
            ) : (
              <>
                <li className='text-gray-500 dark:text-white'><span className='font-bold text-xs text-black dark:text-white'>Sponsered</span> . {channelTitle}</li>

              </>
            )
          }

        </ul>
      </div>
    </div>
  )
}

export const AddVideoCart = ({ item }) => {
  return (
    <div>
      <VideoCart item={item} addWalaHai={true} />
      <button className='rounded-full py-1 bg-green-100 dark:bg-[#2d2d2d] text-blue-700 hover:bg-gray-200 font-medium w-full'>Play now</button>
    </div>
  )

}

export default VideoCart
import React from 'react'

const Video = ({item}) => {
    const {channelId, channelTitle,description, title}= item.snippet;
    const {high, medium}= item.snippet.thumbnails;


    return (
        <div className='flex m-4 dark:text-white'>
            <div>
                <img className='rounded-lg' src = {medium.url} />
            </div>
            <div className='ml-4'>
                <h1 className='font-bold mt-2'>{title}</h1>
                <p className='text-sm mt-2'>{channelTitle}</p>
                <p className='text-sm mt-2'>{description}</p>
            </div>
        </div>
    )
}

export default Video
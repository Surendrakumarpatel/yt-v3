import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Video from './Video';

const SearchVideo = () => {
    const [video, setVideo] = useState([]);
    const searchVideoItems = useSelector(store => store.app.searchVideoItems);
    
    useEffect(() => {
        setVideo(searchVideoItems);
    }, [searchVideoItems]);
     
 
    return (
        <div className='m-6'>
            {
                video.map((item) => {
                    return (
                       <div key = {item.snippet.channelId}>
                            <Video item = {item}/>
                       </div>
                    )
                })
            }

        </div>
    )
}

export default SearchVideo
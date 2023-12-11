import React, { useEffect } from 'react'
import { BASE_URL, YOUR_API_KEY } from '../utils/constant'
import VideoCart, { AddVideoCart } from './VideoCart';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { loading, setHomeVideo } from '../utils/appSlice';

const VideoContainer = () => {

  const dispatch = useDispatch();
  const { category, isLoading } = useSelector(store => store.app);
  const { video } = useSelector(store => store.app);

  useEffect(() => {
    dispatch(loading(true));
    if (category === "All") {
      const fetchVideo = async () => {
        try {
          const res = await fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUR_API_KEY}`);
          const data = await res.json();
          console.log(data);
          dispatch(setHomeVideo(data?.items === undefined ? [] : data.items));
          dispatch(loading(false));
        } catch (error) {
          console.log(error);
        }
      }
      fetchVideo();
    } else {
      const fetchVideoByKeyword = async (category) => {
        try {
          const res = await fetch(`${BASE_URL}/search?part=snippet&maxResults=50&type=video&q=${category}&key=${YOUR_API_KEY}`);
          const data = await res.json();
          dispatch(setHomeVideo([]))
          dispatch(setHomeVideo(data?.items === undefined ? [] : data.items));
          dispatch(loading(false));
        } catch (error) {
          console.log(error);
        }
      }
      fetchVideoByKeyword(category);
    }


  }, [category])


  return isLoading ? (<Shimmer />) : video && video.length === 0 ? <div className='relative top-20 text-center -z-50'><p>Some internal issue visite after few minutes!</p></div> :
    (
      <div className={`grid md:grid-cols-4 gap-0`}>
        {video[0] && <AddVideoCart item={video[video.length - 1]} />}
        {
          video.map((item) => {
            return (
              <div>
                <VideoCart item={item} />
              </div>
            )
          })
        }
      </div>
    )
}

export default VideoContainer
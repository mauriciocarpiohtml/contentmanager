import React, { useEffect, useState } from 'react'
import YoutubeCard from './YoutubeCard';

function Youtube() {
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        const searchText = 'high income skills academy';
        const url = `https://youtube138.p.rapidapi.com/search/?q=${searchText}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a47f60c2a3msh9b97514eff3e81ep1771cdjsnde4a072bc2a4',
                'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
            }
        };

        async function consultarYoutube(){
            try {
                const response = await fetch(url, options)
                const result = await response.json()
                const top = result.contents.slice(1,4)
                setVideos(top)
            } catch (error) {
                console.error(error)
            }
        }
        consultarYoutube()
    },[])
  return (
    <section className='mt-8 p-5 mb-[80px] lg:mb-[180px]'>
      <h3 className='lg:ml-16 uppercase text-left text-[#FFBE00] font-semibold text-2xl md:text-3xl'>Casos de exito</h3>
      <div className='flex justify-center items-center gap-10 flex-wrap w-[90%] mx-auto'>
        {videos.map((video)=>(
                    <YoutubeCard
                    video={video}
                    key={video.video.videoId}/>
        ))}
      </div>
    </section>
  )
}

export default Youtube

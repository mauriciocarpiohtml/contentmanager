
function YoutubeCard({video}) {
  return (
    <a href={`https://www.youtube.com/watch?v=${video.video.videoId}`} target="_blank">
     <div className='rounded-md w-[350px]  mt-10 cursor-pointer transition-all duration-300 ease-in hover:scale-110 '>
      <img
      className='rounded-md'
      src={video.video.thumbnails[1].url} 
      alt={video.video.title}/>
     </div>
    </a>
    
  )
}

export default YoutubeCard

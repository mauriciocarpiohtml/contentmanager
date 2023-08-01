import hero from '../img/bg-content.jpg'

function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  return (
    <section 
    className='w-full h-[90vh] flex justify-center items-center relative'
    style={backgroundImageStyle}>
        <div className='absolute w-full h-full bg-black opacity-[68%]'></div>
        <div className=' md:w-[50%] text-center p-5 z-10'>
            <h2 className='text-3xl lg:text-4xl font-bold uppercase text-white tracking-tight'>Crea contenido por<br/> <span className='text-[#FFBE00]'>el que te paguen </span><br/></h2>
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight">500 A 1000 U$D</h2>
            <button className='bg-[#FFBE00] px-5 py-2 text-white rounded-md mt-4 text-center'>Ver más</button>
        </div>  
    </section>
  )
}

export default Hero

import ramiro from '../img/ramiro.jpg'
import elon from '../img/elon.jpg'

function Mentores() {
  return (
    <section className='mx-auto p-5 mt-5'>
      <h3 className='lg:ml-16 text-left text-white font-semibold text-2xl md:text-3xl'>Quienes te acompañaran a lograrlo?</h3>
      <div className='flex flex-col lg:flex-row gap-20 mt-10 w-[85%] mx-auto'>
        <div className='flex flex-col gap-5 mt-5 lg:w-[50%] '>
            <h2 className='text-xl md:text-4xl font-black text-white'>Ramiro Cubria</h2>
            <p className='text-gray-300 font-semibold text-md leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque eaque qui in mollitia explicabo sint exercitationem impedit nesciunt nostrum? Et, ullam numquam? Nostrum, quis deserunt quibusdam culpa accusamus voluptas!</p>
            
        </div>
        <div className='lg:w-[50%]'>
            <img
            className='lg:w-[70%]'
            src={ramiro} 
            alt='Ramiro Cubria'/>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-20 mt-10 w-[85%] mx-auto'>
        <div className='flex flex-col gap-5 mt-5 lg:w-[50%] '>
            <h2 className='text-xl md:text-4xl font-black text-white'>Tomás Mastronardi</h2>
            <p className='text-gray-300 font-semibold text-md leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque eaque qui in mollitia explicabo sint exercitationem impedit nesciunt nostrum? Et, ullam numquam? Nostrum, quis deserunt quibusdam culpa accusamus voluptas!</p>
        </div>
        <div className='lg:w-[50%]'>
            <img
            className='lg:w-[70%] '
            src={elon} 
            alt='Elon MUSK'/>
        </div>
      </div>

    </section>
  )
}

export default Mentores

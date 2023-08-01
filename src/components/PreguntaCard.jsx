import { useState } from 'react';

function PreguntaCard({ pregunta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const toggleRespuesta = () => {
    setMostrarRespuesta((prevMostrarRespuesta) => !prevMostrarRespuesta);
  };

  return (
    <div
      className={`text-left mb-5 lg:h-[150px] flex items-center justify-between gap-3 p-5 lg:text-center border-b border-gray-800 shadow-lg cursor-pointer ${
        mostrarRespuesta ? 'lg:h-auto' : 'lg:h-[150px]'
      }`}
      onClick={toggleRespuesta}
    >
      <div className='flex flex-col w-full lg:w-[80%] lg:p-5'>
        <h3 className='text-left mt-3 text-lg lg:text-2xl text-white'>{pregunta.pregunta}</h3>
        <p
          className={`text-left mt-3 text-gray-300 mb-7 font-normal text-sm lg:text-md leading-loose ${
            mostrarRespuesta
              ? 'max-h-[200px] opacity-100 transition-all duration-500 ease-in'
              : 'max-h-0 opacity-0 transition-all duration-500 ease-out'
          }`}
        >
          {pregunta.respuesta}
        </p>
      </div>
      <svg
        className={`text-[#FFBE00] transition-transform duration-500 ${
          mostrarRespuesta ? 'rotate-45' : 'rotate-0'
        }`}
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        fill='#FFBE00'
        viewBox='0 0 16 16'
      >
        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
        <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
      </svg>
    </div>
  );
}

export default PreguntaCard;


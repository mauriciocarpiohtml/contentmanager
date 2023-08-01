

function ContenidoCard({contenido}) {
  return (
    <div className='text-left h-[140px] flex items-center justify-between p-5 lg:text-center border-b border-gray-800 shadow-lg'>
      <h4 className="w-[68%] lg:w-full text-left text-lg lg:text-2xl text-white">{contenido.nombre}</h4>
      <h4 className="text-2xl text-white font-black lg:text-5xl">{contenido.id}</h4>
    </div>
  )
}

export default ContenidoCard

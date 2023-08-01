import ContenidoCard from "./ContenidoCard"

function Contenido() {
    const contenidoCurso = [
        {nombre: 'Edición de video como los mejores de la industria', id: '01'},
        {nombre: 'Creación de guiones con Inteligencia Artificial', id: '02'},
        {nombre: 'Creación de Portadas con Inteligencia Artificial', id: '03'},
        {nombre: 'Prospección de clientes', id: '04'}
    ]
  return (
    <div div className='mt-8 p-5 w-[90%] mx-auto'>
      {contenidoCurso.map((contenido) =>(
                         <ContenidoCard
                         key={contenido.id}
                         contenido={contenido}/>
      ))}
    </div>
  )
}

export default Contenido

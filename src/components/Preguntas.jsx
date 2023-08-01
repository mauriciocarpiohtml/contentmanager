import PreguntaCard from "./PreguntaCard"

function Preguntas() {
    const preguntasFrecuentes =[

        {pregunta:'No tengo experiencia en la edición de videos, ¿Esto funcionara para mi?', respuesta:'Este curso te dará todo el conocimiento que necesitas  para pasar de no saber nada sobre negocios ni de la edición de videos a ser todo un experto. Nuestro objetivo es que si tomas este curso empieces a generar dinero rápidamente sin tener en cuenta la experiencia que tengas.'},
        {pregunta:'¿Cómo puedo pagar el curso?', respuesta:'Aceptamos pagos por Wise, Belo, Binance, transferencia en pesos, transferencia desde Estados Unidos, transferencia internacional'},
        {pregunta:'¿Cuánto tiempo dura el curso?', respuesta:'El curso estaria durando 1 mes mas o menos, se puede llegar a alargar un poco si necesitan mas clases de consulta o de explicación de algun tema que no hayan entendido pero en si, 1 mes. Obvio que una ves entres al curso vas a estar en un grupo para poder resolver tus dudas 24/7.'},
        {pregunta:'¿Cuáles son los horarios de las clases?', respuesta:'las clases en vivo serian los martes, jueves y viernes de 7:00pm a 8:30pm + el contenido de clases ya grabadas que podes ver en los horarios que mas te queden comodos. En caso de que uno de estos dias no puedas conectarte por que haces otra cosa o te surgio un imprevisto, chill por que todas las clases queda grabadas.'},
        {pregunta:'¿Puedo hacer el curso si trabajo/estudio?', respuesta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate odio totam dolore amet tempore dolor voluptatibus quibusdam. Rerum minus aliquam eveniet ad quam tempora.'},
    ]
  return (
    <section className='mt-20 p-5 mb-10'>
       <h3 className='lg:ml-16 text-left text-white font-semibold text-2xl md:text-3xl'>Preguntas frecuentes</h3>
       <div className='mt-8 mx-left lg:p-5 w-[90%] lg:mx-auto'>
        {preguntasFrecuentes.map((pregunta)  =>(
                                <PreguntaCard
                                pregunta={pregunta}
                                key={pregunta.respuesta}/>
        ))}
       </div>
    </section>
  )
}

export default Preguntas

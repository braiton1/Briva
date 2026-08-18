import exterior from '../assets/jarilla-exterior-web.jpg'
import interior from '../assets/jarilla-interior-web.jpg'
import deck from '../assets/jarilla-deck-web.jpg'

export type Cabin = { id:string; name:string; guests:string; size:string; description:string; price:string; image:string; amenities:string[] }
export const content = {
  brand:'Casa Jarilla', phone:'5492604559068', exterior, interior, deck,
  cabins:[
    {id:'chica',name:'Jarilla Chica',guests:'2 huéspedes',size:'38 m²',description:'Un refugio íntimo para bajar el ritmo y mirar la montaña desde la cama.',price:'Desde $95.000 por noche',image:interior,amenities:['Cama queen','Estufa a leña','Cocina equipada','Deck privado']},
    {id:'familiar',name:'Jarilla Familiar',guests:'Hasta 4 huéspedes',size:'58 m²',description:'Más espacio para compartir la montaña en pareja, familia o con amigos.',price:'Desde $120.000 por noche',image:exterior,amenities:['Dos dormitorios','Parrilla','Cocina equipada','Deck panorámico']},
  ] satisfies Cabin[],
  activities:[['Embalse Potrerillos','A 15 minutos'],['Senderos de montaña','Desde la cabaña'],['Cacheuta termal','A 35 minutos'],['Bodegas de Luján','A 45 minutos']],
  faqs:[['¿Cómo se confirma una reserva?','Luego de consultar disponibilidad, te enviamos el valor final y los datos para realizar la seña.'],['¿Cuál es la estadía mínima?','La estadía mínima habitual es de dos noches. En fines de semana largos puede variar.'],['¿Se aceptan mascotas?','Aceptamos una mascota pequeña en Jarilla Familiar, siempre con consulta previa.'],['¿Cómo es el acceso?','Se llega en vehículo por camino de montaña. En condiciones normales no es necesaria una camioneta.']],
}

import heroImage from '../assets/lumina-hero-web.jpg'
import sofiaImage from '../assets/lumina-sofia-web.jpg'

export type NavigationItem = { label: string; href: string }
export type Service = { number: string; name: string; description: string; duration: string; price: string }
export type Testimonial = { quote: string; author: string }
export type ProcessStep = { number: string; title: string; description: string }
export type FAQItem = { question: string; answer: string }

export const siteContent = {
  brand: 'Lúmina',
  whatsappUrl: 'https://wa.me/5491141972952?text=Hola%20Briva%2C%20vi%20la%20demo%20L%C3%BAmina%20y%20quiero%20una%20web%20para%20mi%20negocio%20como%20esta.',
  navigation: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre nosotras', href: '#nosotras' },
    { label: 'Experiencias', href: '#resultados' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: 'Estética facial en Godoy Cruz',
    title: 'Tu belleza natural, cuidada con atención.',
    description: 'Tratamientos faciales, cejas y pestañas en un espacio cálido, profesional y pensado para vos.',
    image: heroImage,
    imageAlt: 'Profesional realizando un tratamiento facial en Lúmina Estudio',
    location: 'Godoy Cruz, Mendoza',
    details: ['Atención personalizada', 'Solo con turno previo'],
  },
  services: [
    { number: '01', name: 'Limpieza facial profunda', description: 'Higiene, extracción e hidratación adaptadas a las necesidades de tu piel.', duration: '75 min', price: '$24.000' },
    { number: '02', name: 'Dermaplaning', description: 'Exfoliación suave para mejorar la textura y devolver luminosidad al rostro.', duration: '60 min', price: '$26.000' },
    { number: '03', name: 'Diseño y perfilado de cejas', description: 'Diseño personalizado respetando la forma natural de tu rostro.', duration: '30 min', price: '$10.000' },
    { number: '04', name: 'Lifting de pestañas', description: 'Curvatura y definición para realzar tu mirada sin extensiones.', duration: '60 min', price: '$18.000' },
    { number: '05', name: 'Combo mirada', description: 'Perfilado de cejas y lifting de pestañas en una misma visita.', duration: '90 min', price: '$26.000' },
  ] satisfies Service[],
  about: {
    image: sofiaImage,
    imageAlt: 'Sofía, responsable de Lúmina Estudio',
    title: 'Un espacio chico, una atención muy personal.',
    paragraphs: [
      'Soy Sofía y creé Lúmina para ofrecer una experiencia de cuidado cercana, tranquila y profesional. Acá cada turno tiene su tiempo: primero escuchamos qué necesitás y después elegimos juntas el tratamiento.',
      'No buscamos cambiar tus rasgos. Queremos acompañarte a cuidar tu piel y realzar tu belleza natural con resultados sutiles.',
    ],
    facts: [{ value: '+4 años', label: 'de experiencia' }, { value: '1 a 1', label: 'atención personalizada' }],
  },
  testimonials: [
    { quote: 'Me explicó cada paso y adaptó la limpieza a mi piel. Salí con la cara luminosa, pero sobre todo muy tranquila.', author: 'Camila, limpieza facial' },
    { quote: 'El perfilado quedó súper natural. Se nota que Sofi se toma el tiempo para mirar tu rostro y no hace lo mismo en todas.', author: 'Martina, diseño de cejas' },
    { quote: 'El lugar es hermoso y cálido, sin sentirse pretencioso. Reservé por WhatsApp y fue todo muy simple.', author: 'Julieta, lifting de pestañas' },
  ] satisfies Testimonial[],
  processSteps: [
    { number: '01', title: 'Escribinos', description: 'Contanos qué te gustaría mejorar o qué tratamiento te interesa.' },
    { number: '02', title: 'Elegimos el turno', description: 'Te orientamos y coordinamos el horario que mejor te quede.' },
    { number: '03', title: 'Disfrutá tu momento', description: 'Te esperamos con todo preparado y el tiempo reservado para vos.' },
  ] satisfies ProcessStep[],
  faqs: [
    { question: '¿Cómo reservo un turno?', answer: 'Escribinos por WhatsApp, elegimos juntas el tratamiento y coordinamos el día y horario disponible.' },
    { question: '¿Necesito saber qué tratamiento elegir?', answer: 'No. Podés contarnos qué querés mejorar y te orientamos antes de confirmar el turno.' },
    { question: '¿Con cuánto tiempo debo cancelar?', answer: 'Te pedimos avisar con al menos 24 horas para poder ofrecerle el horario a otra persona.' },
    { question: '¿Qué medios de pago aceptan?', answer: 'Podés abonar en efectivo o transferencia. Los valores publicados corresponden a esos medios de pago.' },
  ] satisfies FAQItem[],
  location: {
    title: 'Cerca tuyo, en Godoy Cruz.',
    description: 'Estamos en una zona tranquila y de fácil acceso. La dirección exacta se comparte al confirmar el turno.',
    schedule: 'Lunes a viernes · 9 a 19 h\nSábados · 9 a 14 h',
    attention: 'Exclusivamente con turno previo',
  },
}

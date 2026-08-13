import heroImage from '../assets/miga-hero-web.jpg'
import breadImage from '../assets/miga-pan-web.jpg'
import cakeImage from '../assets/miga-torta-web.jpg'

export type Category = 'Todos' | 'Panadería' | 'Dulce' | 'Cafetería'
export type Product = { id: number; name: string; category: Exclude<Category, 'Todos'>; description: string; price: number; image: string; imagePosition?: string; badge?: string }

export const content = {
  brand: 'Miga',
  phone: '5491141972952',
  heroImage,
  products: [
    { id: 1, name: 'Medialuna de manteca', category: 'Panadería', description: 'Hojaldrada, brillante y recién salida del horno.', price: 2500, image: heroImage, imagePosition: '78% 68%', badge: 'La favorita' },
    { id: 2, name: 'Pan de campo', category: 'Panadería', description: 'Masa madre, fermentación lenta y corteza crocante.', price: 8500, image: breadImage },
    { id: 3, name: 'Torta de chocolate', category: 'Dulce', description: 'Porción húmeda con ganache casera.', price: 7500, image: cakeImage, badge: 'Nuevo' },
    { id: 4, name: 'Café con leche', category: 'Cafetería', description: 'Espresso doble y leche texturizada.', price: 4800, image: heroImage, imagePosition: '94% 70%' },
    { id: 5, name: 'Focaccia de estación', category: 'Panadería', description: 'Masa aireada, vegetales asados y oliva mendocino.', price: 9500, image: breadImage, imagePosition: '30% 50%' },
    { id: 6, name: 'Merienda Miga', category: 'Cafetería', description: 'Café con leche, dos medialunas y jugo de naranja.', price: 13500, image: heroImage, imagePosition: '74% 55%', badge: 'Combo' },
    { id: 7, name: 'Roll de canela', category: 'Dulce', description: 'Masa tierna, canela y glaseado suave de limón.', price: 4200, image: heroImage, imagePosition: '35% 68%' },
    { id: 8, name: 'Baguette rústica', category: 'Panadería', description: 'Corteza fina, miga aireada y fermentación lenta.', price: 5200, image: breadImage, imagePosition: '72% 45%' },
    { id: 9, name: 'Cheesecake de frutos rojos', category: 'Dulce', description: 'Porción cremosa con salsa casera de estación.', price: 8200, image: cakeImage, imagePosition: '70% 52%' },
    { id: 10, name: 'Flat white', category: 'Cafetería', description: 'Espresso doble con leche sedosa y sabor intenso.', price: 4300, image: heroImage, imagePosition: '96% 55%' },
    { id: 11, name: 'Sándwich de focaccia', category: 'Panadería', description: 'Focaccia, vegetales grillados, queso y hojas frescas.', price: 11000, image: breadImage, imagePosition: '46% 48%', badge: 'Almuerzo' },
    { id: 12, name: 'Cookie de chocolate', category: 'Dulce', description: 'Grande, crocante por fuera y húmeda por dentro.', price: 3500, image: cakeImage, imagePosition: '34% 55%' },
  ] satisfies Product[],
}

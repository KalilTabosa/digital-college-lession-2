import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { ProductsList } from './products-list'

const modalHandler = Modal()
const sidebarHandler = Sidebar()
const productsList = ProductsList()

const products = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 11 Graphite Gray 6GB Ram 128GB Rom',
    description:
      'Smartphone Xiaomi Redmi Note 11 Dual 128gb 6gb Ram - Graphite',
    thumbnail: 'https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg'
  },
  {
    id: 2,
    name: 'Smartphone Samsung Galaxy A23 Azul 128GB 4GB RAM bateria 5000mAh Câmera Quádrupla Traseira de 50MP',
    description:
      'Smartphone Samsung Galaxy A23 Azul 128GB 4GB RAM bateria 5000mAh Câmera Quádrupla Traseira de 50MP',
    thumbnail: 'https://m.media-amazon.com/images/I/716+SQdPpQL._AC_SX679_.jpg'
  },
  {
    id: 2,
    name: 'Apple iPhone 11 (64 GB) Branco',
    description:
      'Tudo na medida certa. Novo sistema de câmera e bateria que dura o dia todo.',
    thumbnail: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg'
  },
  {
    id: 2,
    name: 'dsdss dsds',
    description:
      'Tudo na medida certa. Novo sistema de câmera e bateria que dura o dia todo.',
    thumbnail: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg'
  }
]

productsList.render(products)
modalHandler.init()
sidebarHandler.init()

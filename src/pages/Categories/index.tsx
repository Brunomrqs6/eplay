import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import Resident from '../../assets/images/resident.png'
import Diablo from '../../assets/images/diablo.png'
import Zelda from '../../assets/images/zelda.png'
import StarWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: Resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: Resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: Resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: Resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Diablo IV é um RPG',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: Diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Diablo IV é um RPG',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: StarWars
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Diablo IV é um RPG',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: Zelda
  },
  {
    id: 8,
    category: 'RPG',
    description: 'Diablo IV é um RPG',
    title: 'Residnt Evil',
    system: 'Windows',
    infos: ['17/05'],
    image: Resident
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories

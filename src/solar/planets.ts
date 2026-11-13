type Planet = {
  id: string
  name: string
  kind: string
  year: string
  description: string
  texture: string
  color: string
  orbit: number
  radius: number
  phase: number
  speed: number
  tilt: number
}

// Raios, distâncias e velocidades da cena são ilustrativos.
export const PLANETS = [
  {
    id: 'sun', name: 'Sol', kind: 'Estrela', year: '',
    description: 'A gravidade do Sol mantém os planetas em órbita.',
    texture: 'sun', color: '#ffb353', orbit: 0, radius: 3.7, phase: 0, speed: 0, tilt: 0,
  },
  {
    id: 'mercury', name: 'Mercúrio', kind: '1º planeta · Rochoso', year: '88 dias terrestres',
    description: 'É o menor planeta e o mais próximo do Sol.',
    texture: 'mercury', color: '#b7aeac', orbit: 7, radius: 0.53, phase: -0.92, speed: 0.42, tilt: 0,
  },
  {
    id: 'venus', name: 'Vênus', kind: '2º planeta · Rochoso', year: '225 dias terrestres',
    description: 'Sua atmosfera densa retém calor e faz dele o planeta mais quente.',
    texture: 'venus_atmosphere', color: '#e6bd87', orbit: 10, radius: 0.88, phase: 2.23, speed: 0.27, tilt: 177.4,
  },
  {
    id: 'earth', name: 'Terra', kind: '3º planeta · Rochoso', year: '365 dias terrestres',
    description: 'Os oceanos cobrem a maior parte da superfície do nosso planeta.',
    texture: 'earth_daymap', color: '#68acf3', orbit: 14, radius: 1, phase: 0.32, speed: 0.2, tilt: 23.4,
  },
  {
    id: 'mars', name: 'Marte', kind: '4º planeta · Rochoso', year: '687 dias terrestres',
    description: 'O óxido de ferro dá o tom avermelhado à superfície.',
    texture: 'mars', color: '#dc815e', orbit: 18, radius: 0.73, phase: 3.49, speed: 0.15, tilt: 25.2,
  },
  {
    id: 'jupiter', name: 'Júpiter', kind: '5º planeta · Gigante gasoso', year: 'Cerca de 12 anos terrestres',
    description: 'O maior planeta abriga a Grande Mancha Vermelha, uma enorme tempestade.',
    texture: 'jupiter', color: '#d8aa85', orbit: 25, radius: 2.85, phase: -1.95, speed: 0.095, tilt: 3.1,
  },
  {
    id: 'saturn', name: 'Saturno', kind: '6º planeta · Gigante gasoso', year: 'Cerca de 29 anos terrestres',
    description: 'Seus anéis são formados principalmente por partículas de gelo.',
    texture: 'saturn', color: '#e3caa1', orbit: 34, radius: 2.35, phase: 0.45, speed: 0.068, tilt: 26.7,
  },
  {
    id: 'uranus', name: 'Urano', kind: '7º planeta · Gigante de gelo', year: 'Cerca de 84 anos terrestres',
    description: 'Seu eixo é tão inclinado que o planeta gira quase de lado.',
    texture: 'uranus', color: '#9bdee5', orbit: 43, radius: 1.63, phase: 2.68, speed: 0.045, tilt: 97.8,
  },
  {
    id: 'neptune', name: 'Netuno', kind: '8º planeta · Gigante de gelo', year: 'Cerca de 165 anos terrestres',
    description: 'É o planeta mais distante do Sol e tem ventos muito rápidos.',
    texture: 'neptune', color: '#799cdb', orbit: 52, radius: 1.56, phase: -0.55, speed: 0.033, tilt: 28.3,
  },
] as const satisfies readonly Planet[]

export const SECRET_PLANET = {
  id: 'gaguinho', name: 'Mundo Gaguinho', kind: 'Easter egg · Mundo fictício', year: '',
  description: 'Além de Netuno, um mar rosa banha vários continentes. Em um deles, as costas desenham as orelhas e o focinho do Gaguinho.',
  texture: 'mundo_gaguinho', color: '#ff83a3', orbit: 65, radius: 2.85, phase: 0.52, speed: 0.021, tilt: 9,
} as const satisfies Planet

export const SOLAR_BODIES = [...PLANETS, SECRET_PLANET]
export type Body = typeof SOLAR_BODIES[number]
export type BodyId = Body['id']

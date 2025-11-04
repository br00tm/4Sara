import type { EraSlug } from './eras'

export type TaskMood = 'cozy' | 'adventure' | 'creative' | 'pamper' | 'nostalgic'

export interface RomanticTask {
  id: string
  title: string
  prompt: string
  mood: TaskMood
  bestWith?: EraSlug[]
}

export const romanticTasks: RomanticTask[] = [
  {
    id: 'mini-votos',
    title: 'Mini votos à luz de velas',
    prompt:
      'Reservem dez minutos para escrever uma promessa rápida para a próxima semana. Leiam em voz alta com velas acesas e guardem os bilhetes na carteira.',
    mood: 'creative',
    bestWith: ['lover', 'ttpd'],
  },
  {
    id: 'meia-noite-na-estrada',
    title: 'Passeio de carro à meia-noite',
    prompt:
      'Coloquem Midnights para tocar, peguem uma bebida favorita para viagem e dirijam com as janelas semiabertas enquanto contam a última obsessão ou crush musical.',
    mood: 'adventure',
    bestWith: ['midnights', 'reputation'],
  },
  {
    id: 'folklore-contos',
    title: 'Troca de histórias Folklore',
    prompt:
      'Escolham um canto aconchegante e contem uma história (real ou inventada) onde vocês dois são os protagonistas que se encontram no final.',
    mood: 'cozy',
    bestWith: ['folklore', 'evermore'],
  },
  {
    id: 'baile-na-cozinha',
    title: 'Baile na cozinha',
    prompt:
      'Apaguem as luzes, deixem só abajures ou fairy lights e dancem descalços ao som da música tema da noite como se fosse a última música do show.',
    mood: 'nostalgic',
    bestWith: ['fearless', 'debut', 'red'],
  },
  {
    id: 'playlist-polaroids',
    title: 'Playlist + polaroids',
    prompt:
      'Montem uma playlist com seis músicas que resumam a fase atual do relacionamento. Façam selfies ou fotos para a capa e batizem com a data de hoje.',
    mood: 'creative',
    bestWith: ['1989', 'lover'],
  },
  {
    id: 'microaventuras',
    title: 'Lista de microaventuras',
    prompt:
      'Passeiem por um bairro novo, compartilhem uma sobremesa e anotem três microaventuras que querem viver antes da próxima estação.',
    mood: 'adventure',
    bestWith: ['1989', 'midnights'],
  },
  {
    id: 'noite-de-poesia',
    title: 'Noite de massa e poesia',
    prompt:
      'Cozinhem uma massa juntos, sirvam vinho ou mocktail e troquem haicais ou frases curtinhas sobre o que mais amaram no dia.',
    mood: 'cozy',
    bestWith: ['ttpd', 'evermore'],
  },
  {
    id: 'caca-memorias',
    title: 'Caça ao tesouro das memórias',
    prompt:
      'Cada um esconde três objetos ou fotos pela casa. Deixem pistas que lembrem o momento e, quando o outro encontrar, contem a história inteira outra vez.',
    mood: 'nostalgic',
    bestWith: ['fearless', 'red', 'lover'],
  },
  {
    id: 'cartas-estrelas',
    title: 'Cartas sob as estrelas',
    prompt:
      'Estendam cobertores no chão (ou acendam luzinhas), escrevam uma carta “abrir em cinco anos” e lacrem juntas com fita ou selo.',
    mood: 'nostalgic',
    bestWith: ['folklore', 'evermore', 'midnights'],
  },
  {
    id: 'encontro-reputation',
    title: 'Encontro Reputation',
    prompt:
      'Vista-se de preto, combinem um ponto secreto (nem que seja a sacada) e façam planos ousados para um próximo date com vibe missão secreta.',
    mood: 'adventure',
    bestWith: ['reputation'],
  },
  {
    id: 'amanhecer-doce',
    title: 'Café da manhã ao nascer do sol',
    prompt:
      'Acordem antes do amanhecer, montem uma bancada de panquecas com toppings diferentes e tomem café assistindo ao céu clarear.',
    mood: 'cozy',
    bestWith: ['debut', 'fearless', 'lover'],
  },
  {
    id: 'tour-da-sala',
    title: 'Tour das Eras na sala',
    prompt:
      'Criem um mini setlist de seis músicas que representem suas melhores eras, improvisem luzes ou figurinos e façam o show particular na sala.',
    mood: 'creative',
    bestWith: ['lover', 'midnights', '1989'],
  },
]

export const getRandomTask = () => romanticTasks[Math.floor(Math.random() * romanticTasks.length)]

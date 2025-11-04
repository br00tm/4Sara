export type EraSlug =
  | 'debut'
  | 'fearless'
  | 'speak-now'
  | 'red'
  | '1989'
  | 'reputation'
  | 'lover'
  | 'folklore'
  | 'evermore'
  | 'midnights'
  | 'ttpd'
  | 'showgirl'

export interface EraTheme {
  accent: string
  accentSoft: string
  background: string
  cardGlow: string
}

export interface EraSong {
  title: string
  url: string
}

export interface EraImage {
  src: string
  alt: string
}

export interface Era {
  id: EraSlug
  title: string
  period: string
  quote: string
  quoteSource?: string
  summary: string
  song: EraSong
  theme: EraTheme
  images: EraImage[]
}

export const eras: Era[] = [
  {
    id: 'showgirl',
    title: 'The Life of a Showgirl Era',
    period: '2025 - agora',
    quote: '"Hand in hand under marquee lights, you swear I am your favorite scene."',
    quoteSource: 'The Fate of Ophelia',
    summary:
      'Prometo te amar com calma nos dias comuns e com brilho de show nas noites especiais.',
    song: {
      title: 'The Fate of Ophelia',
      url: 'https://open.spotify.com/track/53iuhJlwXhSER5J2IYYv1W',
    },
    theme: {
      accent: '#f7c948',
      accentSoft: 'rgba(247, 201, 72, 0.45)',
      background: 'linear-gradient(135deg, rgba(247,201,72,0.65), rgba(236,72,153,0.55))',
      cardGlow: 'rgba(247, 201, 72, 0.4)',
    },
    images: [
      {
        src: '/assets/photos/1762298664000.jpg',
        alt: 'Nós dois abraçados em clima showgirl, cheios de brilho.',
      },
      {
        src: '/assets/eras/showgirl.svg',
        alt: 'Gradiente vibrante inspirado na era The Life of a Showgirl.',
      },
    ],
  },
  {
    id: 'lover',
    title: 'Lover Era',
    period: '2019 - 2020',
    quote: '"I take this magnetic force of a man to be my lover."',
    quoteSource: 'Lover',
    summary:
      'Cada batida do meu coração sussurra: eu escolho você, hoje e sempre.',
    song: {
      title: 'Lover',
      url: 'https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI',
    },
    theme: {
      accent: '#f7b4d6',
      accentSoft: 'rgba(251, 191, 248, 0.45)',
      background: 'linear-gradient(135deg, rgba(249,168,212,0.65), rgba(125,211,252,0.55))',
      cardGlow: 'rgba(249, 168, 212, 0.35)',
    },
    images: [
      {
        src: '/assets/photos/1762298664004.jpg',
        alt: 'Nós dois de mãos dadas sob um céu cor-de-rosa estilo Lover.',
      },
      {
        src: '/assets/eras/lover.svg',
        alt: 'Gradiente em tons pastel inspirado na Lover Era.',
      },
    ],
  },
  {
    id: 'midnights',
    title: 'Midnights Era',
    period: '2022 - 2023',
    quote: '"I just want to stay in that lavender haze."',
    quoteSource: 'Lavender Haze',
    summary:
      'O nosso amor é meu lugar seguro, meu palco favorito e meu melhor refrão.',
    song: {
      title: 'Lavender Haze',
      url: 'https://open.spotify.com/track/2KkIiEt1WIHOYItqkD30kR',
    },
    theme: {
      accent: '#6d9bff',
      accentSoft: 'rgba(109, 155, 255, 0.45)',
      background: 'linear-gradient(135deg, rgba(77,91,255,0.6), rgba(18,10,55,0.8))',
      cardGlow: 'rgba(109, 155, 255, 0.35)',
    },
    images: [
      {
        src: '/assets/photos/1762298664010.jpeg',
        alt: 'Nós dois juntos ao luar, remetendo à era Midnights.',
      },
      {
        src: '/assets/eras/midnights.svg',
        alt: 'Gradiente azul profundo com brilho de estrelas para a Midnights Era.',
      },
    ],
  },
  {
    id: 'folklore',
    title: 'Folklore Era',
    period: '2020 - 2021',
    quote: '"You put me on and said I was your favorite."',
    quoteSource: 'cardigan',
    summary:
      'Vamos continuar escrevendo capítulos onde o final feliz é só o começo.',
    song: {
      title: 'cardigan',
      url: 'https://open.spotify.com/track/4R2kfaDFhslZEMJqAFNpdd',
    },
    theme: {
      accent: '#d8d2c2',
      accentSoft: 'rgba(216, 210, 194, 0.4)',
      background: 'linear-gradient(135deg, rgba(216,210,194,0.5), rgba(95,91,81,0.6))',
      cardGlow: 'rgba(216, 210, 194, 0.32)',
    },
    images: [
      {
        src: '/assets/photos/1762298664015.png',
        alt: 'Nós dois em um cenário aconchegante que lembra a era Folklore.',
      },
      {
        src: '/assets/eras/folklore.svg',
        alt: 'Gradiente quente e suave inspirado na Folklore Era.',
      },
    ],
  },
  {
    id: 'evermore',
    title: 'Evermore Era',
    period: '2020 - 2021',
    quote: '"Wherever you stray, I follow."',
    quoteSource: 'willow',
    summary:
      'Nada é mais bonito do que dividir sonhos e cobertas com você.',
    song: {
      title: 'willow',
      url: 'https://open.spotify.com/track/0lx2cLdOt3piJbcaXIV74f',
    },
    theme: {
      accent: '#f1ba7b',
      accentSoft: 'rgba(241, 186, 123, 0.4)',
      background: 'linear-gradient(135deg, rgba(241,186,123,0.55), rgba(140,59,30,0.65))',
      cardGlow: 'rgba(241, 186, 123, 0.32)',
    },
    images: [
      {
        src: '/assets/photos/1762298664021.jpg',
        alt: 'Nós dois em clima outonal representando a era Evermore.',
      },
      {
        src: '/assets/eras/evermore.svg',
        alt: 'Gradiente dourado e cobre inspirado na Evermore Era.',
      },
    ],
  },
  {
    id: '1989',
    title: '1989 Era',
    period: '2014 - 2017',
    quote: '"And when we go crashing down, we come back every time."',
    quoteSource: 'Style (Taylor\'s Version)',
    summary:
      'Você é o verso que faltava na canção que eu sempre quis cantar.',
    song: {
      title: "Style (Taylor's Version)",
      url: 'https://open.spotify.com/track/4lIxdJw6W3Fg4vUIYCB0S5',
    },
    theme: {
      accent: '#9bd6ff',
      accentSoft: 'rgba(155, 214, 255, 0.45)',
      background: 'linear-gradient(135deg, rgba(155,214,255,0.6), rgba(31,106,201,0.7))',
      cardGlow: 'rgba(155, 214, 255, 0.33)',
    },
    images: [
      {
        src: '/assets/photos/1762298664026.jpg',
        alt: 'Nós dois sorrindo em clima urbano, bem era 1989.',
      },
      {
        src: '/assets/eras/1989.svg',
        alt: 'Gradiente azul ceu inspirado na 1989 Era.',
      },
    ],
  },
  {
    id: 'reputation',
    title: 'Reputation Era',
    period: '2017 - 2019',
    quote: '"You must like me for me."',
    quoteSource: 'Delicate',
    summary:
      'Nosso amor é constelação: mesmo de olhos fechados, eu encontro o caminho até você.',
    song: {
      title: 'Delicate',
      url: 'https://open.spotify.com/track/6NFyWDv5CjfwuzoCkw47Xf',
    },
    theme: {
      accent: '#d7d7d7',
      accentSoft: 'rgba(215, 215, 215, 0.35)',
      background: 'linear-gradient(135deg, rgba(215,215,215,0.5), rgba(29,29,29,0.8))',
      cardGlow: 'rgba(215, 215, 215, 0.28)',
    },
    images: [
      {
        src: '/assets/photos/1762298664030.jpg',
        alt: 'Nós dois em pose confiante inspirada na era Reputation.',
      },
      {
        src: '/assets/eras/reputation.svg',
        alt: 'Gradiente monocromatico inspirado na Reputation Era.',
      },
    ],
  },
  {
    id: 'red',
    title: 'Red Era',
    period: '2012 - 2014',
    quote: '"You told me about your past thinking your future was me."',
    quoteSource: 'All Too Well (10 Minute Version) (Taylor\'s Version)',
    summary:
      'Segurar sua mão transforma qualquer segunda-feira em noite estrelada.',
    song: {
      title: "All Too Well (10 Minute Version) (Taylor's Version)",
      url: 'https://open.spotify.com/track/04m2nJR2Ia6d1ZOt8gi5xA',
    },
    theme: {
      accent: '#ff9a9e',
      accentSoft: 'rgba(255, 154, 158, 0.4)',
      background: 'linear-gradient(135deg, rgba(255,154,158,0.55), rgba(194,27,49,0.7))',
      cardGlow: 'rgba(255, 154, 158, 0.32)',
    },
    images: [
      {
        src: '/assets/photos/1762298664037.jpg',
        alt: 'Nós dois em um abraço quente evocando a era Red.',
      },
      {
        src: '/assets/eras/red.svg',
        alt: 'Gradiente vermelho saturado inspirado na Red Era.',
      },
    ],
  },
  {
    id: 'speak-now',
    title: 'Speak Now Era',
    period: '2010 - 2012',
    quote: '"Please don\'t be in love with someone else."',
    quoteSource: 'Enchanted',
    summary:
      'Que nossos planos tenham o tamanho da nossa coragem de amar.',
    song: {
      title: "Enchanted (Taylor's Version)",
      url: 'https://open.spotify.com/track/10eBRyImhfqVvkiVEGf0N0',
    },
    theme: {
      accent: '#caa5f5',
      accentSoft: 'rgba(202, 165, 245, 0.4)',
      background: 'linear-gradient(135deg, rgba(202,165,245,0.55), rgba(75,44,130,0.75))',
      cardGlow: 'rgba(202, 165, 245, 0.32)',
    },
    images: [
      {
        src: '/assets/photos/1762298664042.jpg',
        alt: 'Nós dois vivendo um momento mágico digno da era Speak Now.',
      },
      {
        src: '/assets/eras/speak-now.svg',
        alt: 'Gradiente roxo inspirado na Speak Now Era.',
      },
    ],
  },
  {
    id: 'fearless',
    title: 'Fearless Era',
    period: '2008 - 2010',
    quote: '"Marry me Juliet, you will never have to be alone."',
    quoteSource: 'Love Story (Taylor\'s Version)',
    summary:
      'Quando penso em futuro, só consigo imaginar seu sorriso abrindo a porta de casa.',
    song: {
      title: "Love Story (Taylor's Version)",
      url: 'https://open.spotify.com/track/1vrd6UOGamcKNGnSHJQlSt',
    },
    theme: {
      accent: '#f8e3a0',
      accentSoft: 'rgba(248, 227, 160, 0.4)',
      background: 'linear-gradient(135deg, rgba(248,227,160,0.55), rgba(194,136,43,0.7))',
      cardGlow: 'rgba(248, 227, 160, 0.3)',
    },
    images: [
      {
        src: '/assets/photos/1762298664046.jpg',
        alt: 'Nós dois dançando felizes na vibe da era Fearless.',
      },
      {
        src: '/assets/eras/fearless.svg',
        alt: 'Gradiente dourado inspirado na Fearless Era.',
      },
    ],
  },
  {
    id: 'debut',
    title: 'Debut Era',
    period: '2006 - 2008',
    quote: '"When you think Tim McGraw, I hope you think of me."',
    quoteSource: 'Tim McGraw',
    summary:
      'Nosso amor é meu norte: onde você estiver, é lá que eu quero ficar.',
    song: {
      title: 'Tim McGraw',
      url: 'https://open.spotify.com/track/0Om9WAB5RS09L80DyOfTNa',
    },
    theme: {
      accent: '#a8d8a0',
      accentSoft: 'rgba(168, 216, 160, 0.4)',
      background: 'linear-gradient(135deg, rgba(168,216,160,0.55), rgba(63,111,69,0.65))',
      cardGlow: 'rgba(168, 216, 160, 0.3)',
    },
    images: [
      {
        src: '/assets/photos/1762298664068.png',
        alt: 'Nós dois em clima country doce, lembrando a era Debut.',
      },
      {
        src: '/assets/eras/debut.svg',
        alt: 'Gradiente verde inspirado na Debut Era.',
      },
    ],
  },
  {
    id: 'ttpd',
    title: 'The Tortured Poets Era',
    period: '2024 - em diante',
    quote: '"I love you."',
    quoteSource: 'Fortnight (feat. Post Malone)',
    summary:
      'Até nas páginas mais sombrias, eu encontro luz quando penso em nós dois.',
    song: {
      title: 'Fortnight (feat. Post Malone)',
      url: 'https://open.spotify.com/track/2OzhQlSqBEmt7hmkYxfT6m',
    },
    theme: {
      accent: '#e4e0d5',
      accentSoft: 'rgba(228, 224, 213, 0.4)',
      background: 'linear-gradient(135deg, rgba(228,224,213,0.55), rgba(74,78,92,0.7))',
      cardGlow: 'rgba(228, 224, 213, 0.3)',
    },
    images: [
      {
        src: '/assets/photos/1762298664073.jpg',
        alt: 'Nós dois em foto intimista para a era The Tortured Poets.',
      },
      {
        src: '/assets/eras/ttpd.svg',
        alt: 'Gradiente neutro inspirado em The Tortured Poets Era.',
      },
    ],
  },
]

export const eraMap = eras.reduce<Record<EraSlug, Era>>((acc, era) => {
  acc[era.id] = era
  return acc
}, {} as Record<EraSlug, Era>)


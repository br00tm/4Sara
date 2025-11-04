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
  tagline: string
  quote: string
  quoteSource?: string
  summary: string
  song: EraSong
  theme: EraTheme
  images: EraImage[]
}

export const eras: Era[] = [
  {
    id: 'lover',
    title: 'Lover Era',
    period: '2019 — 2020',
    tagline: 'Soft pastels, handwritten vows, and a world built for two.',
    quote: '“I\'ve loved you three summers now, honey, I want ’em all.”',
    quoteSource: 'Lover',
    summary:
      'Holding hands in the pink glow of sunrise, promising to keep choosing each other—this era is unabashedly romantic.',
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
        src: '/assets/eras/lover.svg',
        alt: 'Soft pastel gradient inspired by the Lover era.',
      },
    ],
  },
  {
    id: 'midnights',
    title: 'Midnights Era',
    period: '2022 — 2023',
    tagline: 'Late night confessions, candlelight playlists, and sequined skies.',
    quote: '“Meet me at midnight.”',
    quoteSource: 'Lavender Haze',
    summary:
      'Electric-blue nights curled up on the sofa, whispering dreams while the city sleeps—this era is all about intimate midnight magic.',
    song: {
      title: 'Lavender Haze',
      url: 'https://open.spotify.com/track/7Dr1qMF9CZY0dA7C0h22xb',
    },
    theme: {
      accent: '#6d9bff',
      accentSoft: 'rgba(109, 155, 255, 0.45)',
      background: 'linear-gradient(135deg, rgba(77,91,255,0.6), rgba(18,10,55,0.8))',
      cardGlow: 'rgba(109, 155, 255, 0.35)',
    },
    images: [
      {
        src: '/assets/eras/midnights.svg',
        alt: 'Deep blue gradient with stardust glow for the Midnights era.',
      },
    ],
  },
  {
    id: 'folklore',
    title: 'Folklore Era',
    period: '2020 — 2021',
    tagline: 'Forest walks, knitted sweaters, and whispered storybooks.',
    quote: '“And isn’t it just so pretty to think…”',
    quoteSource: 'The Last Great American Dynasty',
    summary:
      'Quiet days spent wandering through pines, writing letters, and building a world where our stories feel like folklore.',
    song: {
      title: 'cardigan',
      url: 'https://open.spotify.com/track/4gMgiXfqyzZLMhsksGmbQV',
    },
    theme: {
      accent: '#d8d2c2',
      accentSoft: 'rgba(216, 210, 194, 0.4)',
      background: 'linear-gradient(135deg, rgba(216,210,194,0.5), rgba(95,91,81,0.6))',
      cardGlow: 'rgba(216, 210, 194, 0.32)',
    },
    images: [
      {
        src: '/assets/eras/folklore.svg',
        alt: 'Warm muted gradient for the Folklore era.',
      },
    ],
  },
  {
    id: 'evermore',
    title: 'Evermore Era',
    period: '2020 — 2021',
    tagline: 'Golden hour promises and cozy cabin hideaways.',
    quote: '“In the cracks of light, I dreamed of you.”',
    quoteSource: 'gold rush',
    summary:
      'Candlelit dinners, long drives through autumn backroads, and the feeling that forever is already happening.',
    song: {
      title: 'willow',
      url: 'https://open.spotify.com/track/2gMXnyrvIjhVBUZwvLZDMP',
    },
    theme: {
      accent: '#f1ba7b',
      accentSoft: 'rgba(241, 186, 123, 0.4)',
      background: 'linear-gradient(135deg, rgba(241,186,123,0.55), rgba(140,59,30,0.65))',
      cardGlow: 'rgba(241, 186, 123, 0.32)',
    },
    images: [
      {
        src: '/assets/eras/evermore.svg',
        alt: 'Golden copper gradient for the Evermore era.',
      },
    ],
  },
  {
    id: '1989',
    title: '1989 Era',
    period: '2014 — 2017',
    tagline: 'City skylines, polaroids, and windblown kisses.',
    quote: '“Take me home, just take me home.”',
    quoteSource: 'Style',
    summary:
      'Sneaking away to the beach, dancing in headlights, and saving every snapshot of our bright neon adventures.',
    song: {
      title: 'Style',
      url: 'https://open.spotify.com/track/0ug5NqcwcFR2xrfTkc7k8e',
    },
    theme: {
      accent: '#9bd6ff',
      accentSoft: 'rgba(155, 214, 255, 0.45)',
      background: 'linear-gradient(135deg, rgba(155,214,255,0.6), rgba(31,106,201,0.7))',
      cardGlow: 'rgba(155, 214, 255, 0.33)',
    },
    images: [
      {
        src: '/assets/eras/1989.svg',
        alt: 'Sky blue gradient for the 1989 era.',
      },
    ],
  },
  {
    id: 'reputation',
    title: 'Reputation Era',
    period: '2017 — 2019',
    tagline: 'Neon-lit rooftops, private jokes, lovers vs. the world.',
    quote: '“All of this silence and patience, pining and anticipation.”',
    quoteSource: '…Ready For It?',
    summary:
      'Sharing secrets by the glow of the city, choosing each other louder than the noise—this era is bold devotion.',
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
        src: '/assets/eras/reputation.svg',
        alt: 'Smoky monochrome gradient for the Reputation era.',
      },
    ],
  },
  {
    id: 'red',
    title: 'Red Era',
    period: '2012 — 2014',
    tagline: 'Scarlet scarves, handwritten letters, and fall road trips.',
    quote: '“Loving him is red.”',
    quoteSource: 'Red',
    summary:
      'Bonfires, cinnamon kisses, and getting swept away in every color of the heart—this era is fiery, nostalgic love.',
    song: {
      title: 'All Too Well (10 Minute Version)',
      url: 'https://open.spotify.com/track/5enxwA8aAbwZbf5qCHORXi',
    },
    theme: {
      accent: '#ff9a9e',
      accentSoft: 'rgba(255, 154, 158, 0.4)',
      background: 'linear-gradient(135deg, rgba(255,154,158,0.55), rgba(194,27,49,0.7))',
      cardGlow: 'rgba(255, 154, 158, 0.32)',
    },
    images: [
      {
        src: '/assets/eras/red.svg',
        alt: 'Saturated crimson gradient for the Red era.',
      },
    ],
  },
  {
    id: 'speak-now',
    title: 'Speak Now Era',
    period: '2010 — 2012',
    tagline: 'Purple ballgowns, grand gestures, and love letters with sparkles.',
    quote: '“Please don’t be in love with someone else.”',
    quoteSource: 'Enchanted',
    summary:
      'Spontaneous escapes, dramatic declarations, and the courage to say what the heart is really feeling.',
    song: {
      title: 'Enchanted',
      url: 'https://open.spotify.com/track/2ZBNclC5wm4GtiWaeh0DMf',
    },
    theme: {
      accent: '#caa5f5',
      accentSoft: 'rgba(202, 165, 245, 0.4)',
      background: 'linear-gradient(135deg, rgba(202,165,245,0.55), rgba(75,44,130,0.75))',
      cardGlow: 'rgba(202, 165, 245, 0.32)',
    },
    images: [
      {
        src: '/assets/eras/speak-now.svg',
        alt: 'Amethyst gradient for the Speak Now era.',
      },
    ],
  },
  {
    id: 'fearless',
    title: 'Fearless Era',
    period: '2008 — 2010',
    tagline: 'Golden sparkle lights, fairytale endings, fearless hearts.',
    quote: '“You take my hand and drag me head first—fearless.”',
    quoteSource: 'Fearless',
    summary:
      'Driving with the windows down, dancing barefoot in the kitchen, believing in love stories and happily-ever-afters.',
    song: {
      title: 'Love Story',
      url: 'https://open.spotify.com/track/5xXqWdJPLdfW2iTu04VoYv',
    },
    theme: {
      accent: '#f8e3a0',
      accentSoft: 'rgba(248, 227, 160, 0.4)',
      background: 'linear-gradient(135deg, rgba(248,227,160,0.55), rgba(194,136,43,0.7))',
      cardGlow: 'rgba(248, 227, 160, 0.3)',
    },
    images: [
      {
        src: '/assets/eras/fearless.svg',
        alt: 'Golden sunrise gradient for the Fearless era.',
      },
    ],
  },
  {
    id: 'debut',
    title: 'Debut Era',
    period: '2006 — 2008',
    tagline: 'Starry country nights, porch light waltzes, first-love notes.',
    quote: '“When you think happiness, I hope you think that little black dress.”',
    quoteSource: 'Tim McGraw',
    summary:
      'Hay bale dates, writing names in notebooks, and the tender feeling of falling headfirst for the first time.',
    song: {
      title: 'Tim McGraw',
      url: 'https://open.spotify.com/track/1u8c2t2Cy7UBoG4ArRcF5g',
    },
    theme: {
      accent: '#a8d8a0',
      accentSoft: 'rgba(168, 216, 160, 0.4)',
      background: 'linear-gradient(135deg, rgba(168,216,160,0.55), rgba(63,111,69,0.65))',
      cardGlow: 'rgba(168, 216, 160, 0.3)',
    },
    images: [
      {
        src: '/assets/eras/debut.svg',
        alt: 'Fresh meadow gradient for the Debut era.',
      },
    ],
  },
  {
    id: 'ttpd',
    title: 'The Tortured Poets Era',
    period: '2024 — ∞',
    tagline: 'Typewritten promises, moody poems, and rain-soaked kisses.',
    quote: '“You already are the best thing I’ve ever written.”',
    summary:
      'Ink-stained fingers, love letters on hotel stationery, and quiet moments that feel like forever chapters.',
    song: {
      title: 'Fortnight',
      url: 'https://open.spotify.com/track/3Sqq6FR0QLRm3IdZtcHZ0z',
    },
    theme: {
      accent: '#e4e0d5',
      accentSoft: 'rgba(228, 224, 213, 0.4)',
      background: 'linear-gradient(135deg, rgba(228,224,213,0.55), rgba(74,78,92,0.7))',
      cardGlow: 'rgba(228, 224, 213, 0.3)',
    },
    images: [
      {
        src: '/assets/eras/ttpd.svg',
        alt: 'Muted ink gradient for The Tortured Poets era.',
      },
    ],
  },
]

export const eraMap = eras.reduce<Record<EraSlug, Era>>((acc, era) => {
  acc[era.id] = era
  return acc
}, {} as Record<EraSlug, Era>)

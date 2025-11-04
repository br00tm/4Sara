import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Music, Shuffle, Sparkles, X } from 'lucide-react'
import type { Era, EraSlug } from './data/eras'
import { eraMap, eras } from './data/eras'
import { useDaysSince } from './hooks/useDaysSince'

type ShuffleResult = {
  era: Era
  phrase: string
}

const relationshipStartISO = '2023-12-16' // Ajuste para a data oficial do casal
const relationshipStart = new Date(`${relationshipStartISO}T00:00:00`)

const getRandomEra = (exclude?: EraSlug) => {
  const pool = exclude ? eras.filter((era) => era.id !== exclude) : eras
  return pool[Math.floor(Math.random() * pool.length)]
}

const formatDate = (date: Date, locale = 'pt-BR') =>
  new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

const romanticSummaries: Record<EraSlug, string> = {
  showgirl:
    'Prometo te amar com calma nos dias comuns e com brilho de show nas noites especiais.',
  lover: 'Cada batida do meu coracao sussurra: eu escolho voce, hoje e sempre.',
  midnights: 'O nosso amor e meu lugar seguro, meu palco favorito e meu melhor refrano.',
  folklore: 'Vamos continuar escrevendo capitulos onde o final feliz e so o comeco.',
  evermore: 'Nada e mais bonito do que dividir sonhos e cobertas com voce.',
  '1989': 'Voce e o verso que faltava na cancao que eu sempre quis cantar.',
  reputation: 'Nosso amor e constelacao: mesmo de olhos fechados, eu encontro o caminho ate voce.',
  red: 'Segurar sua mao transforma qualquer segunda-feira em noite estrelada.',
  'speak-now': 'Que nossos planos tenham o tamanho da nossa coragem de amar.',
  fearless: 'Quando penso em futuro, so consigo imaginar seu sorriso abrindo a porta de casa.',
  debut: 'Nosso amor e meu norte: onde voce estiver, e la que eu quero ficar.',
  ttpd: 'Ate nas paginas mais sombrias, eu encontro luz quando penso em nos dois.',
}

const getRomanticSummary = (id: EraSlug) => romanticSummaries[id]

const EraImage = ({ era }: { era: Era }) => {
  const image = era.images[0]

  return (
    <motion.div
      layout
      className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </motion.div>
  )
}

const EraCard = ({
  era,
  isActive,
  onSelect,
}: {
  era: Era
  isActive: boolean
  onSelect: (id: EraSlug) => void
}) => (
  <button
    type="button"
    onClick={() => onSelect(era.id)}
    aria-pressed={isActive}
    className={[
      'group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300',
      'border-white/10 bg-white/[0.03] p-6 text-left shadow-lg shadow-black/20 backdrop-blur',
      isActive
        ? 'border-white/60 ring-2 ring-white/60'
        : 'hover:border-white/40 hover:bg-white/10 focus:border-white/50',
    ].join(' ')}
  >
    <div
      className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: era.theme.background }}
    />
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-200/70">
      <Sparkles size={16} aria-hidden className="text-slate-200/50 drop-shadow" />
      Era
    </div>
    <div className="mt-4 space-y-2">
      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{era.title}</h3>
      <p className="text-sm text-slate-200/80 sm:text-base">{era.period}</p>
      <p className="text-sm text-slate-300/80">{era.summary}</p>
    </div>
  </button>
)

const ShuffleOverlay = ({
  result,
  onClose,
}: {
  result: ShuffleResult | null
  onClose: () => void
}) => (
  <AnimatePresence>
    {result ? (
      <motion.div
        key="shuffle-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose()
          }
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 24, stiffness: 180 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shuffle-result-title"
          className="relative mx-4 w-full max-w-xl overflow-hidden rounded-3xl border border-white/12 bg-slate-950/90 p-8 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Fechar resultado do shuffle"
          >
            <X size={20} aria-hidden />
          </button>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Nossa era</p>
              <h2
                id="shuffle-result-title"
                className="font-display text-3xl font-semibold text-white sm:text-4xl"
              >
                {result.era.title}
              </h2>
              <p className="text-sm text-slate-300">{result.era.summary}</p>
              <a
                href={result.era.song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <Music size={18} aria-hidden />
                Ouvir {result.era.song.title}
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-300/70">
                <Sparkles size={16} aria-hidden /> Frase romantica
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{result.phrase}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
)

const EraHighlight = ({
  era,
  onShuffle,
  onPlaySong,
}: {
  era: Era
  onShuffle: () => void
  onPlaySong: () => void
}) => (
  <motion.section
    layout
    className="group relative grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-lg md:grid-cols-[1.2fr_1fr] md:p-10"
  >
    <div
      className="absolute inset-0 -z-10 rounded-[2.5rem] opacity-70 transition duration-500 group-hover:opacity-100"
      style={{ background: era.theme.background }}
    />
    <div className="relative flex flex-col gap-6">
      <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-slate-200/80">
        <Sparkles size={16} aria-hidden />
        Era em destaque
      </span>
      <div className="space-y-3">
        <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          {era.title}
        </h2>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-200/80">{era.period}</p>
        <p className="text-base text-slate-100/90 sm:text-lg">{era.summary}</p>
      </div>
      <blockquote className="rounded-3xl border border-white/15 bg-black/30 p-6 text-left shadow-inner shadow-black/30">
        <p className="font-display text-xl text-white sm:text-2xl">{era.quote}</p>
        {era.quoteSource ? (
          <footer className="mt-2 text-sm text-slate-300/80">- {era.quoteSource}</footer>
        ) : null}
      </blockquote>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onPlaySong}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-semibold text-white shadow shadow-black/20 transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <Music size={18} aria-hidden />
          Ouvir musica tema
          <ArrowUpRight size={16} aria-hidden />
        </button>
        <button
          type="button"
          onClick={onShuffle}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow shadow-black/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <Shuffle size={18} aria-hidden />
          Shuffle our Era
        </button>
      </div>
    </div>
    <div className="relative w-full max-w-sm justify-self-center md:justify-self-end">
      <EraImage era={era} />
    </div>
  </motion.section>
)

const App = () => {
  const [currentEraId, setCurrentEraId] = useState<EraSlug>('showgirl')
  const [shuffleResult, setShuffleResult] = useState<ShuffleResult | null>(null)

  const daysTogether = useDaysSince(relationshipStart)
  const formattedStartDate = useMemo(() => formatDate(relationshipStart), [])

  const currentEra = eraMap[currentEraId]

  const handleShuffle = () => {
    const nextEra = getRandomEra(currentEraId)
    const phrase = getRomanticSummary(nextEra.id)
    setCurrentEraId(nextEra.id)
    setShuffleResult({ era: nextEra, phrase })
  }

  const closeShuffle = () => setShuffleResult(null)

  useEffect(() => {
    if (!shuffleResult) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeShuffle()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [shuffleResult])

  return (
    <div className="relative min-h-screen overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[480px] w-[480px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <header className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Nossa historia</p>
              <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
                As nossas eras
              </h1>
              <p className="max-w-2xl text-sm text-slate-300/90 sm:text-base">
                Uma timeline romantica inspirada nas eras da Taylor para eternizar os nossos momentos
                favoritos. Escolha a Era que mais combina com o mood do dia ou deixe o destino escolher
                com o shuffle.
              </p>
            </div>
            <div className="flex min-w-[220px] flex-col gap-2 rounded-3xl border border-white/12 bg-white/10 px-6 py-5 text-right shadow-lg shadow-black/20">
              <span className="inline-flex items-center justify-end gap-2 text-xs uppercase tracking-[0.4em] text-slate-200/75">
                <Calendar size={16} aria-hidden /> Dias juntos
              </span>
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                {daysTogether.toLocaleString('pt-BR')}
              </p>
              <span className="text-xs text-slate-300/80">Desde {formattedStartDate}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-400 sm:text-sm">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
              {eras.length} eras
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
              {Object.keys(romanticSummaries).length} frases romanticas
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
              Tema escuro &amp; mobile-first
            </span>
          </div>
        </header>

        <EraHighlight
          era={currentEra}
          onShuffle={handleShuffle}
          onPlaySong={() => window.open(currentEra.song.url, '_blank', 'noopener,noreferrer')}
        />

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Escolha outra era
              </h2>
              <p className="text-sm text-slate-300/80 sm:text-base">
                Explore cada capitulo da nossa historia e troque o destaque quando quiser.
              </p>
            </div>
            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow shadow-black/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Shuffle size={18} aria-hidden />
              Shuffle our Era
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eras.map((era) => (
              <EraCard
                key={era.id}
                era={era}
                isActive={era.id === currentEraId}
                onSelect={(id) => setCurrentEraId(id)}
              />
            ))}
          </div>
        </section>
      </div>

      <ShuffleOverlay result={shuffleResult} onClose={closeShuffle} />
    </div>
  )
}

export default App





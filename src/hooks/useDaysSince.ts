import { useEffect, useMemo, useState } from 'react'

const MS_PER_DAY = 1000 * 60 * 60 * 24

const normalizeDate = (date: Date) => {
  const normalized = new Date(date)
  normalized.setHours(0, 0, 0, 0)
  return normalized
}

const calculateDaysSince = (start: Date) => {
  const startAtMidnight = normalizeDate(start)
  const now = new Date()
  return Math.max(0, Math.floor((now.getTime() - startAtMidnight.getTime()) / MS_PER_DAY))
}

export const useDaysSince = (startDate: Date | string | number) => {
  const initial = useMemo(
    () => calculateDaysSince(new Date(startDate)),
    [startDate],
  )
  const [days, setDays] = useState(initial)

  useEffect(() => {
    const update = () => setDays(calculateDaysSince(new Date(startDate)))

    const oneHour = 1000 * 60 * 60
    const id = setInterval(update, oneHour)

    return () => clearInterval(id)
  }, [startDate])

  return days
}

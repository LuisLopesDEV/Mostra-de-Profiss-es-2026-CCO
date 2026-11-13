const RECORD_KEY = 'cacco-corte-best'
const RANKING_KEY = 'cacco-corte-ranking'
export const RANKING_LIMIT = 10
export const RANKING_NAME_LIMIT = 24

export type RankingEntry = { name: string; score: number }

export function loadRecord(key = RECORD_KEY) {
  try {
    const value = Number(localStorage.getItem(key))
    return Number.isSafeInteger(value) && value > 0 ? value : 0
  } catch {
    return 0
  }
}

export function saveRecord(score: number, key = RECORD_KEY) {
  try {
    localStorage.setItem(key, String(score))
  } catch {
    // O recorde da sessão ainda fica disponível no controlador.
  }
}

function isRankingEntry(value: unknown): value is RankingEntry {
  if (typeof value !== 'object' || value === null) return false
  const { name, score } = value as Partial<RankingEntry>
  return typeof name === 'string' && name.trim().length > 0 && name.length <= RANKING_NAME_LIMIT &&
    typeof score === 'number' && Number.isSafeInteger(score) && score >= 0
}

function topScores(entries: RankingEntry[]) {
  return entries.sort((a, b) => b.score - a.score).slice(0, RANKING_LIMIT)
}

export function loadRanking(fallback: RankingEntry[] = []): RankingEntry[] {
  try {
    const raw = localStorage.getItem(RANKING_KEY)
    if (raw === null) return fallback
    const data: unknown = JSON.parse(raw)
    if (Array.isArray(data)) return topScores(data.filter(isRankingEntry))
  } catch {
    // Mantém o ranking disponível durante a sessão.
  }
  return fallback
}

export function addRankingScore(ranking: RankingEntry[], entry: RankingEntry) {
  const entries = topScores([...loadRanking(ranking), entry])
  let persisted = false
  try {
    localStorage.setItem(RANKING_KEY, JSON.stringify(entries))
    persisted = true
  } catch {
    // O controlador exibe a lista em memória.
  }
  return { entries, position: entries.indexOf(entry) + 1, persisted }
}

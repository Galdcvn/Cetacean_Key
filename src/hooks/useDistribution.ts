import { useState, useEffect, useCallback } from 'react'
import type { FeatureCollection } from 'geojson'

export function useDistribution(idAnimal: number) {
  const [geojson, setGeojson] = useState<FeatureCollection | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [bbox, setBbox] = useState<[number, number, number, number] | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setGeojson(null)
    setBbox(null)
    setError(null)

    try {
      const indexResp = await fetch('/data/distributions/index.json')
      if (!indexResp.ok) return
      const index = await indexResp.json()
      const entry = index[String(idAnimal)]
      if (!entry?.file) {
        setLoading(false)
        return
      }

      setBbox(entry.bbox ?? null)

      const resp = await fetch(`/data/distributions/${entry.file}`)
      if (!resp.ok) return
      const data = await resp.json()
      setGeojson(data)
    } catch {
      setError('Não foi possível carregar os dados de distribuição.')
    }

    setLoading(false)
  }, [idAnimal])

  useEffect(() => {
    load()
  }, [load])

  return { geojson, loading, error, bbox, retry: load }
}

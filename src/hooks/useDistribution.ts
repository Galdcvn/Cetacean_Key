import { useState, useEffect } from 'react'
import type { FeatureCollection } from 'geojson'

export function useDistribution(idAnimal: number) {
  const [geojson, setGeojson] = useState<FeatureCollection | null>(null)
  const [loading, setLoading] = useState(false)
  const [bbox, setBbox] = useState<[number, number, number, number] | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setGeojson(null)
      setBbox(null)

      try {
        const indexResp = await fetch('/data/distributions/index.json')
        if (!indexResp.ok || cancelled) return
        const index = await indexResp.json()
        const entry = index[String(idAnimal)]
        if (!entry?.file || cancelled) {
          setLoading(false)
          return
        }

        setBbox(entry.bbox ?? null)

        const resp = await fetch(`/data/distributions/${entry.file}`)
        if (!resp.ok || cancelled) return
        const data = await resp.json()
        setGeojson(data)
      } catch {
        // no distribution data available
      }

      if (!cancelled) setLoading(false)
    }

    load()
    return () => { cancelled = true }
  }, [idAnimal])

  return { geojson, loading, bbox }
}

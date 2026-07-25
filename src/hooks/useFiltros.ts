import { useState, useCallback, useEffect } from 'react'

function readFiltersFromURL(): number[] {
  const params = new URLSearchParams(window.location.search)
  const f = params.get('f')
  if (!f) return []
  return f.split(',').map(Number).filter((n) => !isNaN(n))
}

function writeFiltersToURL(ids: number[]) {
  const url = new URL(window.location.href)
  if (ids.length === 0) {
    url.searchParams.delete('f')
  } else {
    url.searchParams.set('f', ids.join(','))
  }
  window.history.replaceState({}, '', url.toString())
}

export function useFiltros() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(readFiltersFromURL)

  useEffect(() => {
    writeFiltersToURL(selectedOptions)
  }, [selectedOptions])

  useEffect(() => {
    function handlePopState() {
      setSelectedOptions(readFiltersFromURL())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const toggleOption = useCallback((idOpcao: number) => {
    setSelectedOptions((prev) =>
      prev.includes(idOpcao)
        ? prev.filter((id) => id !== idOpcao)
        : [...prev, idOpcao]
    )
  }, [])

  const resetFilters = useCallback(() => {
    setSelectedOptions([])
  }, [])

  const resetGroup = useCallback((opcoesIds: number[]) => {
    setSelectedOptions((prev) =>
      prev.filter((id) => !opcoesIds.includes(id))
    )
  }, [])

  return { selectedOptions, toggleOption, resetFilters, resetGroup }
}

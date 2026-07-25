import { useState, useCallback } from 'react'

export function useFiltros() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

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

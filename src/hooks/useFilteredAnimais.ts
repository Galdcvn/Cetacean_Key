import { useState, useEffect, useMemo, useRef } from 'react'
import { supabase } from '../lib/supabase'
import type { AnimalComCaracteristicas } from '../types/cetacean'
import { smartSearchAnimals } from '../utils/smartSearch'

export function useFilteredAnimais(
  selectedOptions: number[],
  searchQuery: string
) {
  const [allAnimals, setAllAnimals] = useState<AnimalComCaracteristicas[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnimals() {
      const { data, error } = await supabase
        .from('animais')
        .select(`
          id_animal,
          nome_comum,
          nome_cientifico,
          genero,
          id_subordem,
          url_imagem,
          subordens (
            id_subordem,
            nome
          ),
          animal_identificacao (
            id_opcao,
            observacao,
            opcoes_caracteristica (
              id_opcao,
              id_caract,
              valor,
              caracteristicas (
                id_caract,
                nome,
                grupo_anatomico
              )
            )
          )
        `)
        .order('nome_comum')

      if (error) {
        setError(error.message)
      } else {
        setAllAnimals(data as AnimalComCaracteristicas[])
      }
      setLoading(false)
    }

    fetchAnimals()
  }, [])

  const filteredByOptions = useMemo(() => {
    if (selectedOptions.length === 0) return allAnimals

    const selectedGroupIds = new Set<number>()
    for (const animal of allAnimals) {
      for (const link of animal.animal_identificacao) {
        const caract = link.opcoes_caracteristica?.caracteristicas
        if (caract && selectedOptions.includes(link.id_opcao)) {
          selectedGroupIds.add(caract.id_caract)
        }
      }
    }

    return allAnimals.filter((animal) => {
      const matchedGroups = new Set<number>()
      for (const link of animal.animal_identificacao) {
        if (selectedOptions.includes(link.id_opcao)) {
          const caract = link.opcoes_caracteristica?.caracteristicas
          if (caract) matchedGroups.add(caract.id_caract)
        }
      }
      return matchedGroups.size === selectedGroupIds.size
    })
  }, [allAnimals, selectedOptions])

  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 200)
    return () => clearTimeout(debounceRef.current)
  }, [searchQuery])

  const results = useMemo(
    () => smartSearchAnimals(filteredByOptions, debouncedQuery),
    [filteredByOptions, debouncedQuery]
  )

  return { results, loading, error, totalCount: allAnimals.length }
}

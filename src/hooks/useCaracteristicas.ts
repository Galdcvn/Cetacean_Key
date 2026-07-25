import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { CaracteristicaComOpcoes } from '../types/cetacean'

export function useCaracteristicas() {
  const [caracteristicas, setCaracteristicas] = useState<CaracteristicaComOpcoes[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCaracteristicas() {
      const { data, error } = await supabase
        .from('caracteristicas')
        .select(`
          id_caract,
          nome,
          grupo_anatomico,
          opcoes_caracteristica (
            id_opcao,
            id_caract,
            valor
          )
        `)
        .order('id_caract')

      if (error) {
        setError(error.message)
      } else {
        setCaracteristicas(data as CaracteristicaComOpcoes[])
      }
      setLoading(false)
    }

    fetchCaracteristicas()
  }, [])

  return { caracteristicas, loading, error }
}

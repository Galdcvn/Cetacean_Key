import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

export interface UseFavoritesReturn {
  favoritos: Set<number>
  loading: boolean
  isFavorited: (idAnimal: number) => boolean
  toggleFavorito: (idAnimal: number) => Promise<void>
}

export function useFavorites(user: User | null): UseFavoritesReturn {
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      setFavoritos(new Set())
      setLoading(false)
      return
    }

    let cancelled = false
    const userId = user.id

    async function fetchFavoritos() {
      setLoading(true)
      const { data, error } = await supabase
        .from('favoritos' as never)
        .select('id_animal')
        .eq('user_id', userId)

      if (!cancelled) {
        if (!error && data) {
          setFavoritos(new Set((data as { id_animal: number }[]).map((f) => f.id_animal)))
        }
        setLoading(false)
      }
    }

    fetchFavoritos()
    return () => { cancelled = true }
  }, [user])

  const isFavorited = useCallback(
    (idAnimal: number) => favoritos.has(idAnimal),
    [favoritos]
  )

  const toggleFavorito = useCallback(
    async (idAnimal: number) => {
      if (!user) return

      const isCurrentlyFav = favoritos.has(idAnimal)

      setFavoritos((prev) => {
        const next = new Set(prev)
        if (isCurrentlyFav) next.delete(idAnimal)
        else next.add(idAnimal)
        return next
      })

      if (isCurrentlyFav) {
        const { error } = await supabase
          .from('favoritos' as never)
          .delete()
          .eq('user_id', user.id)
          .eq('id_animal', idAnimal)

        if (error) {
          setFavoritos((prev) => {
            const next = new Set(prev)
            next.add(idAnimal)
            return next
          })
        }
      } else {
        const { error } = await supabase
          .from('favoritos' as never)
          .insert({ user_id: user.id, id_animal: idAnimal } as never)

        if (error) {
          setFavoritos((prev) => {
            const next = new Set(prev)
            next.delete(idAnimal)
            return next
          })
        }
      }
    },
    [user, favoritos]
  )

  return { favoritos, loading, isFavorited, toggleFavorito }
}

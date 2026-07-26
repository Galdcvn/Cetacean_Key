import type { User } from '@supabase/supabase-js'
import { AnimalComCaracteristicas } from '../types/cetacean'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalCards.module.css'

interface AnimalCardsProps {
  animals: AnimalComCaracteristicas[]
  loading: boolean
  error: string | null
  totalCount: number
  filteredCount: number
  selectedOptions: number[]
  searchQuery: string
  onSelectAnimal: (animal: AnimalComCaracteristicas) => void
  user: User | null
  isFavorited: (idAnimal: number) => boolean
  onToggleFavorito: (idAnimal: number) => void
  onRemoveFilter?: (idOpcao: number) => void
  onLoginClick: () => void
}

function LoadingSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonLine} style={{ width: '70%', height: 18 }} />
            <div className={styles.skeletonLine} style={{ width: '55%', height: 14 }} />
            <div className={styles.skeletonLine} style={{ width: '40%', height: 12 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function AnimalCards({
  animals,
  loading,
  error,
  totalCount,
  filteredCount,
  selectedOptions,
  searchQuery,
  onSelectAnimal,
  user,
  isFavorited,
  onToggleFavorito,
  onRemoveFilter,
  onLoginClick,
}: AnimalCardsProps) {
  if (loading) return <LoadingSkeleton />

  if (error) {
    return (
      <div className={styles.emptyState}>
        <div className={`${styles.emptyIcon} ${styles.errorIcon}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <p className={styles.emptyTitle}>Erro ao carregar dados</p>
        <p className={styles.emptyDesc}>{error}</p>
      </div>
    )
  }

  if (animals.length === 0) {
    const hasFilters = selectedOptions.length > 0
    const hasSearch = searchQuery.trim().length > 0

    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M8 11h6" />
          </svg>
        </div>
        <p className={styles.emptyTitle}>
          {hasFilters && hasSearch
            ? 'Nenhum resultado para sua busca'
            : hasFilters
              ? 'Nenhum espécie corresponde aos filtros'
              : hasSearch
                ? 'Nenhum resultado para sua busca'
                : 'Nenhuma espécie encontrada'}
        </p>
        <p className={styles.emptyDesc}>
          {hasFilters && hasSearch
            ? 'Tente ajustar os filtros ou termos de busca.'
            : hasFilters
              ? 'Tente selecionar menos opções ou limpar os filtros.'
              : hasSearch
                ? 'Tente buscar por nome comum, científico ou gênero.'
                : 'Tente novamente mais tarde.'}
        </p>
      </div>
    )
  }

  const hasFilters = selectedOptions.length > 0

  return (
    <>
      <div className={styles.resultsBar}>
        <span className={styles.resultsCount}>
          {hasFilters
            ? `${filteredCount} de ${totalCount} espécies`
            : `${totalCount} espécies`}
        </span>
      </div>
      {hasFilters && onRemoveFilter && (
        <div className={styles.filterChips}>
          {selectedOptions.map((id) => (
            <span key={id} className={styles.chip}>
              Filtro #{id}
              <button
                className={styles.chipRemove}
                onClick={() => onRemoveFilter(id)}
                aria-label="Remover filtro"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      <div className={styles.grid}>
        {animals.map((animal, index) => (
          <AnimalCard
            key={animal.id_animal}
            animal={animal}
            selectedOptions={selectedOptions}
            onSelect={() => onSelectAnimal(animal)}
            style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
            user={user}
            isFavorited={isFavorited(animal.id_animal)}
            onToggleFavorito={() => onToggleFavorito(animal.id_animal)}
            onLoginClick={onLoginClick}
          />
        ))}
      </div>
    </>
  )
}

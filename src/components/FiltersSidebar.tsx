import { useEffect, useCallback } from 'react'
import { CaracteristicaComOpcoes, AnimalComCaracteristicas } from '../types/cetacean'
import { FilterGroup } from './FilterGroup'
import { useToast } from './Toast'
import styles from './FiltersSidebar.module.css'

interface FiltersSidebarProps {
  caracteristicas: CaracteristicaComOpcoes[]
  selectedOptions: number[]
  onToggle: (idOpcao: number) => void
  onReset: () => void
  allAnimals: AnimalComCaracteristicas[]
  isOpen: boolean
  onClose: () => void
  loading?: boolean
}

function countAnimalsPerOption(animals: AnimalComCaracteristicas[]): Map<number, number> {
  const counts = new Map<number, number>()
  for (const animal of animals) {
    for (const link of animal.animal_identificacao) {
      counts.set(link.id_opcao, (counts.get(link.id_opcao) ?? 0) + 1)
    }
  }
  return counts
}

export function FiltersSidebar({
  caracteristicas,
  selectedOptions,
  onToggle,
  onReset,
  allAnimals,
  isOpen,
  onClose,
  loading = false,
}: FiltersSidebarProps) {
  const hasActiveFilters = selectedOptions.length > 0
  const optionCounts = countAnimalsPerOption(allAnimals)
  const { showToast } = useToast()

  const handleReset = useCallback(() => {
    if (hasActiveFilters) {
      showToast(`${selectedOptions.length} filtro(s) removido(s).`, 'info')
    }
    onReset()
  }, [hasActiveFilters, selectedOptions.length, onReset, showToast])

  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const loadingContent = (
    <div className={styles.groups}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={styles.skeletonGroup}>
          <div className={styles.skeletonTitle} />
          {Array.from({ length: 3 }).map((_, j) => (
            <div key={j} className={styles.skeletonOption} />
          ))}
        </div>
      ))}
    </div>
  )

  const filterNote = (
    <p className={styles.logicNote}>
      Filtros de grupos diferentes são combinados com E (interseção).
    </p>
  )

  const sidebarContent = (
    <>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Filtros</h2>
        {selectedOptions.length > 0 && (
          <span className={styles.badge}>{selectedOptions.length}</span>
        )}
        {hasActiveFilters && (
          <button className={styles.clearBtn} onClick={handleReset}>
            Limpar
          </button>
        )}
      </div>

      {loading ? loadingContent : (
        <div className={styles.groups}>
          {caracteristicas.map((carac) => (
            <FilterGroup
              key={carac.id_caract}
              nome={carac.nome}
              opcoes={carac.opcoes_caracteristica}
              selectedIds={selectedOptions}
              onToggle={onToggle}
              optionCounts={optionCounts}
            />
          ))}
          {filterNote}
        </div>
      )}
    </>
  )

  return (
    <>
      <aside className={styles.sidebar}>
        {sidebarContent}
      </aside>

      <div
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOverlayVisible : ''}`}
        onClick={onClose}
      />
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <h2 className={styles.sidebarTitle}>Filtros</h2>
          {selectedOptions.length > 0 && (
            <span className={styles.badge}>{selectedOptions.length}</span>
          )}
          <div className={styles.drawerHeaderActions}>
            {hasActiveFilters && (
              <button className={styles.clearBtn} onClick={handleReset}>
                Limpar
              </button>
            )}
            <button className={styles.closeDrawerBtn} onClick={onClose} aria-label="Fechar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.drawerScroll}>
          <div className={styles.groups}>
            {loading ? loadingContent : (
              <>
                {caracteristicas.map((carac) => (
                  <FilterGroup
                    key={carac.id_caract}
                    nome={carac.nome}
                    opcoes={carac.opcoes_caracteristica}
                    selectedIds={selectedOptions}
                    onToggle={onToggle}
                    optionCounts={optionCounts}
                  />
                ))}
                {filterNote}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

import { CaracteristicaComOpcoes, AnimalComCaracteristicas } from '../types/cetacean'
import { FilterGroup } from './FilterGroup'
import styles from './FiltersSidebar.module.css'

interface FiltersSidebarProps {
  caracteristicas: CaracteristicaComOpcoes[]
  selectedOptions: number[]
  onToggle: (idOpcao: number) => void
  onReset: () => void
  allAnimals: AnimalComCaracteristicas[]
  isOpen: boolean
  onClose: () => void
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
}: FiltersSidebarProps) {
  const hasActiveFilters = selectedOptions.length > 0
  const optionCounts = countAnimalsPerOption(allAnimals)

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Filtros</h2>
          {selectedOptions.length > 0 && (
            <span className={styles.badge}>{selectedOptions.length}</span>
          )}
          {hasActiveFilters && (
            <button className={styles.clearBtn} onClick={onReset}>
              Limpar
            </button>
          )}
        </div>

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
        </div>
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
              <button className={styles.clearBtn} onClick={onReset}>
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
          </div>
        </div>
      </div>
    </>
  )
}

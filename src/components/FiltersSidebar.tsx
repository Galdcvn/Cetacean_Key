import { CaracteristicaComOpcoes } from '../types/cetacean'
import { FilterGroup } from './FilterGroup'
import styles from './FiltersSidebar.module.css'

interface FiltersSidebarProps {
  caracteristicas: CaracteristicaComOpcoes[]
  selectedOptions: number[]
  onToggle: (idOpcao: number) => void
}

export function FiltersSidebar({ caracteristicas, selectedOptions, onToggle }: FiltersSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Filtros</h2>
        {selectedOptions.length > 0 && (
          <span className={styles.badge}>{selectedOptions.length}</span>
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
          />
        ))}
      </div>
    </aside>
  )
}

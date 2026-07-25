import type { CaracteristicaComOpcoes } from '../types/cetacean'
import { FilterGroup } from './FilterGroup'
import styles from './FiltersSidebar.module.css'

interface FiltersSidebarProps {
  caracteristicas: CaracteristicaComOpcoes[]
  selectedOptions: number[]
  onToggle: (idOpcao: number) => void
  onResetAll: () => void
  onResetGroup: (opcoesIds: number[]) => void
}

export function FiltersSidebar({
  caracteristicas,
  selectedOptions,
  onToggle,
  onResetAll,
  onResetGroup,
}: FiltersSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <p className={styles.title}>Filtros</p>
        <button className={styles.resetAllBtn} onClick={onResetAll}>
          Resetar
        </button>
      </header>

      <div className={styles.groups}>
        {caracteristicas.map((caract) => (
          <FilterGroup
            key={caract.id_caract}
            caracteristica={caract}
            selectedOptions={selectedOptions}
            onToggle={onToggle}
            onResetGroup={onResetGroup}
          />
        ))}
      </div>
    </aside>
  )
}

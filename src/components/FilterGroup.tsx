import { OpcaoCaracteristica } from '../types/cetacean'
import styles from './FilterGroup.module.css'

interface FilterGroupProps {
  nome: string
  opcoes: OpcaoCaracteristica[]
  selectedIds: number[]
  onToggle: (idOpcao: number) => void
}

export function FilterGroup({ nome, opcoes, selectedIds, onToggle }: FilterGroupProps) {
  const selectedSet = new Set(selectedIds)

  return (
    <div className={styles.group}>
      <h3 className={styles.title}>{nome}</h3>
      <div className={styles.options}>
        {opcoes.map((opcao) => {
          const isActive = selectedSet.has(opcao.id_opcao)
          return (
            <label
              key={opcao.id_opcao}
              className={styles.option}
              data-active={isActive}
              onClick={() => onToggle(opcao.id_opcao)}
            >
              <span className={styles.checkbox}>
                {isActive && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </span>
              <span className={styles.label}>{opcao.valor}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

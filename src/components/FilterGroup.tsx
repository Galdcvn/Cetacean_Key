import type { CaracteristicaComOpcoes } from '../types/cetacean'
import styles from './FilterGroup.module.css'

interface FilterGroupProps {
  caracteristica: CaracteristicaComOpcoes
  selectedOptions: number[]
  onToggle: (idOpcao: number) => void
  onResetGroup: (opcoesIds: number[]) => void
}

export function FilterGroup({
  caracteristica,
  selectedOptions,
  onToggle,
  onResetGroup,
}: FilterGroupProps) {
  const opcoesIds = caracteristica.opcoes_caracteristica.map((o) => o.id_opcao)

  return (
    <div className={styles.group}>
      <header className={styles.header}>
        <p className={styles.title}>{caracteristica.nome}</p>
        <button
          className={styles.resetBtn}
          onClick={() => onResetGroup(opcoesIds)}
        >
          Resetar
        </button>
      </header>

      <div className={styles.options}>
        {caracteristica.opcoes_caracteristica.map((opcao) => (
          <label key={opcao.id_opcao} className={styles.option}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(opcao.id_opcao)}
              onChange={() => onToggle(opcao.id_opcao)}
              className={styles.checkbox}
            />
            <span className={styles.customCheck} />
            <span className={styles.label}>{opcao.valor}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

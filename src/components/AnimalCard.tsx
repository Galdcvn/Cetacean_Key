import type { AnimalComCaracteristicas } from '../types/cetacean'
import styles from './AnimalCard.module.css'

interface AnimalCardProps {
  animal: AnimalComCaracteristicas
}

export function AnimalCard({ animal }: AnimalCardProps) {
  const subordemNome =
    animal.subordens && !Array.isArray(animal.subordens)
      ? animal.subordens.nome
      : ''

  return (
    <div className={styles.card}>
      <div className={styles.imageFrame}>
        <svg
          className={styles.placeholder}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="32" rx="24" ry="12" fill="#A0B4C8" />
          <path d="M12 32c0 0 4-14 20-14s20 14 20 14" stroke="#7A97B0" strokeWidth="1.5" fill="none" />
          <circle cx="16" cy="30" r="1.5" fill="#5A7A94" />
          <path d="M8 34c-2 1-4 0-4 0" stroke="#7A97B0" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M52 26c3-4 6-3 6-3" stroke="#7A97B0" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className={styles.info}>
        <h2 className={styles.nome}>{animal.nome_comum}</h2>
        <h3 className={styles.cientifico}>{animal.nome_cientifico}</h3>
        {subordemNome && (
          <span className={styles.subordem}>{subordemNome}</span>
        )}
      </div>
    </div>
  )
}

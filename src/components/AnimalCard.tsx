import { AnimalComCaracteristicas } from '../types/cetacean'
import styles from './AnimalCard.module.css'

interface AnimalCardProps {
  animal: AnimalComCaracteristicas
}

export function AnimalCard({ animal }: AnimalCardProps) {
  const opcoes = animal.animal_identificacao
    .map((ai) => ai.opcoes_caracteristica)
    .filter(Boolean)

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <circle cx="9" cy="9" r="1" fill="currentColor" />
            <circle cx="15" cy="9" r="1" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.names}>
          <h3 className={styles.commonName}>{animal.nome_comum}</h3>
          <p className={styles.scientificName}>{animal.nome_cientifico}</p>
          {animal.genero && (
            <p className={styles.genre}>{animal.genero}</p>
          )}
        </div>

        {opcoes.length > 0 && (
          <div className={styles.traits}>
            {opcoes.map((opcao) => (
              <span key={opcao.id_opcao} className={styles.trait}>
                {opcao.valor}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

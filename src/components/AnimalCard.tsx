import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { AnimalComCaracteristicas } from '../types/cetacean'
import { FavoriteButton } from './FavoriteButton'
import styles from './AnimalCard.module.css'

interface AnimalCardProps {
  animal: AnimalComCaracteristicas
  selectedOptions: number[]
  onSelect: () => void
  style?: React.CSSProperties
  user: User | null
  isFavorited: boolean
  onToggleFavorito: () => void
  onLoginClick: () => void
}

export function AnimalCard({
  animal, selectedOptions, onSelect, style,
  user, isFavorited, onToggleFavorito, onLoginClick,
}: AnimalCardProps) {
  const [imgError, setImgError] = useState(false)
  const opcoes = animal.animal_identificacao
    .map((ai) => ai.opcoes_caracteristica)
    .filter(Boolean)

  const selectedSet = new Set(selectedOptions)
  const hasFilters = selectedOptions.length > 0
  const hasImage = animal.url_imagem && !imgError

  return (
    <div className={styles.card} onClick={onSelect} role="button" tabIndex={0} style={style}>
      <div className={styles.imageContainer}>
        <FavoriteButton
          isFavorited={isFavorited}
          disabled={!user}
          onClick={user ? onToggleFavorito : onLoginClick}
          label={!user ? 'Faça login para favoritar' : undefined}
        />
        {hasImage ? (
          <img
            className={styles.image}
            src={animal.url_imagem!}
            alt={animal.nome_comum}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.placeholder}>
            <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 35 C10 35, 20 15, 40 20 C50 22, 55 30, 60 28 C65 26, 68 18, 80 20 C90 22, 95 35, 110 30" />
              <path d="M40 20 C42 16, 48 12, 50 18" />
              <path d="M60 28 L60 45 C60 48, 55 50, 48 48" />
              <path d="M80 20 L82 15 C84 12, 88 14, 86 18" />
            </svg>
          </div>
        )}
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
            {opcoes.map((opcao) => {
              const isMatched = hasFilters && selectedSet.has(opcao.id_opcao)
              return (
                <span
                  key={opcao.id_opcao}
                  className={`${styles.trait} ${isMatched ? styles.traitMatched : ''}`}
                >
                  {opcao.valor}
                </span>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

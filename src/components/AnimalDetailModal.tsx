import { useEffect, useState } from 'react'
import { AnimalComCaracteristicas } from '../types/cetacean'
import styles from './AnimalDetailModal.module.css'

interface AnimalDetailModalProps {
  animal: AnimalComCaracteristicas
  selectedOptions: number[]
  onClose: () => void
}

export function AnimalDetailModal({ animal, selectedOptions, onClose }: AnimalDetailModalProps) {
  const [imgError, setImgError] = useState(false)
  const selectedSet = new Set(selectedOptions)
  const hasFilters = selectedOptions.length > 0
  const hasImage = animal.url_imagem && !imgError

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const grouped = new Map<string, { nome: string; valor: string; matched: boolean }[]>()
  for (const link of animal.animal_identificacao) {
    const caract = link.opcoes_caracteristica?.caracteristicas
    if (!caract) continue
    const grupo = caract.grupo_anatomico
    if (!grouped.has(grupo)) grouped.set(grupo, [])
    grouped.get(grupo)!.push({
      nome: caract.nome,
      valor: link.opcoes_caracteristica.valor,
      matched: hasFilters && selectedSet.has(link.id_opcao),
    })
  }

  const subordemNome = animal.subordens?.nome ?? '—'

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.header}>
          {hasImage && (
            <img
              className={styles.headerImage}
              src={animal.url_imagem!}
              alt={animal.nome_comum}
              onError={() => setImgError(true)}
            />
          )}
          <h2 className={styles.commonName}>{animal.nome_comum}</h2>
          <p className={styles.scientificName}>{animal.nome_cientifico}</p>
          <div className={styles.meta}>
            {animal.genero && <span className={styles.metaItem}>{animal.genero}</span>}
            <span className={styles.metaItem}>{subordemNome}</span>
          </div>
        </div>

        <div className={styles.body}>
          {Array.from(grouped.entries()).map(([grupo, items]) => (
            <div key={grupo} className={styles.group}>
              <h3 className={styles.groupTitle}>{grupo}</h3>
              <div className={styles.chars}>
                {items.map((item) => (
                  <div
                    key={item.nome}
                    className={`${styles.charRow} ${item.matched ? styles.charMatched : ''}`}
                  >
                    <span className={styles.charName}>{item.nome}</span>
                    <span className={styles.charValue}>{item.valor}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

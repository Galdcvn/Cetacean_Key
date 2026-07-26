import styles from './FavoriteButton.module.css'

interface FavoriteButtonProps {
  isFavorited: boolean
  disabled: boolean
  onClick: () => void
}

export function FavoriteButton({ isFavorited, disabled, onClick }: FavoriteButtonProps) {
  return (
    <button
      className={`${styles.heartBtn} ${isFavorited ? styles.active : ''}`}
      onClick={(e) => {
        e.stopPropagation()
        if (!disabled) onClick()
      }}
      aria-label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      title={disabled ? 'Entre para salvar favoritos' : undefined}
      disabled={disabled}
    >
      <svg viewBox="0 0 24 24" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  )
}

import styles from './Header.module.css'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <svg
            viewBox="0 0 259 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoSvg}
          >
            <text
              x="10"
              y="80"
              fill="#D9E3ED"
              fontFamily="Georgia, serif"
              fontSize="48"
              fontWeight="bold"
            >
              Cetacean Key
            </text>
          </svg>
        </div>

        <div className={styles.searchWrapper}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar cetáceo..."
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              className={styles.clearBtn}
              onClick={() => onSearchChange('')}
              aria-label="Limpar busca"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

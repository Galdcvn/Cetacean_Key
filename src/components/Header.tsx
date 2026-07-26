import type { User } from '@supabase/supabase-js'
import logoSvg from '../assets/logo.svg'
import { UserMenu } from './UserMenu'
import styles from './Header.module.css'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  user: User | null
  loadingAuth: boolean
  onLoginClick: () => void
  onRegisterClick: () => void
  onSignOut: () => void
}

export function Header({
  searchQuery, onSearchChange, theme, onToggleTheme,
  user, loadingAuth, onLoginClick, onRegisterClick, onSignOut,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <img src={logoSvg} alt="Cetacean Key" className={styles.logo} />

          <div className={styles.userArea}>
            {!loadingAuth && (
              user ? (
                <UserMenu email={user.email ?? ''} onSignOut={onSignOut} />
              ) : (
                <div className={styles.authButtons}>
                  <button className={styles.loginBtn} onClick={onLoginClick}>
                    Entrar
                  </button>
                  <button className={styles.registerBtn} onClick={onRegisterClick}>
                    Cadastrar
                  </button>
                </div>
              )
            )}
          </div>

          <button
            className={styles.themeBtn}
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
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
            placeholder="Buscar por nome, gênero ou espécie..."
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

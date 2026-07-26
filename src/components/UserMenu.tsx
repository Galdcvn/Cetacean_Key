import { useState, useRef, useEffect } from 'react'
import styles from './UserMenu.module.css'

interface UserMenuProps {
  email: string
  onSignOut: () => void
  onFavoritesClick?: () => void
}

export function UserMenu({ email, onSignOut, onFavoritesClick }: UserMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const initial = email.charAt(0).toUpperCase()

  function handleSignOut() {
    if (window.confirm('Tem certeza que deseja sair?')) {
      onSignOut()
      setOpen(false)
    }
  }

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button
        className={styles.avatarBtn}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu do usuário"
      >
        <span className={styles.avatar}>{initial}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <p className={styles.email}>{email}</p>
          <hr className={styles.divider} />
          {onFavoritesClick && (
            <button
              className={styles.menuItem}
              onClick={() => { onFavoritesClick(); setOpen(false) }}
            >
              Meus Favoritos
            </button>
          )}
          <button
            className={styles.menuItem}
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}

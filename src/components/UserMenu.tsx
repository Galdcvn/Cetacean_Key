import { useState, useRef, useEffect } from 'react'
import styles from './UserMenu.module.css'

interface UserMenuProps {
  email: string
  onSignOut: () => void
}

export function UserMenu({ email, onSignOut }: UserMenuProps) {
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

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button
        className={styles.avatarBtn}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu do usuario"
      >
        <span className={styles.avatar}>{initial}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <p className={styles.email}>{email}</p>
          <hr className={styles.divider} />
          <button
            className={styles.menuItem}
            onClick={() => { onSignOut(); setOpen(false) }}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}

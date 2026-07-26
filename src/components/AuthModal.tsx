import { useState, useEffect } from 'react'
import type { AuthError } from '@supabase/supabase-js'
import styles from './AuthModal.module.css'

type AuthMode = 'login' | 'register'

interface AuthModalProps {
  mode: AuthMode
  onLogin: (email: string, password: string) => Promise<{ error: AuthError | null }>
  onRegister: (email: string, password: string) => Promise<{ error: AuthError | null }>
  onClose: () => void
  onSwitchMode: () => void
}

function translateError(message: string): string {
  const translations: Record<string, string> = {
    'Invalid login credentials': 'Email ou senha incorretos.',
    'User already registered': 'Este email já está cadastrado.',
    'Password should be at least 6 characters': 'A senha deve ter pelo menos 6 caracteres.',
    'Unable to validate email address: invalid format': 'Formato de email inválido.',
    'Email not confirmed': 'Email ainda não foi confirmado. Verifique sua caixa de entrada.',
    'Signup requires a valid password': 'Senha inválida.',
    'Email rate limit exceeded': 'Muitas tentativas. Aguarde alguns minutos.',
    'For security purposes, you can only request this once every 60 seconds': 'Por segurança, aguarde 60 segundos.',
    'Invalid email or password': 'Email ou senha incorretos.',
    'Signup is disabled': 'O cadastro está temporariamente desabilitado.',
  }
  return translations[message] ?? `Erro: ${message}`
}

export function AuthModal({ mode, onLogin, onRegister, onClose, onSwitchMode }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [success, onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setSubmitting(true)

    const action = mode === 'login' ? onLogin : onRegister
    const { error: authError } = await action(email, password)

    if (authError) {
      setError(translateError(authError.message))
    } else if (mode === 'register') {
      setSuccess(true)
    } else {
      onClose()
    }
    setSubmitting(false)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className={styles.title}>
          {mode === 'login' ? 'Entrar' : 'Criar conta'}
        </h2>
        <p className={styles.subtitle}>
          {mode === 'login'
            ? 'Entre para salvar seus favoritos.'
            : 'Crie uma conta para salvar seus cetáceos favoritos.'}
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              autoComplete="email"
            />
          </label>

          <label className={styles.label}>
            Senha
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              required
              minLength={6}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
            {mode === 'register' && (
              <span className={styles.hint}>Mínimo de 6 caracteres</span>
            )}
          </label>

          {error && <p className={styles.error}>{error}</p>}
          {success && (
            <p className={styles.success}>
              Conta criada com sucesso! Você já pode fazer login.
            </p>
          )}

          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <p className={styles.switchText}>
          {mode === 'login' ? (
            <>
              Não tem conta?{' '}
              <button className={styles.switchBtn} onClick={onSwitchMode}>
                Criar conta
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button className={styles.switchBtn} onClick={onSwitchMode}>
                Entrar
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

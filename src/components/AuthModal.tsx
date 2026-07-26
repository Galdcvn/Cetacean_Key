import { useState, useEffect } from 'react'
import type { AuthError } from '@supabase/supabase-js'
import styles from './AuthModal.module.css'

type AuthMode = 'login' | 'register'

interface AuthModalProps {
  mode: AuthMode
  onLogin: (email: string, password: string) => Promise<{ error: AuthError | null }>
  onRegister: (email: string, password: string) => Promise<{ error: AuthError | null }>
  onGoogleLogin: () => Promise<{ error: AuthError | null }>
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

export function AuthModal({ mode, onLogin, onRegister, onGoogleLogin, onClose, onSwitchMode }: AuthModalProps) {
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

        <div className={styles.dividerOr}>
          <span>ou</span>
        </div>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={async () => {
            const { error } = await onGoogleLogin()
            if (error) setError(translateError(error.message))
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continuar com Google
        </button>

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

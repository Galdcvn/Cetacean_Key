import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '24px',
          textAlign: 'center',
          fontFamily: 'var(--font-family)',
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            style={{ width: 48, height: 48, color: '#c0392b', marginBottom: 16 }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            Algo deu errado
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-light)', marginBottom: 16, maxWidth: 400 }}>
            Ocorreu um erro inesperado. Tente recarregar a pagina.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 24px',
              border: 'none',
              borderRadius: 8,
              background: 'var(--color-primary)',
              color: 'white',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Recarregar pagina
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

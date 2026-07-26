import { useState, useEffect, useCallback } from 'react'
import { Header } from './components/Header'
import { FiltersSidebar } from './components/FiltersSidebar'
import { AnimalCards } from './components/AnimalCards'
import { AnimalDetailModal } from './components/AnimalDetailModal'
import { AuthModal } from './components/AuthModal'
import { ToastProvider, useToast } from './components/Toast'
import { useFiltros } from './hooks/useFiltros'
import { useCaracteristicas } from './hooks/useCaracteristicas'
import { useFilteredAnimais } from './hooks/useFilteredAnimais'
import { useTheme } from './hooks/useTheme'
import { useAuth } from './hooks/useAuth'
import { useFavorites } from './hooks/useFavorites'
import type { AnimalComCaracteristicas } from './types/cetacean'

type AuthMode = 'login' | 'register'

function WelcomeBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="welcomeBanner">
      <div className="welcomeContent">
        <p className="welcomeText">
          Bem-vindo ao Cetacean Key! Use os filtros à esquerda para identificar cetáceos por suas características.
        </p>
        <button className="welcomeDismiss" onClick={onDismiss} aria-label="Fechar banner">
          Entendi
        </button>
      </div>
    </div>
  )
}

function AppInner() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalComCaracteristicas | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [authModal, setAuthModal] = useState<AuthMode | null>(null)
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem('cetacean_welcome_dismissed')
  })

  const { showToast } = useToast()

  useEffect(() => {
    function handleAppToast(e: Event) {
      const detail = (e as CustomEvent).detail
      showToast(detail.message, detail.type)
    }
    window.addEventListener('app-toast', handleAppToast)
    return () => window.removeEventListener('app-toast', handleAppToast)
  }, [showToast])

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const dismissWelcome = useCallback(() => {
    setShowWelcome(false)
    localStorage.setItem('cetacean_welcome_dismissed', '1')
  }, [])

  const { theme, toggleTheme } = useTheme()
  const { selectedOptions, toggleOption, resetFilters } = useFiltros()
  const { caracteristicas, loading: loadingCaract } = useCaracteristicas()
  const { results, loading: loadingAnimals, error, totalCount } = useFilteredAnimais(
    selectedOptions,
    searchQuery
  )

  const { user, loading: loadingAuth, signUp, signIn, signInWithGoogle, signOut } = useAuth()
  const { isFavorited, toggleFavorito } = useFavorites(user)

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
        user={user}
        loadingAuth={loadingAuth}
        onLoginClick={() => setAuthModal('login')}
        onRegisterClick={() => setAuthModal('register')}
        onSignOut={signOut}
      />

      {showWelcome && <WelcomeBanner onDismiss={dismissWelcome} />}

      <main className="main">
        <section className="filtros">
          {!loadingCaract && (
            <FiltersSidebar
              caracteristicas={caracteristicas}
              selectedOptions={selectedOptions}
              onToggle={toggleOption}
              onReset={resetFilters}
              allAnimals={results}
              isOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              loading={loadingCaract}
            />
          )}
        </section>

        <section className="cards">
          <AnimalCards
            animals={results}
            loading={loadingAnimals || loadingCaract}
            error={error}
            totalCount={totalCount}
            filteredCount={results.length}
            selectedOptions={selectedOptions}
            searchQuery={searchQuery}
            onSelectAnimal={setSelectedAnimal}
            user={user}
            isFavorited={isFavorited}
            onToggleFavorito={toggleFavorito}
            onRemoveFilter={toggleOption}
            onLoginClick={() => setAuthModal('login')}
          />
        </section>
      </main>

      {!drawerOpen && (
        <button
          className="mobileFilterBtn"
          onClick={() => setDrawerOpen(true)}
        >
          Filtros
          {selectedOptions.length > 0 && (
            <span className="mobileFilterBadge">{selectedOptions.length}</span>
          )}
        </button>
      )}

      <button
        className={`scrollTopBtn${showScrollTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {selectedAnimal && (
        <AnimalDetailModal
          animal={selectedAnimal}
          selectedOptions={selectedOptions}
          allAnimals={results}
          onClose={() => setSelectedAnimal(null)}
          onSelectAnimal={setSelectedAnimal}
          user={user}
          isFavorited={isFavorited(selectedAnimal.id_animal)}
          onToggleFavorito={() => toggleFavorito(selectedAnimal.id_animal)}
          onLoginClick={() => setAuthModal('login')}
        />
      )}

      {authModal && (
        <AuthModal
          mode={authModal}
          onLogin={signIn}
          onRegister={signUp}
          onGoogleLogin={signInWithGoogle}
          onClose={() => setAuthModal(null)}
          onSwitchMode={() =>
            setAuthModal((prev) => (prev === 'login' ? 'register' : 'login'))
          }
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  )
}

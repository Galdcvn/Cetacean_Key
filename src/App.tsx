import { useState, useEffect, useCallback } from 'react'
import { Header } from './components/Header'
import { FiltersSidebar } from './components/FiltersSidebar'
import { AnimalCards } from './components/AnimalCards'
import { AnimalDetailModal } from './components/AnimalDetailModal'
import { AuthModal } from './components/AuthModal'
import { useFiltros } from './hooks/useFiltros'
import { useCaracteristicas } from './hooks/useCaracteristicas'
import { useFilteredAnimais } from './hooks/useFilteredAnimais'
import { useTheme } from './hooks/useTheme'
import { useAuth } from './hooks/useAuth'
import { useFavorites } from './hooks/useFavorites'
import type { AnimalComCaracteristicas } from './types/cetacean'

type AuthMode = 'login' | 'register'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalComCaracteristicas | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [authModal, setAuthModal] = useState<AuthMode | null>(null)

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

  const { theme, toggleTheme } = useTheme()
  const { selectedOptions, toggleOption, resetFilters } = useFiltros()
  const { caracteristicas, loading: loadingCaract } = useCaracteristicas()
  const { results, loading: loadingAnimals, error, totalCount } = useFilteredAnimais(
    selectedOptions,
    searchQuery
  )

  const { user, loading: loadingAuth, signUp, signIn, signOut } = useAuth()
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
            onSelectAnimal={setSelectedAnimal}
            user={user}
            isFavorited={isFavorited}
            onToggleFavorito={toggleFavorito}
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
          onClose={() => setSelectedAnimal(null)}
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
          onClose={() => setAuthModal(null)}
          onSwitchMode={() =>
            setAuthModal((prev) => (prev === 'login' ? 'register' : 'login'))
          }
        />
      )}
    </div>
  )
}

export default App

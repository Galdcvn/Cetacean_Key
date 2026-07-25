import { useState } from 'react'
import { Header } from './components/Header'
import { FiltersSidebar } from './components/FiltersSidebar'
import { AnimalCards } from './components/AnimalCards'
import { AnimalDetailModal } from './components/AnimalDetailModal'
import { useFiltros } from './hooks/useFiltros'
import { useCaracteristicas } from './hooks/useCaracteristicas'
import { useFilteredAnimais } from './hooks/useFilteredAnimais'
import type { AnimalComCaracteristicas } from './types/cetacean'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalComCaracteristicas | null>(null)

  const { selectedOptions, toggleOption, resetFilters } = useFiltros()
  const { caracteristicas, loading: loadingCaract } = useCaracteristicas()
  const { results, loading: loadingAnimals, error, totalCount } = useFilteredAnimais(
    selectedOptions,
    searchQuery
  )

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="main">
        <section className="filtros">
          {!loadingCaract && (
            <FiltersSidebar
              caracteristicas={caracteristicas}
              selectedOptions={selectedOptions}
              onToggle={toggleOption}
              onReset={resetFilters}
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
          />
        </section>
      </main>

      {selectedAnimal && (
        <AnimalDetailModal
          animal={selectedAnimal}
          selectedOptions={selectedOptions}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  )
}

export default App

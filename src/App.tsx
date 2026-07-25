import { useState } from 'react'
import { Header } from './components/Header'
import { FiltersSidebar } from './components/FiltersSidebar'
import { AnimalCards } from './components/AnimalCards'
import { useFiltros } from './hooks/useFiltros'
import { useCaracteristicas } from './hooks/useCaracteristicas'
import { useFilteredAnimais } from './hooks/useFilteredAnimais'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const { selectedOptions, toggleOption } = useFiltros()
  const { caracteristicas, loading: loadingCaract } = useCaracteristicas()
  const { results, loading: loadingAnimals, error } = useFilteredAnimais(selectedOptions, searchQuery)

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
            />
          )}
        </section>

        <section className="cards">
          <AnimalCards
            animals={results}
            loading={loadingAnimals || loadingCaract}
            error={error}
          />
        </section>
      </main>
    </div>
  )
}

export default App

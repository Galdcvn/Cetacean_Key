import { useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import type { FeatureCollection } from 'geojson'
import { useDistribution } from '../hooks/useDistribution'
import { useTheme } from '../hooks/useTheme'
import styles from './DistributionMap.module.css'

import 'leaflet/dist/leaflet.css'

interface DistributionMapProps {
  idAnimal: number
}

function FitBounds({ bbox }: { bbox?: [number, number, number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (bbox) {
      map.fitBounds([[bbox[1], bbox[0]], [bbox[3], bbox[2]]], { padding: [20, 20] })
    }
  }, [map, bbox])
  return null
}

export function DistributionMap({ idAnimal }: DistributionMapProps) {
  const { geojson, loading, error, bbox, retry } = useDistribution(idAnimal)
  const { theme } = useTheme()

  const tileUrl = theme === 'dark'
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

  const center: [number, number] = bbox
    ? [(bbox[1] + bbox[3]) / 2, (bbox[0] + bbox[2]) / 2]
    : [-14.0, -51.0]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mapa de Distribuição</h3>
      {loading ? (
        <div className={styles.placeholder}>Carregando mapa...</div>
      ) : error ? (
        <div className={styles.placeholder}>
          <p>{error}</p>
          <button className={styles.retryBtn} onClick={retry}>
            Tentar novamente
          </button>
        </div>
      ) : geojson ? (
        <>
          <MapContainer
            center={center}
            zoom={4}
            className={styles.map}
            scrollWheelZoom={false}
            attributionControl={true}
          >
            <TileLayer url={tileUrl} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>, <a href="https://carto.com/">CartoDB</a>' />
            <GeoJSON
              data={geojson as unknown as FeatureCollection}
              style={(feature) => ({
                color: feature?.properties?.type === 'confirmed' ? '#306F9B' : '#8AB4D6',
                fillColor: feature?.properties?.type === 'confirmed' ? '#306F9B' : '#8AB4D6',
                fillOpacity: 0.25,
                weight: 2,
              })}
            />
            <FitBounds bbox={bbox} />
          </MapContainer>
          <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#306F9B' }} />
              Presença confirmada
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#8AB4D6' }} />
              Possível ocorrência
            </span>
          </div>
          <p className={styles.attribution}>
            Dados: <a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer">IUCN Red List</a> / <a href="https://www.aquamaps.org/" target="_blank" rel="noopener noreferrer">AquaMaps</a>
          </p>
          <p className={styles.helperText}>
            Regiões coloridas indicam áreas de ocorrência conhecida ou provável.
          </p>
        </>
      ) : (
        <div className={styles.placeholder}>
          Dados de distribuição indisponíveis
        </div>
      )}
    </div>
  )
}

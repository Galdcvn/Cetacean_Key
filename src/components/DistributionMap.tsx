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
  const { geojson, loading, bbox } = useDistribution(idAnimal)
  const { theme } = useTheme()

  const tileUrl = theme === 'dark'
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

  const center: [number, number] = bbox
    ? [(bbox[1] + bbox[3]) / 2, (bbox[0] + bbox[2]) / 2]
    : [-14.0, -51.0]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mapa de Distribuicao</h3>
      {loading ? (
        <div className={styles.placeholder}>Carregando mapa...</div>
      ) : geojson ? (
        <>
          <MapContainer
            center={center}
            zoom={4}
            className={styles.map}
            scrollWheelZoom={false}
            attributionControl={true}
          >
            <TileLayer url={tileUrl} attribution='&copy; OSM, CartoDB' />
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
              Presenca confirmada
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#8AB4D6' }} />
              Possivel ocorrencia
            </span>
          </div>
          <p className={styles.attribution}>Dados: IUCN Red List / AquaMaps</p>
        </>
      ) : (
        <div className={styles.placeholder}>
          Dados de distribuicao indisponiveis
        </div>
      )}
    </div>
  )
}

import {lazy} from 'react'

export const LAZY_VIEWS: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  cards: lazy(() => import('@/views/Cards/CardsView')),
  map: lazy(() => import('@/views/Map/MapView')),
  debug: lazy(() => import('@/views/DebugUI/DebugUIView')),
};
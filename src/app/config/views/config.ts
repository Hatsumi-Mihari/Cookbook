import {lazy} from 'react'
import {Error, LoaderSpiner} from '@/views'

export type Views = "cards" | "map" | "debug" | "loader" | "LoaderSpiner";

type ViewComponent = React.LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any>;

export const LAZY_VIEWS: Record<string, ViewComponent> = {
  "cards" : lazy(() => import('@/views/Cards/CardsView')),
  "map": lazy(() => import('@/views/Map/MapView')),
  "debug": lazy(() => import('@/views/DebugUI/DebugUIView')),
  "undefined": Error,
  "loader": LoaderSpiner
};
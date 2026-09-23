export interface RootContent {
  idTable: TableLim[];
  category: Category[]
  items: Item[]
}

export interface TableLim{
  min_lim: number 
  max_lim: number
  type: string
}

export interface Category {
  id: number
  lable: string
  cardsId: number[]
}

export interface Item {
  id: number
  type: string
  childIds?: number[]
  lable: string
  img_src: string
  link?: string
  content?: Content
}

export interface Content {
  list: ListItem[]
  map: MapItem[]
}

export interface ListItem {
  stepId: number
  mapId: number
  lable: string
  weight: number[]
  unit: string
  img_src: string
}

export interface MapItem {
  stepID: number
  img_src: string
  modal_info: string | null
  type: number
}

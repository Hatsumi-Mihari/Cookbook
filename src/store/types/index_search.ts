export interface RootSearchIndex {
  SearchIndex: SearchIndex[]
}

export interface SearchIndex {
  index_items: number
  id: number
  is_category: boolean
  lable: string
  category: string
  ingredients: string[]
  img_src: string
}
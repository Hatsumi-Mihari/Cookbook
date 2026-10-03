export interface RootIndexTable {
  Index_table: IndexTable[]
}

export interface IndexTable {
  id: number
  index: number
  lable: string
  type: string
}
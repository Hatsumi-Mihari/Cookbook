export interface RootScreen {
  Main_Screen: CardScreen[]
  Categoris: Categori[]
}

export interface Categori {
  lable: string
  data: CardScreen[]
}

export interface CardScreen {
  id: number
  title: string
  img_src: string
  typeID: number[]
  link: string
}



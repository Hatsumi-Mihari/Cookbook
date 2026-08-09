export interface RootScreen {
  Main_Screen: Cards[]
  Categoris: Categoris[]
}

export interface Categoris {
  lable: string
  data: Cards[]
}
export interface Cards {
  id: number
  index: number
  title: string
  img_src: string
  typeID: number[]
  link: string
}

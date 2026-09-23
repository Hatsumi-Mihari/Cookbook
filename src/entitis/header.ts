export interface RootHeader {
  header: Header
}

export interface Header {
  dropdownList: DropdownList[],
  defaultValue: string;
  defaultFilterID: number;
}

export interface DropdownList {
  link: string
  lable: string
  value: string
  typeID: number
  icon: string
}
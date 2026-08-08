export interface RootHeader {
  header: Header
}

export interface Header {
  dropdownList: DropdownList[],
  defaultValue: string;
}

export interface DropdownList {
  link: string
  lable: string
  value: string
  icon: string
}
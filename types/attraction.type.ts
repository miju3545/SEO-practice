export type AnyOBJ = {
  [key: string]: any
}

export type Attraction = {
  id: number
  name: string
  detail: string
  coverimage: string
  latitude: number
  longitude: number
}

export type AttractionList = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Attraction[]
}

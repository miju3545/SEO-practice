import { fetcher } from 'lib/queryClient'

export type GetAttractionsParams = {
  page: number
  per_page: number
}

export type GetAttractionParams = {
  id: number
}

export type Attraction = {
  id: number
  name: string
  detail: string
  coverimage: string
  latitude: number
  longitude: number
}

export type AttractionsResponse = GetAttractionsParams & {
  total: number
  total_pages: number
  data: Attraction[]
}

export type AttractionResponse = {
  status: string
  attraction: Attraction
}

class AttractionApi {
  public async getAll({ page, per_page }: GetAttractionsParams): Promise<AttractionsResponse> {
    const data = await fetcher({
      method: 'GET',
      path: '/api/attractions',
      params: { page, per_page },
    })

    return data
  }

  public async getById({ id }: GetAttractionParams): Promise<AttractionResponse> {
    const data = await fetcher({
      method: 'GET',
      path: `/api/attractions/${id}`,
    })
    return data
  }
}

export default new AttractionApi()

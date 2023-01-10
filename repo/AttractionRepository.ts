import { fetcher } from 'lib/queryClient'
import { Attraction } from 'types/attraction.type'

export type GetAttractionsParams = {
  page: number
  per_page: number
}

export type GetAttractionParams = {
  id: number
}

export type AttractionsResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Attraction[]
}

export type AttractionResponse = {
  status: string
  attraction: Attraction
}

class AttractionRepository {
  public async getAttractions({
    page,
    per_page,
  }: GetAttractionsParams): Promise<AttractionsResponse> {
    const data = await fetcher({
      method: 'GET',
      path: '/api/attractions',
      params: { page, per_page },
    })
    return data
  }

  public async getAttractionById({ id }: GetAttractionParams): Promise<AttractionResponse> {
    const data = await fetcher({
      method: 'GET',
      path: `/api/attractions/${id}`,
    })
    return data
  }
}

export default new AttractionRepository()

import { QueryKeys } from 'lib/queryClient'
import { useQuery } from 'react-query'
import AttractionApi, {
  GetAttractionsParams,
  GetAttractionParams,
} from '@/repositories/AttractionApi'

export const useGetAttractionsQuery = ({ page, per_page }: GetAttractionsParams) => {
  return useQuery(
    [QueryKeys.ATTRACTIONS, page, per_page],
    () => AttractionApi.getAll({ page, per_page }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  )
}

export const useGetAttractionQuery = ({ id }: GetAttractionParams) => {
  return useQuery([QueryKeys.ATTRACTIONS, id], () => AttractionApi.getById({ id }))
}

import { QueryKeys } from 'lib/queryClient'
import { useQuery } from 'react-query'
import AttractionRepository, {
  GetAttractionsParams,
  GetAttractionParams,
} from 'repo/AttractionRepository'

export const useGetAttractionsQuery = ({ page, per_page }: GetAttractionsParams) => {
  return useQuery(
    [QueryKeys.ATTRACTIONS, page, per_page],
    () => AttractionRepository.getAttractions({ page, per_page }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  )
}

export const useGetAttractionQuery = ({ id }: GetAttractionParams) => {
  return useQuery([QueryKeys.ATTRACTIONS, id], () => AttractionRepository.getAttractionById({ id }))
}

import { BreedCard } from "@/components/breed-card"
import { Filters } from '@/components/filters'
import { api } from '@/api'
import { Pagination } from '@/components/pagination'



export default async function HomePage({ searchParams: { search, temperament, sort } }: {
  searchParams: {
    search: string
    temperament: string
    sort: string
  }
}) {
  const { raw: { temperaments } } = await api.temperament.getTemperaments()
  let { raw: { breeds } } = await api.breed.getBreeds({ breedName: search, sort, temperament })
  
  return (
    <div>
      <Filters temperaments={temperaments} selectOptions={{ sort, temperament }} />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
        {
          breeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))
        }
      </div>
      <Pagination totalPages={10} />
    </div>
  )
}
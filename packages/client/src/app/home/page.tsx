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
  let { raw: { breeds } } = await api.breed.getBreeds({ breedName: search, sort })
  breeds = temperament ? breeds.filter(breed => breed.Temperaments[temperament]) : breeds

  console.log(breeds);
  

  return (
    <div>
      <Filters />
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
import { BreedEntity } from "@/app/interfaces/breed-entity.interface"
import { BreedCard } from "@/app/components/breed-card"
import { Response } from '../interfaces/response.interface'
import { Filters } from '@/app/components/filters'

export const getBreeds = async () => {
  const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds?page=1&limit=9`)
    .then(data => data.json())
  return breeds
}

export default async function HomePage() {
  const { raw: { breeds } } = await getBreeds()
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
    </div>
  )
}
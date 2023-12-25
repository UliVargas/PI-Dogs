import { BreedEntity } from "@/app/interfaces/breed-entity.interface"
import { BreedCard } from "@/components/breed-card"
import { Response } from '../interfaces/response.interface'
import { Filters } from '@/components/filters'

export const getBreeds = async () => {
  const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds?page=1&limit=9`)
    .then(data => data.json())
  return breeds
}

export default async function HomePage() {
  const { raw: { breeds } } = await getBreeds()
  return (
    <div className='cards-container'>
      <Filters />
      <div className='breed-cards'>
        {
          breeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))
        }
      SF</div>
    </div>
  )
}
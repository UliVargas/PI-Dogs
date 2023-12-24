import { BreedEntity } from "@/app/interfaces/breed-entity.interface";
import { BreedCard } from "@/app/components/BreedCard";
import { Response } from '../interfaces/response.interface';

export const getBreeds = async () => {
  const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds`)
    .then(data => data.json())
  return breeds
}
export default async function HomePage() {
  const { raw: { breeds } } = await getBreeds()

  return (
    <section className='flex flex-wrap justify-center gap-8'>
      {
        breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))
      }
    </section>
  )
}
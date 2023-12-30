import { Badge } from '@/components/badge'
import { BreedEntity } from '@/app/interfaces/breed-entity.interface'
import { ResponseOne } from '@/app/interfaces/response.interface'
import Image from 'next/image'

export const getBreedById = async (breedId: string) => {
  const breeds: ResponseOne<BreedEntity> = await fetch(`${process.env.API_BASE_URL}/breeds/${breedId}`)
    .then(data => data.json())
  return breeds
}

export default async function BreedDetail({ params }: { params: { id: string } }) {
  const { raw: breed } = await getBreedById(params.id)

  return (
    <main className='w-11/12 mx-auto'>
      <div>
        <h1 className='text-4xl py-10 text-center'>Detalles de la Raza</h1>
        <div className='flex flex-col gap-10 pb-14'>
          <Image
            src={breed.image}
            alt='Imagen de la raza'
            width={500}
            height={400}
            className='rounded-lg'
          />
          <div className='flex flex-col gap-5'>
            <h2 className='font-semibold text-4xl text-center'>{breed.name}</h2>
            <div className='flex gap-4 text-md justify-center'>
              <p><span className='flex'>Peso:</span> {breed.weight} Kg</p>
              <p><span className='flex'>Años de vida:</span> {breed.life_span.replace(/\s*years\s*/, '')} Años</p>
              <p><span className='flex'>Altura:</span> {breed.height} CM</p>
            </div>
            <div className='flex flex-wrap w-fit gap-3 justify-center'>
              {
                breed.Temperaments.map((temperament) => (
                  <Badge key={temperament}>{temperament}</Badge>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
import { Badge } from '@/app/components/badge'
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
    <main className='w-11/12 mx-auto flex justify-center items-center h-[calc(100vh-6rem)]'>
      <div>
        <h1 className='text-4xl py-8 text-center'>Detalles de la Raza</h1>
        <div className='flex flex-col gap-10 justify-center items-center pb-14'>
          <Image
            src={breed.image}
            alt='Imagen de la raza'
            width={500}
            height={400}
            className='rounded-lg w-[26rem]'
          />
          <div className='flex flex-col gap-5'>
            <h2 className='font-semibold text-4xl text-center'>{breed.name}</h2>
            <div className='flex gap-4 text-md justify-center'>
              <p><span className='flex font-semibold'>Peso:</span> {breed.weight} Kg</p>
              <p><span className='flex font-semibold'>Años de vida:</span> {breed.life_span.replace(/\s*years\s*/, '')} Años</p>
              <p><span className='flex font-semibold'>Altura:</span> {breed.height} CM</p>
            </div>
            <div className='flex flex-wrap lg:w-[32rem] gap-3 justify-center'>
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
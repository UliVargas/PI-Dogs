import { Badge } from '@/components/badge'
import Image from 'next/image'
import { Button } from '@/components/button'
import { api } from '@/api'



export default async function BreedDetail({ params }: { params: { id: string } }) {
  const { raw: breed } = await api.breed.getBreedById(params.id)

  return (
    <main className='w-11/12 mx-auto flex justify-center items-center h-[calc(100vh-6rem)]'>
      <div>
        <div className='flex justify-center items-center gap-10'>
          <Button className='hidden lg:block bg-transparent hover:scale-110 hover:bg-transparent'>
            <svg className="w-8 h-8 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
          </Button>
          <h1 className='text-4xl py-8 text-center'>Detalles de la Raza</h1>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center p-6 lg:p-14 border-2 rounded-md bg-neutral-50'>
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
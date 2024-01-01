import Image from "next/image";
import { BreedEntity } from "@/app/interfaces/breed-entity.interface";
import { Badge } from './badge';
import Link from 'next/link';

export const BreedCard = ({ breed }: { breed: BreedEntity }) => {
  return (
    <div className='xl:w-96 rounded-lg h-[510px] shadow-lg bg-neutral-50'>
      <Link href={`/breed/${breed.id}`} className='flex flex-col gap-2'>
        <Image
          src={breed.image}
          width={300}
          height={300}
          className='w-full h-60 object-cover rounded-t-lg'
          alt="Imagen de la raza de perro"
        />
          <div className='flex flex-col justify-around px-4 h-64'>
            <h2 className='font-semibold text-xl'>{breed.name}</h2>
            <div className='flex gap-2 flex-wrap'>
              {
                breed.Temperaments.map((temperament: string, index: number) => (
                  <Badge key={index}>
                    <span>{temperament}</span>
                  </Badge>
                ))
              }
            </div>
            <p><span className='font-semibold text-xl'>Peso: </span>{breed.weight} Kg</p>
        </div>
      </Link>
    </div>
  )
}
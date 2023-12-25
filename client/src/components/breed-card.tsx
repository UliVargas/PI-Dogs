import Image from "next/image";
import { BreedEntity } from "@/app/interfaces/breed-entity.interface";
import { Badge } from './badge';
import Link from 'next/link';

export const BreedCard = ({ breed }: { breed: BreedEntity }) => {
  return (
    <div className='breed-card'>
      <Link href={`/breed/${breed.id}`}>
        <Image
          src={breed.image}
          className='image-card'
          width={300}
          height={300}
          alt="Imagen de la raza de perro"
        />
        <div>
          <div className='text-container'>
            <h2>{breed.name}</h2>
            <div className='temperaments'>
              {
                breed.Temperaments.map((temperament: string, index: number) => (
                  <Badge key={index}>
                    <span>{temperament}</span>
                  </Badge>
                ))
              }
            </div>
            <p>{breed.weight} Kg</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
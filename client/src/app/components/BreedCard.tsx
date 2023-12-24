import Image from "next/image";
import { BreedEntity } from "@/app/interfaces/breed-entity.interface";

export const BreedCard = ({ breed }: { breed: BreedEntity }) => {
  return (
    <article className='w-[300px]'>
      <figure>
        <Image src={breed.image} width={300} height={300} alt="Imagen de la raza de perro" />
      </figure>
      <section>
        <h2 className='text-xl font-semibold my-3'>{breed.name}</h2>
        <section className='flex flex-wrap gap-x-2'>
          {
            breed.Temperaments.map((temperament: string, index: number) => (
              <p key={index}>{temperament}</p>
            ))
          }
        </section>
      </section>
      <footer className='mt-3'>
        <p>{breed.weight} Kg</p>
      </footer>
    </article>
  )
}
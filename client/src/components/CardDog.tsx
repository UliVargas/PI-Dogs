import { Dog } from '@/interfaces/dog'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  dog: Dog
}

export const CardDog: FC<Props> = ({ dog }) => {
  const temperaments = dog.Temperaments.join(', ')

  return (
    <Link href={`/dog/${dog.id}`}>
      <div className="card w-[300px] h-[500px] bg-base-100 shadow-xl">
        <Image src={dog.image ?? '/assets/dog.svg'} width={500} height={500} className="object-cover object-top h-64 w-96 rounded-md" alt="Dog" />
        <div className="card-body">
          <h2 className="card-title">{dog.name}</h2>
          <p>{temperaments}</p>
          <p>{dog.weight} kg</p>
        </div>
      </div>
    </Link>
  )
}

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
        {/* <Image src={dog.image} alt="Dog" width="250" /> */}
        <div className="card-body">
          <h2 className="card-title">{dog.name}</h2>
          <p>{temperaments}</p>
          <p>{dog.weight} kg</p>
        </div>
      </div>
    </Link>
  )
}

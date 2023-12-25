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
    <main className='container'>
      <div className='breed-details'>
        <h1>Detalles de la Raza</h1>
        <div style={{
          width: '600px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Image
            src={breed.image}
            alt='Imagen de la raza'
            width={500}
            height={400}
            style={{
              objectFit: 'fill',
              maxWidth: '100%',
              borderRadius: '20px'
            }} />
        </div>
        <h2>{breed.name}</h2>
        <div className='breed-details-info'>
          <p><span>Peso:</span> {breed.weight} Kg</p>
          <p><span>Años de vida:</span> {breed.life_span.replace(/\s*years\s*/, '')} Años</p>
          <p><span>Altura:</span> {breed.height} CM</p>
        </div>
        <div style={{
          width: '500px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {
            breed.Temperaments.map((temperament) => (
              <Badge key={temperament}>{temperament}</Badge>
            ))
          }
        </div>
      </div>
    </main>
  )
}
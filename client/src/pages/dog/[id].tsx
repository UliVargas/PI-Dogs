import { MainLayout } from '@/components/MainLayout'
import { Dog } from '@/interfaces/dog'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

interface Props {
  dog: Dog
}

const DogDetailtPage: NextPage<Props> = ({ dog }) => {
  return (
    <MainLayout title='Dog detail'>
      <Image src={dog.image} width={600} height={500} alt='Dog'/>
      <h2 className='font-bold text-2xl'>{dog.name}</h2>
      <div>
        {
          dog.Temperaments.map(temperament => (
            <p key={temperament}>{temperament}</p>
          ))
        }
      </div>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await axios.get<Dog[]>('/breeds')
  return {
    paths: data.map(dog => ({
      params: { id: dog.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data: dog } = await axios.get(`/breeds/${id}`)
  return {
    props: {
      dog
    }
  }
}

export default DogDetailtPage

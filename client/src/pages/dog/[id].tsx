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
      <Image src={dog.image ?? '/assets/dog.svg'} width="600" height="500" alt='Dog'/>
      <h2 className='font-bold text-2xl'>{dog.name}</h2>
      <p>{dog.Temperaments}</p>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data: { raw } } = await axios.get('/breeds')
  return {
    paths: raw.breeds.map((dog: Dog) => ({
      params: { id: dog.id.toString() }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data: { raw: dog } } = await axios.get(`/breeds/${id}`)

  const Temperaments = dog.Temperaments.join(', ')
  
  return {
    props: {
      dog: {
        ...dog,
        Temperaments
      }
    }
  }
}

export default DogDetailtPage

import { CardDog } from '@/components/CardDog'
import { MainLayout } from '@/components/MainLayout'
import { Dog } from '@/interfaces/dog'
import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  dogs: Dog[]
}

const HomePage: NextPage<Props> = ({ dogs }) => {
  return (
    <MainLayout title='Home'>
      <div className='flex flex-wrap gap-8'>
        {dogs.map(dog => (
          <CardDog key={dog.id} dog={dog} />
        ))}
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data: { raw } } = await axios.get('/breeds')
  const { breeds: dogs } = raw

  return {
    props: {
      dogs
    }
  }
}

export default HomePage

import { Dog } from '@/interfaces/dog'
import { createContext } from 'react'

interface ContextProps {
  dogs: Dog[]

  saveDogs: (dogs: Dog[]) => void
}

export const DogContext = createContext({} as ContextProps)
import { FC, ReactNode, useReducer } from 'react'
import { DogContext } from './DogContext'
import { Dog } from '@/interfaces/dog'
import { DogReducer } from './DogReducer'

export interface InitialState {
  dogs: Dog[]
}

const INITIAL_STATE: InitialState = {
  dogs: []
}

interface Props {
  children: ReactNode
}

const DogProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(DogReducer, INITIAL_STATE)

  const saveDogs = (dogs: Dog[]) => {
    dispatch({
      type: 'SAVE_DOGS',
      payload: dogs
    })
  }

  return (
    <DogContext.Provider value={{
      // Estados
      ...state,

      //Métodos
      saveDogs
    }}>
      {children}
    </DogContext.Provider>
  )
}

export default DogProvider
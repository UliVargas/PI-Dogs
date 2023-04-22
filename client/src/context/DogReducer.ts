import { Dog } from '@/interfaces/dog'
import { InitialState } from './DogProvider'

type Actions = {
  type: 'SAVE_DOGS',
  payload: Dog[]
}

export const DogReducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case 'SAVE_DOGS':
      return {
        ...state,
        dogs: action.payload
      }
    default: 
      return state
  }
}
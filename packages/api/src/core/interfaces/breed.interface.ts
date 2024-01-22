import { BreedEntity } from '../entities/breed.entity'

export interface Eight {
  imperial: string
  metric: string
}

export interface Image {
  id: string
  width: number
  height: number
  url: string
}

export interface BreedAPI {
  weight: Eight
  height: Eight
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
  image: Image
}

export interface CreateBreed extends BreedEntity {
  Temperaments: string[]
}

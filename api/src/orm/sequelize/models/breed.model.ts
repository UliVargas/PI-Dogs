import { Model, Optional, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'
import { BreedEntity } from '../../../entities/breed.entity'

type BreedModelAttributes = Optional<BreedEntity, 'Temperaments'>
type BreedCreationAttributes = Optional<BreedEntity, 'id' | 'image' | 'Temperaments'>

class Breed extends Model<BreedModelAttributes, BreedCreationAttributes> {
  declare id: string
  declare name: string
  declare height: string
  declare weight: string
  declare life_span: string
  declare image: string
}

Breed.init({
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  },
  height: {
    type: STRING,
    allowNull: false
  },
  weight: {
    type: STRING,
    allowNull: false
  },
  life_span: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: STRING
  }
}, {
  sequelize,
  tableName: 'Breeds',
  modelName: 'Breeds'
})

export default Breed

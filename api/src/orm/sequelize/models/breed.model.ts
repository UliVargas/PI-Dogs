import { Model, Optional, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'
import { BreedEntity } from '../../../entities/breed.entity'

type BreedModelAttributes = Optional<BreedEntity, 'temperaments'>
type BreedCreationAttributes = Optional<BreedEntity, 'id' | 'image' | 'temperaments'>

class Breed extends Model<BreedModelAttributes, BreedCreationAttributes> {}

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

import { Model, UUID } from 'sequelize'
import sequelize from '..'

interface BreedTemperamentAttribute {
  BreedId: string
  TemperamentId: string
}

class BreedTemperament extends Model<BreedTemperamentAttribute> {
  declare BreedId: string
  declare TemperamentId: string
}

BreedTemperament.init({
  BreedId: {
    type: UUID,
    allowNull: false
  },
  TemperamentId: {
    type: UUID,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'BreedTemperaments',
  modelName: 'BreedTemperaments'
})

export default BreedTemperament

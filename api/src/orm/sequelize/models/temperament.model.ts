import { Model, Optional, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'
import { TemperamentEntity } from '../../../entities/temperament.entity'

interface TemperamentCreateAttributes extends Optional<TemperamentEntity, 'id'> {}

class Temperament extends Model<TemperamentEntity, TemperamentCreateAttributes> {
  declare id: string
  declare name: string
}

Temperament.init({
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'Temperaments',
  modelName: 'Temperaments'
})

export default Temperament

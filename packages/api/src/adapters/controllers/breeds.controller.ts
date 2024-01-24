import { NextFunction, Request, Response } from 'express'
import { FindAllUseCase, FindOneUseCase, CreateUseCase } from '../../domain/services/breeds'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => {
  const findAllUseCase = FindAllUseCase(dependencies)
  const findOneUseCase = FindOneUseCase(dependencies)
  const createUseCase = CreateUseCase(dependencies)

  const findAll = async (req: Request, res: Response, next: NextFunction) => {
    const { name, page, limit, sort, temperament } = req.query as { name: string, page: string, limit: string, sort: 'ASC' | 'DESC', temperament: string }
    res.req.body = await findAllUseCase({ name, page, limit, sort, temperament })
    next()
  }

  const create = async (req: Request, res: Response, next: NextFunction) => {
    res.req.body = await createUseCase(req.body)
    next()
  }

  const findOne = async (req: Request, res: Response, next: NextFunction) => {
    const breed = await findOneUseCase(req.params.breedId)
    if (!breed) {
      return res.status(404).json({})
    }

    res.req.body = breed
    next()
  }

  return {
    findAll,
    findOne,
    create
  }
}

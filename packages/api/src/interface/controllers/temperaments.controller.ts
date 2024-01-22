import { NextFunction, Request, Response } from 'express'
import { CreateUseCase, FindAllUseCase } from '../../application/use-cases/temperaments'
import { Dependencies } from '../../infrastructure/config/dependencies'
export default (dependencies: Dependencies) => {
  const createUseCase = CreateUseCase(dependencies)
  const findAllUseCase = FindAllUseCase(dependencies)
  const findAll = async (req: Request, res: Response, next: NextFunction) => {
    const { name, page, limit } = req.query as { name: string, page: string, limit: string }
    res.req.body = await findAllUseCase({ name, page, limit })
    next()
  }

  const create = async (req: Request, res: Response, next: NextFunction) => {
    res.req.body = await createUseCase(req.body.name)
    next()
  }

  return {
    findAll,
    create
  }
}

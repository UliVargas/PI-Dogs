type FindAll = {
  page: number
  limit: number
  sort: 'ASC' | 'DESC'
  name?: string
  temperament?: string
}

export type RepositoryPayload<T> =
  | { method: 'create'; typeData: T }
  | { method: 'findAll'; typeData: FindAll }
  | { method: 'findOne'; typeData: string }

export interface Repository<T> {
  create(payload: RepositoryPayload<T>['typeData']): Promise<T>
  findAll(payload: RepositoryPayload<never>['typeData']): Promise<{ data: T[], count: number }>
  findOne(payload: RepositoryPayload<never>['typeData']): Promise<T | null>
}

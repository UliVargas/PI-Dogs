import { Pagination } from './pagination.interface';

export interface Response<T> {
  raw: {
    pagination: Pagination;
  } & ({ [key: string]: T } | Record<string, never>);
}

export interface ResponseOne<T> {
  raw: T
}
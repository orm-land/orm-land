import {Repository} from "./Repository.ts";

export interface IORM {
  entities: any[];
}

export class ORM implements IORM {
  constructor(
    readonly entities: any[],
  ) {}

  getRepository<T extends Object>(c: T) {
    return new Repository<T>();
  }
}

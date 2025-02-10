type SearchOptions<T> = {
  where: Partial<Pick<T, any>>;
};

export class Repository<T> {
  constructor() {}

  store<E extends { new (): T }>(entity: E): Promise<void> {
    console.log("stored", entity);
    return Promise.resolve();
  }

  findOne(options: SearchOptions<T>): Promise<T> {
    console.log("findOne", options);
    return Promise.resolve({} as T);
  }
}

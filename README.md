# orm-land

> ⚠️ This project is a concept test at the moment

- Entities
- Repositories

Create an entity

```typescript
// House.entity.ts
@Entity()
export class House {

    @Attribute()
    street: string

    constructor(steet: string) {
        this.steet = street;
    }
}
```

Init the orm

```typescript
let orm = Connection.init({})
```

Use the orm to perform actions:

```typescript
const house = new House('Oxford srt.');

const houseRepository = orm.getRepository(House);
await houseRepository.store(house);
let storedHouse = await houseRepository.findOne({
    where: {
        street: 'Oxford srt.'
    }
})

console.log(storedHouse);
```

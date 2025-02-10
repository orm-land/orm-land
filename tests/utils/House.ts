import {Entity} from "../../src/entity/Entity.ts";
import {Attribute} from "../../src/entity/Attribute.ts";

@Entity()
export class House {
  @Attribute()
  street: string;

  constructor(street: string) {
    this.street = street;
  }
}

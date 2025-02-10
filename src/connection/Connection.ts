import type {Options} from "./Options.ts";
import {ORM} from "../ORM.ts";

export class Connection {
  init(options: Options): Promise<ORM> {
    console.log(options);
    return Promise.resolve(new ORM());
  }

  test(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

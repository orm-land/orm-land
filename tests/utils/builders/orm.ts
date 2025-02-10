import {ORM} from "../../../src/ORM.ts";

export function buildOrm(args: Partial<ORM>) {
  return new ORM(
    args.entities || [],
  );
}

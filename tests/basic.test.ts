import {House} from "./utils/House.ts";
import {buildOrm} from "./utils/builders/orm.ts";

Deno.test("simple use case", async () => {
  const orm = buildOrm({ entities: [House] });
  const house = new House("Oxford srt.");

  const houseRepository = orm.getRepository(House);

  await houseRepository.store({ a: "something" });
  await houseRepository.store(house);
  await houseRepository.store(House);

  const storedHouse = await houseRepository.findOne({
    where: {
      street: "Oxford srt.",
    },
  });

  console.log(storedHouse);
});

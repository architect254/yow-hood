import { faker } from "@faker-js/faker";
import { writeFile } from "node:fs";

const database = { locations: [], homes: [] };

export function createRandomLocation() {
  return {
    id: faker.string.uuid(),
    pid: faker.string.uuid(),
    county: faker.location?.city(),
    subCounty: faker.location.state(),
    location: faker.location.county(),
    area: faker.location.street(),
  };
}

export function createRandomHome() {
  return {
    id: faker.string.uuid(),
    type: faker.airline.airplane(),
    desc: `${faker.word.adjective()} ${faker.word.adjective()} ${faker.word.adjective()} house`,
    rooms: faker.number.int({ min: 2, max: 10 }),
    rent: faker.number.int({ min: 10000, max: 50000 }),
  };
}

export const locations = faker.helpers.multiple(createRandomLocation, {
  count: 100,
});
export const homes = faker.helpers.multiple(createRandomHome, {
  count: 5000,
});

database.locations = locations;
database.homes = homes;

const json = JSON.stringify(database);
writeFile("mock/database.json", json, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("database.json created");
});

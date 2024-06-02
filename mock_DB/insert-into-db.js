import { faker } from "@faker-js/faker";
import bfj from "bfj";

const { write } = bfj;

const database = { locations: [], homes: [] };

export function createRandomCounty() {
  return {
    id: faker.string.uuid(),
    name: faker.location.city(),
  };
}
export function createRandomSubCounty() {
  return {
    id: faker.string.uuid(),
    name: faker.location.state(),
  };
}
export function createRandomLocation() {
  return {
    id: faker.string.uuid(),
    name: faker.location.county(),
  };
}
export function createRandomArea() {
  return {
    id: faker.string.uuid(),
    name: faker.location.street(),
  };
}

const home_types = [
  `Cape Cod`,
  `Victorian`,
  `Colonial`,
  `Contemporary`,
  `Bungalow`,
  `Town Home`,
  `Mansion`,
  `Yurt`,
  `Condominium`,
];

export function createRandomHome() {
  return {
    id: faker.string.uuid(),
    locationId: 0,
    desc: `${faker.word.adjective()} ${faker.word.adjective()} ${
      home_types[Math.floor(Math.random() * (home_types.length + 1))]
    } House`,
    rooms: faker.number.int({ min: 2, max: 10 }),
    rent: faker.number.int({ min: 10000, max: 50000 }),
    image_url: faker.image.unsplash.buildings(400, 320, `Mansion`),
  };
}

export const counties = faker.helpers.multiple(createRandomCounty, {
  count: 50,
});
export const subCounties = faker.helpers.multiple(createRandomSubCounty, {
  count: 50,
});
export const locations = faker.helpers.multiple(createRandomLocation, {
  count: 50,
});
export const areas = faker.helpers.multiple(createRandomArea, {
  count: 80,
});
export const homes = faker.helpers.multiple(createRandomHome, {
  count: 100,
});

const db_locations = [];
const db_areas = [];
for (let countyIndex = 0; countyIndex < counties.length; countyIndex++) {
  const county = counties[countyIndex];
  county.pid = county.id;

  for (
    let subCountyIndex = 0;
    subCountyIndex < subCounties.length;
    subCountyIndex++
  ) {
    const subCounty = subCounties[subCountyIndex];
    subCounty.pid = county.id;

    for (
      let locationIndex = 0;
      locationIndex < locations.length;
      locationIndex++
    ) {
      const location = locations[locationIndex];
      location.pid = subCounty.id;

      for (let areaIndex = 0; areaIndex < areas.length; areaIndex++) {
        const area = areas[areaIndex];
        area.pid = location.id;
        db_areas.push(area);
        db_locations.push(area);
      }
      db_locations.push(location);
    }
    db_locations.push(subCounty);
  }
  db_locations.push(county);
}
const db_homes = [];
for (let homeIndex = 0; homeIndex < homes.length; homeIndex++) {
  const home = homes[homeIndex];
  home.locationId = `${
    db_areas[Math.floor(Math.random() * (db_areas.length + 1))].id
  }`;

  db_homes.push(home);
}

database.locations = db_locations;
database.homes = db_homes;

write("mock_DB/database.json", database)
  .then(console.log("database.json created"))
  .catch((err) => {
    console.error(`An error occured while writing the database file`, err);
  });

import Data from '../fakeData/rides.json';

const groupParks = () => {
  const groups = Data.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = { name: item.group, parks: [] };
    }

    let park = acc[item.group].parks.find(
      (park) => park.name === item.park_name
    );

    if (!park) {
      park = { name: item.park_name, rides: [] };
      acc[item.group].parks.push(park);
    }

    const ride = {
      id: item.id,
      name: item.name,
      is_open: item.is_open,
      wait_time: item.wait_time,
      last_updated: item.last_updated,
      url: item.url, // add the url property from rides.json
    };

    park.rides.push(ride);
    return acc;
  }, {});

  return Object.values(groups);
};

export default groupParks;

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
    // console.log(park);
    park.rides.push(item);
    return acc;
  }, {});
  // console.log(JSON.stringify(Object.values(groups)));

  return Object.values(groups);
};

export default groupParks;

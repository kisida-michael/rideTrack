const images = require('../middleware/images.js');
const fetch = require('node-fetch');
const fs = require('fs');

const park_ids = [6, 7, 8, 5, 64, 65];

async function getRides() {
  const parkGroups = {
    6: { park_name: 'Magic Kingdom', group: 'Disney' },
    7: { park_name: 'Hollywood Studios', group: 'Disney' },
    8: { park_name: 'Animal Kingdom', group: 'Disney' },
    5: { park_name: 'Epcot', group: 'Disney' },
    64: { park_name: 'Islands of Adventure', group: 'Universal' },
    65: { park_name: 'Universal Studios', group: 'Universal' },
  };

  const allRides = [];

  for (const park_id of park_ids) {
    const url = `https://queue-times.com/en-US/parks/${park_id}/queue_times.json`;
    const { group, park_name } = parkGroups[park_id] || {
      group: 'Unknown',
      park_name: 'Unknown',
    };

    const response = await fetch(url);
    const json = await response.json();

    const rides = json.lands.reduce((acc, land) => {
      return acc.concat(
        land.rides.map((ride) => {
          const image = images.find((img) => img.id === ride.id);
          return {
            ...ride,
            park_name,
            park_id,
            group,
            url: image ? image.image : null,
          };
        })
      );
    }, []);

    allRides.push(...rides);
  }

  const ridesJson = JSON.stringify(allRides, null, 2);
  fs.writeFileSync('rides.json', ridesJson);

  console.log('Rides data saved to rides.json');

  return allRides;
}

getRides();
// export default getRides;

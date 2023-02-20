const input = {
  lands: [
    {
      id: 65,
      name: 'Animation Courtyard',
      rides: [
        {
          id: 7974,
          name: 'Disney Junior Play and Dance!',
          is_open: true,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 6707,
          name: 'Meet Sulley at Walt Disney Presents',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 5145,
          name: 'Walt Disney Presents',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 66,
      name: 'Commissary Lane',
      rides: [
        {
          id: 6704,
          name: 'Meet Disney Stars at Red Carpet Dreams',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 67,
      name: 'Echo Lake',
      rides: [
        {
          id: 1174,
          name: 'For the First Time in Forever: A Frozen Sing-Along Celebration',
          is_open: true,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 6702,
          name: 'Indiana Jones™ Epic Stunt Spectacular!',
          is_open: true,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 6703,
          name: 'Meet Olaf at Celebrity Spotlight',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 120,
          name: 'Star Tours – The Adventures Continue',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 7333,
          name: 'Vacation Fun - An Original Animated Short with Mickey & Minnie',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 68,
      name: 'Hollywood Boulevard',
      rides: [
        {
          id: 6361,
          name: "Mickey & Minnie's Runaway Railway",
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 70,
      name: 'Muppet Courtyard',
      rides: [
        {
          id: 118,
          name: 'Muppet*Vision 3D',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 71,
      name: 'Pixar Place',
      rides: [
        {
          id: 117,
          name: 'Toy Story Mania!',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 360,
      name: "Star Wars: Galaxy's Edge",
      rides: [
        {
          id: 6368,
          name: 'Millennium Falcon: Smugglers Run',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 10902,
          name: 'Millennium Falcon: Smugglers Run Single Rider',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 6369,
          name: 'Star Wars: Rise of the Resistance',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 72,
      name: 'Sunset Boulevard',
      rides: [
        {
          id: 1176,
          name: 'Beauty & The Beast Live on Stage',
          is_open: true,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 6378,
          name: "Lightning McQueen's Racing Academy",
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 119,
          name: "Rock 'n' Roller Coaster Starring Aerosmith",
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 10901,
          name: "Rock 'n' Roller Coaster Starring Aerosmith Single Rider",
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 123,
          name: 'The Twilight Zone Tower of Terror™',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
    {
      id: 176,
      name: 'Toy Story Land',
      rides: [
        {
          id: 5477,
          name: 'Alien Swirling Saucers',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
        {
          id: 5476,
          name: 'Slinky Dog Dash',
          is_open: false,
          wait_time: 0,
          last_updated: '2023-02-10T10:25:44.000Z',
        },
      ],
    },
  ],
  rides: [],
};
const rides = input.lands.reduce((acc, land) => {
  return acc.concat(
    land.rides.map((ride) => {
      return {
        ...ride,
        park_name: 'Hollywood Studios',
        park_id: 7,
        group: 'Disney',
      };
    })
  );
}, []);

console.log(JSON.stringify(rides));

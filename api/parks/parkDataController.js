const { entityChildren, entityLiveData, parkSchedule } = require('../../utils/themeParkAPI');
const { getAllParks, upsertEntity, getAllEntities } = require('./parkDataModel');
const cron = require('node-cron');

async function checkForNewEntities() {
    const parks = await getAllParks();

    for (let park of parks) {
        const entitiesResponse = await entityChildren(park.id);
        // console.log(`Entities for ${park.name}:`, entitiesResponse);
        for (let entityChild of entitiesResponse.children) {
            await upsertEntity({
                id: entityChild.id,
                name: entityChild.name,
                type: entityChild.entityType,
                park_id: park.id,

            });
        }
    }
}

async function getEntityLiveData(){
    const entities = await getAllParks();
  
        
        const entityLiveDataResponse = await entityLiveData(entities[0].id);
        console.log(entityLiveDataResponse);
        
        //consoke log the number of entities for each park
       
        // switch (entityLiveDataResponse.entityType) {
        //     case 'ATTRACTION':
        //         console.log(`Entity Live Data for ${entity.name}:`, entityLiveDataResponse.queue);
        //         break;
        //     case 'SHOW':
        //         console.log(`Entity Live Data for ${entity.name}:`, entityLiveDataResponse.showtimes);
        //         break;
        // }
        // console.log(`Entity Live Data for ${entity.name}:`, entityLiveDataResponse.liveData);
    
    console.log('done')
}

getEntityLiveData()


//cron job runs at 3am on the first of every month
cron.schedule('0 3 1 * *', checkForNewEntities);



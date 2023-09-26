const Themeparks = require('themeparks');
let apiInstance = new Themeparks.EntitiesApi();

// used to get a list of all the parks, and their IDs or the entities within a park and their IDs
async function entityChildren(entityID) {
    try {
        const data = await apiInstance.getEntityChildren(entityID);
        // console.log('API called successfully. Returned data:', data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
// used to get the live data for a specific entity in a park
async function entityLiveData(entityID) {
    try {
        const data = await apiInstance.getEntityLiveData(entityID);
        // console.log('API called successfully. Returned data:', data);
        return data;
    } catch (error) {
        console.error(error);
    }
} 
// used to get the park schedule for the rest of the month returns 
// info = park hopper hours, operating = park hours and ticketing = early or late hours if applicable.
async function parkSchedule(entityID) {
    try {
        const data = await apiInstance.getEntityScheduleUpcoming(entityID)
        // console.log('API called successfully. Returned data:', data);
        return data;
    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    entityChildren,
    entityLiveData,
    parkSchedule
}

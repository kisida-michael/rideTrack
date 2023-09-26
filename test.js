var Themeparks = require('themeparks');
let apiInstance = new Themeparks.EntitiesApi();

// var api = new Themeparks.DestinationsApi()
// api.getDestinations().then(function(data) {
// //   console.log('API called successfully. Returned data:', data); // Directly displaying the object
// }, function(error) {
//   console.error(error);
// });


function entityChildren(entityID) {
    apiInstance.getEntityChildren(entityID).then((data) => {
        console.log('API called successfully. Returned data: ' + data);
        console.log(data)
        return data
    }, (error) => {
        console.error(error);
    });
}

function entityLiveData (entityID) {
    apiInstance.getEntityLiveData(entityID).then((data) => {
        // console.log('API called successfully. Returned data: ' + data);
        console.log(data.liveData)
        return data
    }, (error) => {
        console.error(error);
    });
}

function parkSchedule (entityID) {
    apiInstance.getEntityScheduleUpcoming(entityID).then((data) => {
        console.log('API called successfully. Returned data: ' + data);
        console.log(data)
        return data
    }, (error) => {
        console.error(error);
    });
}
// entityChildren('75ea578a-adc8-4116-a54d-dccb60765ef9')

// module.exports = {
//     entityChildren,
//     entityLiveData,
//     parkSchedule
// }


entityLiveData('75ea578a-adc8-4116-a54d-dccb60765ef9')
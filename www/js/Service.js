angular.module('Service', []).factory('PedometerDataService', function() {
  var stepCounts = 0;

  var successHandler = function (pedometerData) {
    // pedometerData.startDate; -> ms since 1970
    // pedometerData.endDate; -> ms since 1970
    // pedometerData.numberOfSteps;
    // pedometerData.distance;
    // pedometerData.floorsAscended;
    // pedometerData.floorsDescended;
    return pedometerData.numberOfSteps;
  };
  pedometer.startPedometerUpdates(successHandler, onError);

  return {
    steps: stepCounts
  };
})

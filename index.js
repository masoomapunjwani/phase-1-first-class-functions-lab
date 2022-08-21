// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]];
};
const returnLastTwoDrivers = function(drivers){
    return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(number){
    return fare => fare * number; 
};

const fareMultiplier = createFareMultiplier(2);
function fareDoubler(fare) {
    return fareMultiplier(fare);
};

const fareMultiply = createFareMultiplier(3);
function fareTripler(fare){
    return fareMultiply(fare);
};
    
function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers);
};

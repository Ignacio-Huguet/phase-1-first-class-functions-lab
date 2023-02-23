// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




const createFareMultiplier = function (num) {
    return function (num2) {
        return num * num2
    }
}

const fareDoubler = createFareMultiplier(2) 
// fareDoubler(20)


const fareTripler = createFareMultiplier(3) 


const selectDifferentDrivers = function(drivers, driverGroup){
    return driverGroup(drivers)
}
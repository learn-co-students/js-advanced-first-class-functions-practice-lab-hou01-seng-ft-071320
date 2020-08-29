// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach((driver) => {
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location){
    drivers.forEach((driver)=>{
        if (driver.hometown === location){
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
    });
};

function driversByName(drivers){
    let sortedDrivers = drivers.slice().sort((driverA, driverB) =>{
        return driverA.name.localeCompare(driverB.name)
    })
    return sortedDrivers
}

function totalRevenue(drivers){
    return drivers.reduce(function(previous, driverA){
        return driverA.revenue + previous
    }, 0)
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length
}




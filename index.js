// Code your solution in this file!

const logDriverNames = function(drivers){
    drivers.forEach(function (driver){
        console.log(driver.name);
    });
};

const logDriversByHometown = function(drivers, location){
    drivers.forEach(function (driver) {
        if (location === driver.hometown){
            console.log(driver.name);
        };
    });
};

const driversByRevenue = function(drivers){
    let sorted = drivers.slice().sort(function (a, b) {
        return a.revenue - b.revenue;
    });
    return sorted;
};

const driversByName = function(drivers){
    let sorted = drivers.slice().sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        
    });
    return sorted;
};

const totalRevenue = function(drivers){
    let total = 0;
    drivers.forEach(function(driver){
        total += driver.revenue;
    });
    return total;
};

const averageRevenue = function(drivers){
    let average = totalRevenue(drivers) / drivers.length;
    return average;  
};
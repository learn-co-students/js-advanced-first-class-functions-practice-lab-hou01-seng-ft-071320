// Code your solution in this file!

const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];



const logDriverNames = (array) => {
    array.forEach(element => {
        console.log(element.name)   
    });
}

// console.log(logDriverNames(drivers))

const logDriversByHometown = (array, hometown) => {
    array.forEach(element => {
        if (element.hometown === hometown) {
            console.log(element.name) 
        }          
    });
}

// console.log(logDriversByHometown(drivers, 'New York'))

const sortStrings = function (a, b) {
    return a.localeCompare(b);
};

const sortNumbers = function (num1, num2) {
    return num1 - num2;
  };

const driversByRevenue = (array) => {
    const a = array.slice()
    return a.sort(function (firstDriver, secondDriver) {
      return firstDriver.revenue - secondDriver.revenue;
    });
};

// console.log(drivers)
// console.log(drivers.slice())
// console.log(driversByRevenue(drivers))

const driversByName = (array) => {
    const a = array.slice()
    return a.sort( (firstDriver, secondDriver) => {
        return firstDriver.name.localeCompare(secondDriver.name);
    })
}

// console.log(driversByName(drivers))

const totalRevenue = (array) => {
    const reducer = (accumulator,currentDriver) => { return accumulator + currentDriver.revenue}
    return array.reduce(reducer, 0)
}

console.log(totalRevenue(drivers))

const averageRevenue = (array) => {
    const total = totalRevenue(array);
    const driverCount = array.length;
    return total / driverCount;
}

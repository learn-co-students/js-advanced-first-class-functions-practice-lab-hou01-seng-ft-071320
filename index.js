// Code your solution in this file!
function logDriverNames(driver){
    driver.forEach(function(obj){
        console.log(obj['name'])
        }
    )
}

function logDriversByHometown(driver,location){
    logDriverNames(driver.filter(function(obj){return obj['hometown'] === location}))
}

function driversByRevenue(driver){
    return [...driver].sort(function(obj1,obj2){
        return obj1['revenue'] - obj2['revenue']
        }
    )
}

function driversByName(driver){
    return [...driver].sort(function(obj1,obj2){
        return obj1['name'].localeCompare(obj2['name']);
        }
    )
}

function totalRevenue(driver){
    return [...driver].map(function(obj){return obj['revenue']}).reduce((accumlator, currentValue)  => {return accumlator + currentValue;},0);
}

function averageRevenue(driver){
    return totalRevenue(driver) / driver.length
}
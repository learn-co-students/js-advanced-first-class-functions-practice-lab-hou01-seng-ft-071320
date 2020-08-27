// Code your solution in this file!
function logDriverNames(array) {
    array.forEach(function(driver) {
        console.log(driver.name)
    })
}

function logDriversByHometown(array, location) {
    array.forEach(function(driver) {
        if (driver.hometown === location){
            console.log(driver.name)
        }

    })
}

function driversByRevenue(array) {
    return array.slice().sort(function(a,b) {
        if (a.revenue < b.revenue) {
            return -1
        } 
        if (a.revenue > b.revenue) {
            return 1
        }
        return 0
    })
}

function driversByName(array) {
    return array.slice().sort(function(a,b) {
        if (a.name < b.name) {
            return -1
        } 
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
}

function totalRevenue(array) {
    return array.reduce((total, driver) => total + driver.revenue, 0)
}

function averageRevenue(array) {
    return totalRevenue(array) / array.length
}
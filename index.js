// Code your solution in this file!
function logDriverNames(driver){
  const callback=function(dri,i,arr){
    console.log(dri.name)
  }
  driver.forEach(callback)
}

function logDriversByHometown(driver,location){
  const callback=function(dri,i,arr){
    if (dri.hometown===location){
          console.log(dri.name)
    }
  }
  driver.forEach(callback)
}

function driversByRevenue(driver){

  const callback=function(dri1,dri2){return dri1.revenue-dri2.revenue}
  return driver.slice().sort(callback)
}

function driversByName(driver){

  const callback=function(dri1,dri2){return dri1.name.localeCompare(dri2.name)}
  return driver.slice().sort(callback)
}

function totalRevenue(driver){
  const callback=function(agg,ele,i,arr){
    return agg + parseInt(ele.revenue)
  }
  return driver.reduce(callback,[])
}




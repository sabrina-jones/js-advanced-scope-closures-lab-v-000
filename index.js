function produceDrivingRange(blocks){
  return function(start, finish){
    let beginning = parseInt(start);
    let end = parseInt(finish);
    let routeDistance = Math.abs(end - beginning);
    let totalDifference = blocks - routeDistance

    if(totalDifference > 0){
      return `within range by ${totalDifference}`;
    } else {
      return `${Math.abs(totalDifference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(fare){
  return function(tip){
    return fare*tip
  }
}
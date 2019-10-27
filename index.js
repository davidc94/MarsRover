function MarsRover(bounds, location, movement) {

  let invalidInput = false;

  let initialXCoord = location[0];
  let initialYCoord = location[1];
  let initialDirection = location[2];

  let newXCoord = initialXCoord;
  let newYCoord = initialYCoord;
  let newDirection = initialDirection;

  for (var i=0; i<movement.length, i++;){
    if(movement[i] === 'L'){
      newDirecton = findNewDirection(newDirection, 'L');
    }
    if(movement[i] === 'R'){
      newDirecton = findNewDirection(newDirection, 'R');
    }
    if(movement[i] === 'M'){
      let newLocation = move(newXCoord, newYCoord, newDirection);
      newXCoord = newLocation[0];
      newYCoord = newLocation[1];
    }
  }

  function findNewDirection(currentDirection, movement) {
    let directions = [N,E,S,W];
    let newDirection;
    if (movement === 'L') {
      if(directions.indexOf(currentDirection) === 0) {
        newDirection = directions[3];
      }
      else {
        newDirection = directions[directions.indexOf(currentDirection)-1]
      }
    }
    if (movement === 'R') {
      if(directions.indexOf(currentDirection) === 3) {
        newDirection = directions[0];
      }
      else {
        newDirection = directions[directions.indexOf(currentDirection)+1]
      }
    }
    return newDirection;
  }

  function move(currentXCoord, currentYCoord, direction) {
    let xCoord = currentXCoord;
    let yCoord = currentYCoord;

    if (direction === 'E') {
      xCoord + 1;
    }
    if (direction === 'W') {
      xCoord - 1;
    }
    if (direction === 'N') {
      yCoord + 1;
    }
    if (direction === 'S') {
      yCoord - 1;
    }

    if(xCoord > bounds[0] || xCord < 0 || yCoord > bounds[1] || yCord < 0){
      invalidInput = true
    } else {
      return [xCoord, yCoord]
    }
  }

  if(invalidInput) {
    return 'INVALID INPUT'
  } else {
    return newXCoord + '' + '' + newYCoord + '' + newDirection;
  }
}
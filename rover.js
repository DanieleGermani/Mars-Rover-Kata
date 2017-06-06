var Rover = {
  position: [0, 0],
  direction: 'N',
};

var COMMAND = 'ffrfrfffrbbbblffff';
/*var GRID = {
  rows: 10,
  columns: 10
};*/
var grid = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
console.log(grid);

/*OBSTACULOS*/


/* ROVER */
// Move
function move(direction) {
  var roverDirection = Rover.direction;
  var roverPosition = Rover.position;

  switch (direction) {
    case "f":
      if (roverDirection === "N") {
        roverPosition[1] = (roverPosition[1] === 0) ? 0 : roverPosition[1] - 1;
      } else if (roverDirection === 'E') {
        roverPosition[0] = (roverPosition[0] === grid[0] - 1) ? grid[0] - 1 : roverPosition[0] + 1;
      } else if (roverDirection === 'S') {
        roverPosition[1] = (roverPosition[1] === grid[1] - 1) ? grid[1] - 1 : roverPosition[1] + 1;
      } else if (roverDirection === 'W') {
        roverPosition[0] = (roverPosition[0] === 0) ? 0 : roverPosition[0] - 1;
      }
      break;
    case "b":
      if (roverDirection === "N") {
        roverPosition[1] = (roverPosition[1] === 0) ? 0 : roverPosition[1] + 1;
      } else if (roverDirection === 'E') {
        roverPosition[0] = (roverPosition[0] === grid[0] - 1) ? grid[0] - 1 : roverPosition[0] - 1;
      } else if (roverDirection === 'S') {
        roverPosition[1] = (roverPosition[1] === grid[1] - 1) ? grid[1] - 1 : roverPosition[1] - 1 ;
      } else if (roverDirection === 'W') {
        roverPosition[0] = (roverPosition[0] === 0) ? 0 : roverPosition[0] + 1;
      }

      break;

  }
  moveRover(roverPosition)
};

function moveRover(position) {
  Rover.position = position;
}

// Turn
function turn(direction) {
  var roverDirection = Rover.direction;
  var roverPosition = Rover.position;
  switch (direction) {
    case 'l':
      if (roverDirection === 'N') {
        roverDirection = 'W';
      } else if (roverDirection === 'E') {
        roverDirection = 'N';
      } else if (roverDirection === 'S') {
        roverDirection = 'E';
      } else if (roverDirection === 'W') {
        roverDirection = 'S';
      }
      break;

    case 'r':
      if (roverDirection === 'N') {
        roverDirection = 'E';
      } else if (roverDirection === 'E') {
        roverDirection = 'S';
      } else if (roverDirection === 'S') {
        roverDirection = 'W';
      } else if (roverDirection === 'W') {
        roverDirection = 'N';
      }
      break;
  }

  turnRover(roverDirection);
}

function turnRover(direction) {
  Rover.direction = direction;

}

function execCommand(command) {
  var letters = command.split('');

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter === 'f' || letter === 'b') {
      move(letter);
      console.log(' Direction: ' + Rover.direction + ' New Rover position: [' + Rover.position[0] + ', ' + Rover.position[1] + ']')
    }

    if (letter === 'r' || letter === 'l') {
      turn(letter);

    }
  }
}

/* INIT */
moveRover(Rover.position);
turnRover(Rover.direction)

execCommand(COMMAND);

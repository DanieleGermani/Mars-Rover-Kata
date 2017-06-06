var DIRECTIONS = {
  'N': '-north',
  'E': '-east',
  'S': '-south',
  'W': '-west'
};
var Rover = {
  position: [0,0],
  direction: 'N',
};

var COMMAND = 'ffrfrfffrfllffffrlllfflllfff';
var GRID = {
  rows: 10,
  columns: 10
};


/* ROVER */
// Move
function move(direction){
  var roverDirection = rover.direction;
  var roverPosition = rover.position;

  switch (direction) {
    case "f":
      if(roverDirection === "N") {
        roverPosition[1] = (roverPosition[1] === 0) ? 0 : roverPosition[1] - 1;
      } else if (roverDirection === 'E') {
        roverPosition[0] = (roverPosition[0] === GRID.rows - 1) ? GRID.rows - 1 : roverPosition[0] + 1;
      } else if (roverDirection === 'S') {
        roverPosition[1] = (roverPosition[1] === GRID.columns - 1) ? GRID.columns - 1 : roverPosition[1] + 1;
      } else if (roverDirection === 'W') {
        roverPosition[0] = (roverPosition[0] === 0) ? 0 : roverPosition[0] - 1;
      }
        break;
    case "b":
      if(roverDirection === "N") {
        roverPosition[1] = (roverPosition[1] === 0) ? 0 : roverPosition[1] + 1;
      } else if (roverDirection === 'E') {
        roverPosition[0] = (roverPosition[0] === GRID.rows + 1) ? GRID.rows + 1 : roverPosition[0] - 1;
      } else if (roverDirection === 'S') {
        roverPosition[1] = (roverPosition[1] === GRID.columns + 1) ? GRID.columns + 1 : roverPosition[1] - 1;
      } else if (roverDirection === 'W') {
        roverPosition[0] = (roverPosition[0] === 0) ? 0 : roverPosition[0] + 1;
      }

      break;

  }
  moveRover(roverPosition)
};
// Turn
function turn(direction) {
  var roverDirection = rover.direction;
  var roverPosition = rover.position ;
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
  rover.direction = direction;

}
function execCommand(command) {
  var letters = command.split('');

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter === 'f' || letter === 'b') {
       move(letter);

    }

    if (letter === 'r' || letter === 'l') {
       turn(letter);

    }
  }
}

/* INIT */
console.log('New  position: ['+ Rover.position[0] + ', ' + Rover.position[1] + ']')
moveRover(rover.position);
turnRover(rover.direction)
execCommand(COMMAND);

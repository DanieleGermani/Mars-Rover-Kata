/*GRID*/

var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
];
console.log(grid);
//OBSTACLES

function obstacle(x, y, nameObstacles) {

  this.nameObstacles = nameObstacles;
  grid[x][y] = nameObstacles;
}
obstacle(2, 1, "Hole");
obstacle(4, 7, "Rock");
obstacle(7, 8, "Wall")

function Rover(name, positionA, positionB, direction) {
  this.name = name;
  this.position = [positionA, positionB];
  this.direction = direction;
}

function initRover(Rover) {

  grid[Rover.position[0]][Rover.position[1]] = Rover;
  console.log('Initial ' + Rover.name + ' position: [' + Rover.position[0] + ', ' + Rover.position[1] + ']')
}
//ROVERS
var Rover1 = new Rover('Rover 1', 0, 0, 'N');
initRover(Rover1);

var Rover2 = new Rover('Rover 2', 0, 8, 'N');
initRover(Rover2);

//Moves
function moveRover(anyRover, letters) {

  grid[anyRover.position[0]][anyRover.position[1]] = 0;

  move_loop:
    for (var i = 0; i < letters.length; i++) {

      var newPosition = (anyRover.position).slice();

      switch (anyRover.direction) {

        case 'N':
          if (letters[i] === "f") {
            newPosition[0]++;
          } else if (letters[i] === "b") {
            newPosition[0]--;
          } else if (letters[i] === "l") {
            anyRover.direction = "W";
          } else if (letters[i] = "r") {
            anyRover.direction = "E";
          } else {
            console.error("type another commands:" + i);
          }

          break;

        case 'S':
          if (letters[i] === "f") {
            newPosition[0]--;
          } else if (letters[i] === "b") {
            newPosition[0]++;
          } else if (letters[i] === "l") {
            anyRover.direction = "E";
          } else if (letters[i] === "r") {
            anyRover.direction = "W"
          } else {
            console.error("type another commands:" + i);
          }

          break;

        case 'E':
          if (letters[i] === "b") {
            newPosition[1]++;
          } else if (letters[i] === "f") {
            newPosition[1]--;
          } else if (letters[i] === "l") {
            anyRover.direction = "N";
          } else if (letters[i] === "r") {
            anyRover.direction = "S"
          } else {
            console.error("type another commands:" + i);
          }

          break;

        case 'W':
          if (letters[i] === "b") {
            newPosition[1]--;
          } else if (letters[i] === "f") {
            newPosition[1]++;
          } else if (letters[i] === "l") {
            anyRover.direction = "S";
          } else if (letters[i] === "r") {
            anyRover.direction = "N"
          } else {
            console.error("no conozco este comando :" + i);
          }


          break;
      };
      if (grid[newPosition[0]][newPosition[1]] === 0 && newPosition[0] >= 0 && newPosition[1] >= 0 && newPosition[0] <= grid[0].length - 1 && newPosition[1] <= grid[1].length - 1) {
        anyRover.position = newPosition;
        iniPosition = newPosition;
      } else if (newPosition[0] < 0 && newPosition[1] < 0 && newPosition[0] > grid[0].length - 1 && newPosition[1] > grid[1].length - 1) {
        console.log(anyRover.name + ' cant do this move. You re trying to go out of the grid!')
        break move_loop;
      } else if (grid[newPosition[0]][newPosition[1]] === "Hole", "Rock", "Wall") {
        console.log(anyRover.name + ' cant do this move. There is a obstacle;  Try other way!')
        break move_loop;
      } else {
        console.log(anyRover.name + ' cant do this move. There is another rover on your way!')
        break move_loop;
      };
    }

  grid[anyRover.position[0]][anyRover.position[1]] = anyRover;
  console.log(anyRover.name + '  Direction: ' + anyRover.direction + ' New position: [' + anyRover.position[0] + ', ' + anyRover.position[1] + ']')
}
moveRover(Rover1, 'fffflfffffff');
moveRover(Rover2, 'ffblffflfff');

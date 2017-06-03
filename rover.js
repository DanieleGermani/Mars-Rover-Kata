/*var reply = prompt("What is the grid size? in X,Y");
var gridsize = reply.split(",");*/

/*var reply2 = prompt("Where are you going? Type in f,r,l,b");
var direction = reply2.split("");*/

/*var reply3 = prompt("Where are you starting? in X, Y");
var start = reply3.split(",");*/

/*console.log("Your starting position is [" + start + "]");*/

/*var face = prompt("Which direction are you facing? (North, East, South, West)");*/

/*console.log("You are facing " + face);*/
/*TEST DATA*/
gridsize = [10,10];
direction = ["f","f","r","r","r","r","r","f","f","r","f","f","f","f","f","f","f","f","f","f"];
start = [0,0];
x = start[0];
y = start[1];
face = "North";

function rover(x,y){
  x = x;
  y = y;
  face = face;
}

rover.move = function() {
  for (i = 0; i < (direction.length + 1); i++) {
    var dir = direction[i];
    if (face === "North"){
      switch(dir) {
      case "r": x = x + 1;
        break;
      case "l": x = x - 1;
        break;
      case "f": y = y + 1;
        break;
      case "b": y = y - 1;
          break;}
      } // Close North
    else if (face === "East"){
      switch(dir) {
      case "r": y = y + 1;
        break;
      case "l": y = y - 1;
        break;
      case "f": x = x + 1;
        break;
      case "b": x = x - 1;
          break;}
      } //Close East
    else if (face === "West"){
      switch(dir) {
      case "r": y = y + 1;
        break;
      case "l": y = y - 1;
        break;
      case "f": x = x - 1;
        break;
      case "b": x = x + 1;
          break;}
    } //Close West
    else if (face === "South"){
      switch(dir) {
      case "r": x = x - 1;
        break;
      case "l": x = x + 1;
        break;
      case "f": y = y - 1;
        break;
      case "b": y = y + 1;
          break;}
      } //Close South
    else {
      console.log("Again: North, South, East or West?");
    } //Close Else
  } //Close For
      /*console.log("Your end position is [" + [x,y] + "]");*/
  }; //Close Function

var grid = {
  x: gridsize[0],
  y: gridsize[1]
};
/*console.log("Size of grid [" + gridsize + "]");*/

rover.checkGrid = function() {
  if (gridsize[1] < Math.abs(y)){
        y = (Math.abs(y) % (gridsize[1] / 2));
    }
  if (gridsize[0] < Math.abs(x)){
        x = (Math.abs(x) % (gridsize[0]/2));
    }
      else {
        console.log("Your end position is [" + [x,y] + "]");
        return true;
    }
  console.log("Your end position is [" + [x,y] + "]");
};

rover.move(start[0], start[1]);
rover.checkGrid();

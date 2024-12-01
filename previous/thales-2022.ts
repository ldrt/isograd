import { MyArray } from "../src/utils/array";

let input = [];

function tousAuxAbris() {
  let myResult;
  myResult = Math.pow(input[0], 2) - Math.pow(input[1], 2);
  console.log(myResult);
}

function decollagePourMars() {
  var tanks = input[1].split(" ");
  let fuelAdded = 0;
  while (!MyArray.areAllItemsEqual(tanks)) {
    let lowest = Math.min(...tanks);
    let highest = Math.max(...tanks);
    let fuel = highest - lowest;
    tanks[tanks.findIndex((t) => t == lowest)] = lowest + fuel;
    fuelAdded += fuel;
  }
  console.log(fuelAdded);
}

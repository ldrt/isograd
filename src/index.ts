import * as fs from "fs";
import * as readline from "readline";
import { matchSampleOutput } from "./utils/result";

// Copy/paste this part into isograd
// any homemade functions that needs to be added in isograd
// end

const readFile = (file: string, array: any[]) => {
  const rlInterface = readline.createInterface({
    input: fs.createReadStream(`sample/${file}`),
    output: process.stdout,
    terminal: false,
  });
  rlInterface.on("line", (line) => {
    array.push(line);
  });
  rlInterface.on("close", () => ContestResponse());
};
const input = [];
readFile("input1.txt", input);
const output = [];
readFile("output1.txt", output);

function ContestResponse() {
  console.log(`--------------------`);
  console.log(`🦝 > input:`, input);
  console.log(`🦝 > output:`, output);

  // Copy/paste this part into isograd
  let myResult;
  myResult = Math.pow(input[0],2)-Math.pow(input[1],2);
  console.log(myResult);
  // end

  // Comparing code answer to sample output
  console.log(`🚀 > ContestResponse > matchSampleOutput:`, matchSampleOutput(myResult, output));
}

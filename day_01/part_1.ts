import fs from "fs";

{
  const inputA = [3, 4, 2, 1, 3, 3];
  const inputB = [4, 3, 5, 3, 9, 3];

  console.info("Example run:", distanceGet(inputA, inputB));
}

{
  const inputRaw = fs.readFileSync("input_part_1.txt", "utf8");

  const inputA: Array<number> = [];
  const inputB: Array<number> = [];

  for (const row of inputRaw.split("\n")) {
    let [num1, num2] = row.split("   ");
    if (!num1 || !num2) continue;
    inputA.push(parseInt(num1));
    inputB.push(parseInt(num2));
  }

  console.info("Real run:", distanceGet(inputA, inputB));
}

function distanceGet(inputA: Array<number>, inputB: Array<number>): number {
  let result = 0;

  const inputASorted = inputA.sort((a, b) => a - b);
  const inputBSorted = inputB.sort((a, b) => a - b);

  let iteration = 0;
  while (iteration < inputA.length) {
    result += Math.abs(inputASorted[iteration] - inputBSorted[iteration]);
    iteration++;
  }

  return result;
}

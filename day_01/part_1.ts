import { getInput } from "./helpers";

{
  const listA = [3, 4, 2, 1, 3, 3];
  const listB = [4, 3, 5, 3, 9, 3];

  console.info("Example run:", distanceGet(listA, listB));
}

{
  const listA: Array<number> = [];
  const listB: Array<number> = [];

  const input = getInput("input_part_1.txt");

  for (const row of input) {
    let [num1, num2] = row.split("   ");
    if (!num1 || !num2) continue;
    listA.push(parseInt(num1));
    listB.push(parseInt(num2));
  }

  console.info("Real run:", distanceGet(listA, listB));
}

function distanceGet(listA: Array<number>, listB: Array<number>): number {
  let result = 0;

  const inputASorted = listA.sort((a, b) => a - b);
  const inputBSorted = listB.sort((a, b) => a - b);

  let iteration = 0;
  while (iteration < listA.length) {
    result += Math.abs(inputASorted[iteration] - inputBSorted[iteration]);
    iteration++;
  }

  return result;
}

import fs from "fs";
import { getInput } from "./helpers";

{
  const listA = [3, 4, 2, 1, 3, 3];
  const listB = [4, 3, 5, 3, 9, 3];

  console.info("Example run:", similarityGet(listA, listB));
}

{
  const listA: Array<number> = [];
  const listB: Array<number> = [];

  const input = getInput("part_1_official_inpput.txt");

  for (const row of input) {
    let [num1, num2] = row.split("   ");
    if (!num1 || !num2) continue;
    listA.push(parseInt(num1));
    listB.push(parseInt(num2));
  }

  console.info("Real run:", similarityGet(listA, listB));
}

function similarityGet(listA: Array<number>, listB: Array<number>) {
  const list_b_repeats = new Map();
  for (const num of listB) {
    const currentCount = list_b_repeats.get(num) || 0;
    list_b_repeats.set(num, currentCount + 1);
  }

  let result = 0;
  for (const num of listA) {
    const numRepeatCount = list_b_repeats.get(num) || 0;
    result += num * numRepeatCount;
  }

  return result;
}

{
  const inputA = [3, 4, 2, 1, 3, 3];
  const inputB = [4, 3, 5, 3, 9, 3];

  const expectedResult = 11;

  const result = distanceGet(inputA, inputB);

  console.info("hello", { expectedResult, result });
  console.assert(result === expectedResult, { result, expectedResult });
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

import fs from "fs";

export function getInput(fileName: string) {
  const inputRaw = fs.readFileSync(fileName, "utf8");
  return inputRaw.split("\n").filter(Boolean);
}

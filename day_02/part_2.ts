import { getInput } from "../day_01/helpers";

{
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

  const report_list = input
    .split("\n")
    .filter(Boolean)
    .map((report_raw) => {
      const levels_raw = report_raw.split(" ");
      const levels = levels_raw.map((level) => parseInt(level));
      return levels;
    });

  let reports_safe_count = 0;
  for (const report of report_list) {
    if (is_report_safe(report)) {
      reports_safe_count += 1;
    }
  }

  console.info("Example run: # of safe reports", reports_safe_count);
}

// {
//   const input = getInput("./input_part_1.txt");
//
//   const report_list = input.map((report_raw) => {
//     const levels_raw = report_raw.split(" ");
//     const levels = levels_raw.map((level) => parseInt(level));
//     return levels;
//   });
//
//   let reports_safe_count = 0;
//   for (const report of report_list) {
//     if (is_report_safe(report)) {
//       reports_safe_count += 1;
//     }
//   }
//
//   console.info("Real run: # of safe reports", reports_safe_count);
// }

function is_report_safe(report: Array<number>) {
  const level_1 = report[0];
  const level_N = report[report.length - 1];

  if (level_1 === level_N) {
    // No levels may be the same
    // If these are the same then we know the levels neither increase nor decrease
    return false;
  }

  const levels_suggest_increase = level_N > level_1;
  const levels_suggest_decrease = level_N < level_1;

  const report_to_retry: Array<number> = [];

  for (let i = 0; i < report.length - 1; i++) {
    const level_here = report[i];
    const level_next = report[i + 1] ?? null;

    if (level_next === null) {
      // We have reached the end of the levels and have not yet returned early
      return true;
    }

    const level_delta = Math.abs(level_here - level_next);

    if (
      (levels_suggest_decrease && level_next >= level_here) ||
      (levels_suggest_increase && level_next <= level_here) ||
      level_delta > 3
    ) {
      if (report_to_retry.length > 0) {
        return false;
      }
      const before = report.slice(0, i);
      const after = report.slice(i + 1);
      report_to_retry.push(...before);
      report_to_retry.push(...after);
    }
  }

  if (report_to_retry.length > 0) {
    //
  }

  return true;
}

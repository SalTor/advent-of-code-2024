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

  for (const report of report_list) {
    console.info("Report", report, "Is report safe?", is_report_safe(report));
  }
}

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

  for (let i = 0; i < report.length - 1; i++) {
    const level_here = report[i];
    const level_next = report[i + 1] ?? null;

    if (level_next === null) {
      // We have reached the end of the levels and have not yet returned early
      return true;
    }

    const level_delta = Math.abs(level_here - level_next);

    if (levels_suggest_decrease && level_next >= level_here) {
      // No levels may be the same, and these ought to be decreasing
      return false;
    } else if (levels_suggest_increase && level_next <= level_here) {
      // No levels may be the same, and these ought to be increasing
      return false;
    } else if (level_delta > 3) {
      // No level difference may exceed 3
      return false;
    }
  }

  return true;
}
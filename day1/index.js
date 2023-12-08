const fs = require("node:fs/promises");

(async function () {
  const data = await fs.readFile("./calibration.txt", "utf-8");
  const fileLines = data.split("\n");
  const indexesFromEachLine = [];

  fileLines.forEach((line) => {
    const lineNumbers = [];

    line.split("").forEach((n) => {
      if (!isNaN(n)) {
        lineNumbers.push(n);
      }
    });

    if (lineNumbers.length >= 1) {
      const indexNumber = Number(
        String(lineNumbers[0]) + String(lineNumbers[lineNumbers.length - 1])
      );
      indexesFromEachLine.push(indexNumber);
    }
  });

  const result = indexesFromEachLine.reduce((p, c) => p + c);

  console.log(result);
})();

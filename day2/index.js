const fs = require("node:fs/promises");

(async function () {
  const data = await fs.readFile("./input.txt", "utf-8");
  const fileLines = data.split("\n");

  const solvableGameIds = [];

  const bagOfCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  fileLines.forEach((game, index) => {
    let solvable = true;
    game = game.split(":")[1];
    const setsOfCubes = game.split(";");

    setsOfCubes.forEach((set) => {
      const cubesFromSet = set.split(",");

      const usedCubes = {
        red: 0,
        green: 0,
        blue: 0,
      };

      cubesFromSet.forEach((cubes) => {
        const [quantity, color] = cubes.slice("1").split(" ");
        usedCubes[color] = Number(usedCubes[color]) + Number(quantity);
      });

      if (
        usedCubes.blue > bagOfCubes.blue ||
        usedCubes.green > bagOfCubes.green ||
        usedCubes.red > bagOfCubes.red
      ) {
        solvable = false;
      }
    });

    if (solvable) {
      solvableGameIds.push(index + 1);
    }
  });

  const result = solvableGameIds.reduce((p, c) => p + c);
  console.log(result);
})();

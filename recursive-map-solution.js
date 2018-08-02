let map = [
  [1,0,0,0,1],
  [1,0,1,1,1],
  [0,0,1,0,0],
  [1,0,0,1,1],
  [1,1,0,0,1]
];

let size = 5;

let findWater = (array, x, y) => {
  let count = 0;

  let visited = [];
  for (let i = 0; i < size; i++) {
    visited.push([]);
  }
  visited.forEach(sub => {
    for (let i = 0; i < size; i++) {
      sub.push(false);
    }
  });

  let findWaterInner = (x, y, visitedArr) => {
    count++;
    visitedArr[y][x] = true;
    console.log(`currently at: (${x}, ${y})`);
    if (x - 1 >= 0 && array[y][x - 1] !== 1 && !visitedArr[y][x-1]) {
      console.log('in left');
      findWaterInner(x - 1, y, visitedArr); // left
    }
    if (x + 1 < size && array[y][x + 1] !== 1 && !visitedArr[y][x+1]) {
      console.log('in right');
      findWaterInner(x + 1, y, visitedArr); // right
    }
    if (y - 1 >= 0 && array[y - 1][x] !== 1 && !visitedArr[y-1][x]) {
      console.log('in up');
      findWaterInner(x, y - 1, visitedArr); // up
    }
    if (y + 1 < size && array[y + 1][x] !== 1 && !visitedArr[y+1][x]) {
      console.log('in down');
      findWaterInner(x, y + 1, visitedArr); // down
    }
  };
  findWaterInner(x, y, visited);
  return count;
};

console.log('find water value: ', findWater(map, 1, 0));

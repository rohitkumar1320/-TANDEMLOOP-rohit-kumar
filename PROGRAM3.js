function oddSeries(x) {
  if (x % 2 === 0) {
    x = x - 1;
  }

  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }

  return result.join(", ");
}


const input = 9;
console.log("Output:", oddSeries(input));

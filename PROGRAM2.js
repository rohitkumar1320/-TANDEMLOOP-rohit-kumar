function oddSeries(x) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}


const input = 16;
console.log("Output:", oddSeries(input));

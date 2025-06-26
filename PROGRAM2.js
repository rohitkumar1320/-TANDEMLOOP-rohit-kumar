function oddSeries(x) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}


const input = 16;
console.log("Output:", oddSeries(input));

//THE OUTPUT FOR THIS//

Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31

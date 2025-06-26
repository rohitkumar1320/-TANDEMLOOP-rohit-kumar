function myMultiple(arr) {
  const result = {};


  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }


  for (let num of arr) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  return result;
}


const input = [1, 66,88,99,11,181,211];
const output = myMultiple(input);

console.log(output);


//THE OUTPUT WILL BE//

{
  '1': 7,
  '2': 2,
  '3': 2,
  '4': 1,
  '5': 0,
  '6': 1,
  '7': 0,
  '8': 1,
  '9': 1
}



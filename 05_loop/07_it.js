const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newnums = mynumber.map((num)=> num+10) // .map() -> returns some value.
//  console.log(newnums);

const newNum = mynumber
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num)=> num>=41)
console.log(newNum);
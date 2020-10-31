// Grouping array into 2 groups according result given function
const grouping = (ar, fn) =>
      ar.reduce((a, v, i) => (a[fn(v, i) ? 0 : 1].push(v), a), [   [],  [],  ]);

//example
console.log(grouping(['Crash','align', 'Car','table','cell', 'Cindy'], el => el[0] === 'C'));
// [["Crash", "Car", "Cindy"], ["align", "table", "cell"]]
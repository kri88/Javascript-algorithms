// converts array to string and inserting given separator. If separator is not given "/" is inserted 
const ArrayToString = (ar, s = '/') =>
  ar.reduce(
    (a, val, i) =>
      i === ar.length - 1
        ? a + val 
        : i === ar.length - 1
          ? a + val
          : a + val + s,
    ''
  );
//example
console.log(ArrayToString(['laptop', 'PC', 'printer', 'mouse','keyboard'], '|---|')); // "laptop|---|PC|---|printer|---|mouse|---|keyboard"
console.log(ArrayToString(['laptop', 'PC', 'printer', 'mouse','keyboard'])); // "laptop/PC/printer/mouse/keyboard"
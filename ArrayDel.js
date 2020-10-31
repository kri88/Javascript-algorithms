// Deleting elements from array which don't meet function condition
const del = (ar, fn) => Array.isArray(ar)  ? ar.filter(fn).reduce((a, v) => 
    {
      ar.splice(ar.indexOf(v), 1);
      return a.concat(v);
    }, []) : [];
//example
console.log(del(['Speed', 'in', 'car', 'Text','Anaconda'], w => w.length>3)); 
//["Speed", "Text", "Anaconda"]
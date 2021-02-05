
exports.min = function min (array) {
  if(arguments.length === 0 || array.length === 0) return 0;
  let m = array[0];
  for(let i=1; i<array.length; i++)
      m = array[i] > m ? m : array[i];
  return m;
}

exports.max = function max (array) {
  if(arguments.length === 0 || array.length === 0) return 0;
  let m = array[0];
  for(let i=1; i<array.length; i++)
      m = array[i] < m ? m : array[i];
  return m;
}

exports.avg = function avg (array) {
  if(arguments.length === 0 || array.length === 0) return 0;
  let a = 0;
  for(let i=0; i<array.length; i++)
      a += array[i];
  return (a/array.length);
}

exports.min = function min(array) {
    if (!(Array.isArray(array) && array.length > 1)) {
      return 0;
    } else {
      return Math.min.apply(null, array);
    }
  }
  
  
  
  
  exports.max = function max(array) {
    if (!(Array.isArray(array) && array.length > 1)) {
      return 0;
    } else {
      return Math.max.apply(null, array);
    }
  }
  
  
  
  exports.avg = function avg(array) {
    let sum = 0;
    if (!(Array.isArray(array) && array.length > 1)) {
      return 0;
    } else {
      for (let i = 0; i <= array.length - 1; i++) {
        sum += array[i];
      }
    }
    return (Math.ceil((sum / array.length) * 100) / 100);
  }
  
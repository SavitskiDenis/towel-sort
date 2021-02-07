module.exports = function towelSort (matrix) {
  let result = []
  if (Array.isArray(matrix)) {
    matrix.forEach((el, index) => {
      if (index % 2 !== 0) {
        el = el.reverse();
      }
      result = result.concat(el);
    })
  }
  return result;
}
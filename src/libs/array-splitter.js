const arraySplitter = (array, bench) => {
  return array.reduce((acc, square, index) => {
    if (acc[acc.length - 1].length === bench) {
      acc.push([]);
    }

    acc[acc.length - 1].push(index);

    return acc;
  }, [[]])
}

export default arraySplitter;
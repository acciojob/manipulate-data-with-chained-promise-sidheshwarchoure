//your JS code here. If required.
function manipulateData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then(array => {
    const evens = array.filter(num => num % 2 === 0);
    const odds = array.filter(num => num % 2 !== 0);
    const filteredArray = [...evens, ...odds];
    return filteredArray;
  })
  .then(array => {
    const updatedArray = array.map(num => {
      if (num % 2 === 0) {
        return num * 2;
      }
      return num;
    });
    return updatedArray;
  });
}

manipulateData([1, 2, 3, 4])
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result.join(", ");
  })
  .catch(error => {
    console.error(error);
  });

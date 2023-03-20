//your JS code here. If required.
function manipulateData(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input);
    }, 3000);
  })
  .then(numbers => {
    const filteredNumbers = numbers.filter(number => number % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filteredNumbers);
      }, 1000);
    });
  })
  .then(numbers => {
    const multipliedNumbers = numbers.map(number => number * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then(result => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = result.join(", ");
  })
  .catch(error => {
    console.error(error);
  });
}

const array = [1, 2, [1.1, 1.2, 1.3], 3];


function generateList(array) {
  return `<ul>${array.reduce((string, element) => {
    string += `<li>${Array.isArray(element) ? generateList(element) : element }</li>`
    return string;
  }, '')}</ul>`;
}

document.body.innerHTML = generateList(array);
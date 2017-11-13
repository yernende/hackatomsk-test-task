// Здесь будем хранить значения в том порядке, в котором их следует выводить.
// Это необходимо, потому что значение может быть расчитано до своей очереди на вывод.
let results = [];

// Индекс последнего null-значения в массиве results
let k = 0;

for (let x = 0; x < 10; x++) {
  // Резервируем ячейку в массиве
  results.push(null);

  calc(x).then((result) => {
    results[x] = result;

    // По порядку выводим значения из results до тех пор,
    // пока не наткнёмся на in (то есть, ещё не просчитанный) элемент
    for (k; k < results.length; k++) {
      if (results[k] !== null) {
        console.log(results[k]);
      } else {
        break;
      }
    }
  });
}

function calc(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x * 2);
    }, getRandomInt(0, 1000));
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Количество фотографий, сделанных за каждый день недели.
const photosPerDay = [120, 250, 45, 320, 180, 30];

// Запрашиваем имя пользователя.
const name = prompt("Как вас зовут?") || "Фотограф";
alert("Привет, " + name + "!");
console.log("Привет, " + name + "! Начинаем анализ фотографий.");

// Находим максимальное значение в массиве.
function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Считаем общее количество фотографий.
function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const totalPhotos = calculateSum(photosPerDay);
const maxPhotos = findMax(photosPerDay);

alert("Всего сделано " + totalPhotos + " фото.");
console.log("Количество фотографий за дни:", photosPerDay);
console.log("Общее количество фотографий:", totalPhotos);
console.log("Максимум за день:", maxPhotos);

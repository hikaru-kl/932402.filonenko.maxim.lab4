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

// Оставляем дни, когда сделано больше 200 фотографий.
function filterHighActivity(numbers) {
  return numbers.filter(function (photos) {
    return photos > 200;
  });
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
const highActivityDays = filterHighActivity(photosPerDay);
const maxPhotos = findMax(photosPerDay);

// Считаем дни с малой активностью (50 фотографий или меньше).
let lowActivityDays = 0;

for (let i = 0; i < photosPerDay.length; i++) {
  if (photosPerDay[i] <= 50) {
    lowActivityDays++;
  }
}

const lowActivityPercent = (lowActivityDays / photosPerDay.length) * 100;

alert(
  "Всего сделано " + totalPhotos + " фото, в " +
  highActivityDays.length + " днях активность была высокой."
);

console.log("Количество фотографий за дни:", photosPerDay);
console.log("Общее количество фотографий:", totalPhotos);
console.log("Максимум за день:", maxPhotos);
console.log("Дней с высокой активностью (> 200 фото):", highActivityDays.length);
console.log("Дней с малой активностью (<= 50 фото):", lowActivityDays);
console.log("Процент дней с малой активностью:", lowActivityPercent.toFixed(1) + "%");

if (maxPhotos > 300) {
  console.log("В этот день вы были особенно продуктивны!");
}

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2) {
    console.log(`${i} - это нечет`);
  } else {
    console.log(`${i} - это чет`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3, 2);
console.log(arr2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const randoms = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
// console.log(randoms);
// console.log(
//   `${randoms.reduce((sum, numbers) => numbers + sum, 0)} sum чисел в массиве`
// );
// console.log(`${randoms.reduce((a, b) => Math.min(a, b))} min число в массиве`); //нахожения минимального числа в массиве 1 способ
// console.log(`${Math.min(...randoms)} min число в массиве`); //нахожения минимального числа в массиве 2 способ
// console.log(randoms.filter((x) => x == +x));
// console.log(randoms.find((x) => x == 3));

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// for (let i = 0; i < 21; i++) {
//   let xxx = "";
//   for (let j = 1; j <= i; j++) {
//     xxx += "x";
//   }
//   console.log(xxx);
// }

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

const randomsArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
console.log(randomsArr);
for (let i = 0; i < randomsArr.length; i++) {
  if (randomsArr[i] % 2 === 0) {
    console.log(`число которое делиться на 2 ${randomsArr[i]} возведенное в квадрат ${Math.pow(randomsArr[i], 2)}`);
  } else if (randomsArr[i] % 3 === 0) {
    console.log(`число которое делиться на 3 ${randomsArr[i]} возведенное в куб ${Math.pow(randomsArr[i], 3)}`);
  }
}
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
const arr6 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
console.log(`количество троек ${arr6.reduce((total, x) => (x == 3 ? total + 1 : total), 0)}`);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

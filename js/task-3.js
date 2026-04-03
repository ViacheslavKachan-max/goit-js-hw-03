// function filterArray(numbers, value) {
//   const filteredNumbers =[];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > value){
//        filteredNumbers.push(numbers[i]);
//     }
//   }
//  return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: 'Spacious apartment in the city center',
// rating: 4,
// price: 2153,
// tags: ['premium','promoted','top'],
// };
//  const apartmentdescr = apartment.descr;
//  const apartmentrating = apartment.rating;
//  const apartmentprice = apartment.price;
// const apartmenttags = apartment.tags.push('trusted');

// console.log(apartment);

////==== Об'єкт apartment описує квартиру 6 властивостями:====////
//  шлях до зображення, опис, рейтинг, ціна, теги і власник.
//  Властивість owner (власник) також є об'єктом.
//  Оголошено шість змінніх,
// значення яких це значення відповідних властивостей об'єкту apartment.

// Доповни код,
//  задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;

// const ownerPhone = apartment.owner.phone;

// const ownerEmail = apartment.owner.email;

// const numberOfTags = apartment.tags.length;

// const firstTag = apartment.tags[0];

// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(apartment);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for(const key of keys){
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// !!!!!!!!!!!!!!!!!!!

// Виконай рефакторинг функції countProps(object),
// замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
// для отримання масиву властивостей.
//  Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// };

// Рефакторінг функції countProps(object) за допомогою Object.keys() //

// function countProps(object) {
//   return Object.keys(object).length;
// };
// console.log(countProps({ name: "Slavik", age: 46 }));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// Масив colors містить колекцію кольорів.
//  Кожен колір представлений об'єктом і має властивості hex і rgb
//  з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
//  Додай у масив hexColors значення властивостей hex,
//  а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
//  Функція містить масив об'єктів products з такими властивостями,
//  як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так,
//  щоб вона шукала об'єкт продукту з певним ім'ям (властивість name)
//  в масиві products і повертала його ціну (властивість price).
//  Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// Напиши функцію getAllPropValues(propName),
//  яка приймає один параметр propName - ім'я (ключ) властивості. 
// Функція повинна повернути
//  масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const result = [];
// let total = 0;
//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       result.push(product[propName]);
      //!!! додав значення властивості до загальної суми !!!//
// total += product[propName];
      
//     }
//   }
//  return { values: result, total: total };
  
// }
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));

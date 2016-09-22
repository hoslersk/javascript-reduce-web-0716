const app = "I don't do much."

// Extreme couponing!

const products = [
  { name: 'Head & Shoulders Shampoo', standardPrice: 4.99, discount: .6 },
  { name: 'Twinkies', standardPrice: 7.99, discount: .45 },
  { name: 'Oreos', standardPrice: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', standardPrice: 13.99, discount: .7 },
];

// 50% discount:

// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     if (product.discount >= .5) {
//       totalPrice += product.price;
//     }
//   });
//
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products)); // prints 25.5

// If we want to limit based on price...

// function getTotalAmountForProducts(products, callback) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
//
//   return totalPrice;
// }
//
// function callback(totalPrice, product) {
//   if (product.discount >= .5) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback)); // prints 25.5
//
// // items less than $7...
//
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback)); // prints 11.5

// We can set the initial value of the cart in the event that we already have items:

function getTotalAmountForProducts(products, callback, initialValue) {
  let totalPrice = initialValue;

  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });

  return totalPrice;
}

function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback, 0)); // still prints 11.5. Yeah!

// use of 'reduce'...

// function reduce(collection, callback, initialValue) {
//   let result = initialValue;
//
//   collection.forEach(product => {
//     result = callback(result, product);
//   });
//
//   return result;
// }

// we can add to the callback to enable more arguments:

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });

  return result;
}

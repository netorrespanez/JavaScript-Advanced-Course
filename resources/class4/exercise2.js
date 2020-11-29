const createMilkshake = (name) => {
    return {
        name,
        price: 499
    };
};

const raspberry = createMilkshake('Raspberry');
  // 'Raspberry'
console.log(raspberry.name);


const createMilkshake = (name) => ({
    name,
    price: 499
});

//
const drinks = ['Cola', 'Lemonade', 'Coffee', 'Water'];

const id = 2;
const removedDrink = drinks[id];
const filteredDrinks = drinks.filter((drink, index) => index !== id);


//
const drinks = ['Cola', 'Lemonade', 'Coffee', 'Water'];
const id = 'Coffee';
const idx = drinks.indexOf(id);
const removedDrink = drinks[idx];
const filteredDrinks = drinks.filter((drink, index) => drink !== idx);

//
const doSomethingUsingStatements = (value, threshold) => {
  const arr = [5];
  arr.push(value);

  if (threshold < 10) {
    return arr;
  }

  arr.push(7);
  return arr;
}

// Returns [5, 4, 7]
doSomethingUsingStatements(4, 10);

// Returns [5, 3]
doSomethingUsingStatements(3, 2);


const fn = () => (arr => console.log(arr))([5])


const fn = () => { const arr = [5]; console.log(arr); }

/**
 * const fn = () => (arr => (console.log(arr), arr))([5]);
 * const fn = () => { const arr = [5]; console.log(arr); return arr; };
 */

const doSomethingUsingExpressions = (val, threshold) => (
  (arr) => (arr.push(val), threshold < 10 ? arr : (arr.push(7), arr))
)([5]);

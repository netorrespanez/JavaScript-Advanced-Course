var type = 'coke';
var drink;
switch(type) {
case 'coke':
  drink = 'Coke';
  break;
case 'pepsi':
  drink = 'Pepsi';
  break;
default:
  drink = 'Unknown drink!';
}
console.log(drink); // 'Coke'




function getDrink (type) {
    if (type === 'coke') {
      type = 'Coke';
    } else if (type === 'pepsi') {
      type = 'Pepsi';
    } else if (type === 'mountain dew') {
      type = 'Mountain Dew';
    } else if (type === 'lemonade') {
      type = 'Lemonade';
    } else if (type === 'fanta') {
      type = 'Fanta';
    } else {
      // acts as our "default"
      type = 'Unknown drink!';
    }
    return 'You\'ve picked a ' + type;
  }


/** Object Literals */

//function1
let manySameValues = ('cocacola' || 'coke' || 'coca-cola') ? 'coke' : ''

function getDrink (type) {
    var drinks = {
      'coke': 'CoCa-Cola',
      'pepsi': 'Pepsi',
      'lemonade': 'Nestea',
      'default': 'Default item'
    };
    return 'The drink I chose was ' + (drinks[type] || drinks['default']);
  }
  
  var drink = getDrink('coke');
  // The drink I chose was Coke
  console.log(drink);

//function2
  function getDrink (type) {

    function showType(typename) {
      return typename.toString()
    }

    return 'The drink I chose was ' + {
      'coke': showType(type),
      'pepsi': showType(type),
      'lemonade': showType(type)
    }[type];
  }


//functions3
var type = 'coke';

var drinks = {
  'coke': function () {
    return 'Coke';
  },
  'pepsi': function () {
    return 'Pepsi';
  },
  'lemonade': function () {
    return 'Lemonade';
  }
};

drinks[type]();


//function4
function getDrink (type) {
    var drinks = {
      'coke': function () {
        return 'Coke';
      },
      'pepsi': function () {
        return 'Pepsi';
      },
      'lemonade': function () {
        return 'Lemonade';
      }
    };
    return drinks[type]();
  }
  
  // let's call it
  var drink = getDrink('coke');
  console.log(drink); // 'Coke'


//function5
function getDrink (type) {
    var drinks = {
      'coke': function () {
        return 'Coke';
      },
      'pepsi': function () {
        return 'Pepsi';
      },
      'lemonade': function () {
        return 'Lemonade';
      },
      'default': function () {
        return 'Default item';
      }
    };
    return (drinks[type] || drinks['default'])();
  }


//function6 


function getSnack (type) {
    var snack;
    function isDrink () {
      return snack = 'Drink';
    }
    function isFood () {
      return snack = 'Food';
    }

    var snacks = {
      'coke': isDrink,
      'pepsi': isDrink,
      'cookies': isFood,
      'crisps': isFood,
    };
    
    return snacks[type]();
  }
  
  var snack = getSnack('coke');
  console.log(snack); // 'Drink'
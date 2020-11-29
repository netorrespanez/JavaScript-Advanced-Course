// impure addToCart mutates existing cart
const addToCart = (cart, item, quantity) => {
    cart.items.push({
      item,
      quantity
    });
    return cart;
  };
  
  
  test('addToCart()', assert => {
    const msg = 'addToCart() should add a new item to the cart.';
    const originalCart =     {
      items: []
    };
    const cart = addToCart(
      originalCart,
      {
        name: "Digital SLR Camera",
        price: '1495'
      },
      1
    );
  
    const expected = 1; // num items in cart
    const actual = cart.items.length;
  
    assert.equal(actual, expected, msg);
  
    assert.deepEqual(originalCart, cart, 'mutates original cart.');
    assert.end();
  });



// Pure addToCart() returns a new cart
// It does not mutate the original.
const addToCart = (cart, item, quantity) => {
    const newCart = lodash.cloneDeep(cart);
  
    newCart.items.push({
      item,
      quantity
    });

    return newCart;
  
  };
  
  
  test('addToCart()', assert => {
    const msg = 'addToCart() should add a new item to the cart.';
    const originalCart = {
      items: []
    };
  
    // deep-freeze on npm
    // throws an error if original is mutated
    deepFreeze(originalCart);
  
    const cart = addToCart(
      originalCart,
      {
        name: "Digital SLR Camera",
        price: '1495'
      },
      1
    );
  
  
    const expected = 1; // num items in cart
    const actual = cart.items.length;
  
    assert.equal(actual, expected, msg);
  
    assert.notDeepEqual(originalCart, cart,
      'should not mutate original cart.');
    assert.end();
  });



  ///
  const impureAssoc = (key, value, object) => {
    object[key] = value;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const result = impureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  });




  
  const pureAssoc = (key, value, object) => ({
    ...object,
    [key]: value
  });
  
  const person = {
    name: 'Bobo'
  };
  
  const result = pureAssoc('shoeSize', 400, person);
  
  console.log({
    person,
    result
  });
//Fix Context Problems with .bind()

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      this.favoriteProduct();
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()

// Missing this?

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()

//Solving this problem with arrow functions

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(() => this.favoriteProduct(), 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()

// As properties

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = () => {
      user.favorites.push(this.name);
      console.log(`${this.name} favorited!`); 
    }
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

//   favoriteProduct() {
//     user.favorites.push(this.name);
//     console.log(`${this.name} favorited!`);
//   }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()


//bind method

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct.bind(this), 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()


// multiple calls to bind?

const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    //this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct.bind(this), 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  fetchUrl(url){
    fetch(url)
    .then(this.favoriteProduct.bind(this))
    .catch()
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()
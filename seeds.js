const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
  .then(() => {
    console.log("Mongo conecction open!")
  })
  .catch(err => {
    console.log("OH NO mongo connection ERROR")
    console.log(err)
  })

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit'
// })

// p.save().then(p => {
//   console.log(p)
// })
// .catch( e => {
//   console.log(e)
// })


const seedProducts = [
  {
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
  },
  {
    name: 'Eggplant',
    price: 1.00,
    category: 'vegetable'
  },
  {
    name: 'Melon',
    price: 5.99,
    category: 'fruit'
  },
  {
    name: 'Watermelon',
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Celery',
    price: 1.5,
    category: 'vegetable'
  },
  {
    name: 'Milk',
    price: 2.69,
    category: 'dairy'
  }
];

Product.insertMany(seedProducts)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })
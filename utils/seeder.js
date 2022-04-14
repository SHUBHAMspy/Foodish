const dbConnect = require('../config/dbConnect');
const menuItemsData = require('../data/data');
const Product = require('../models/product');

dbConnect();

const seed = async() => {
  try {
    await Product.deleteMany();
    console.log('Previous present dishes have been deleted');

    await Product.insertMany(menuItemsData);
    console.log('Dishes have been inserted');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
}

seed();
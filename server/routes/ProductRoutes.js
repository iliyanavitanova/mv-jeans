// ProductRoutes.js

const express = require('express');
const app = express();
const ProductRouter = express.Router();
const fs = require('fs');

const Product = require('../models/Product');
const ProductSold = require('../models/ProductSold');

ProductRouter.route('/add').post(function (req, res) {
  const product = new Product(req.body);
  product.save()
    .then(product => {
      res.json('Server added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

ProductRouter.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

ProductRouter.route('/dictionary').get(function (req, res) {
  var dictionary = JSON.parse(fs.readFileSync('./server/dictionary.json'));
  res.json(dictionary);
});

ProductRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});

ProductRouter.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      product.name = req.body.name;
      product.port = req.body.port;

      product.save().then(product => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

ProductRouter.route('/delete/:id').get(function (req, res) {
  Product.findByIdAndRemove({ _id: req.params.id },
    function (err, product) {
      if (err) res.json(err);
      else res.json('Successfully removed');
    });
});

ProductRouter.route('/sell/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
      req.body.profit = req.body.price - req.body.wholesalePrice;
      const productSold = new ProductSold(req.body);
      productSold.save()
        .then(productSold => {
          res.json('Server added successfully');
        })
        .catch(err => {
          res.status(400).send("unable to save to database");
        });
    }
  });
});

module.exports = ProductRouter;
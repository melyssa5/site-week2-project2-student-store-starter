const express = require("express");
const Store = require("../models/store");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("hi");
});

router.get("/store", async (req, res, next) => {
  res.send(Store.listProducts);
});

router.post("/store", async (req, res, next) => {
//   const result = Store.pairs(req.body.names);
  const result = Store.addPurchase(req.body.purchase)
  res.status(200).json(result);
});

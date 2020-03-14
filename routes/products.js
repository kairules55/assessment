const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/AdminController");
const adminController = new AdminController();

router.post("/create/", adminController.createProduct);
router.get("/", adminController.allProducts);
router.get("/delete/:id", adminController.deleteProduct);
router.get("/update/:id/update_quantity/", adminController.updateQuantity);

module.exports = router;

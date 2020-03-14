const Product = require("../models/products");

class AdminController {
  async allProducts(request, response) {
    try {
      const products = await Product.find({});
      return response.json(200, {
        data: {
          products: products
        }
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error"
      });
    }
  }

  async createProduct(request, response) {
    try {
      const product = await Product.create(request.body);
      return response.json(200, {
        data: {
          product: product
        }
      });
    } catch (error) {
      return response.json(400, {
        data: {
          message: "Bad Request"
        }
      });
    }
  }

  async deleteProduct(request, response) {
    try {
      const id = request.params.id;
      const del = await Product.findByIdAndDelete(id);
      return response.json(200, {
        data: {
          message: "Product Deleted"
        }
      });
    } catch (error) {
      return response.json(400, {
        data: {
          message: "Bad Request"
        }
      });
    }
  }

  async updateQuantity(request, response) {
    try {
      const id = request.params.id;
      const number = request.query.number;
      const product = await Product.findById(id);
      if (number >= 0) {
        product.quantity = number;
        product.save();
      }
      return response.json(200, {
        data: {
          product: product,
          message: "Product Updated"
        }
      });
    } catch (error) {
      return response.json(400, {
        data: {
          message: "Bad Request"
        }
      });
    }
  }
}

module.exports = AdminController;

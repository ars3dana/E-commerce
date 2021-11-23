const ProductService = require("../services/productService.js");

class ProductController {
  static getAll = async (req, res, next) => {
    try {
      let { page, limit, q } = req.query;
      page = page || 1;
      limit = limit || 6;
      const offset = page * limit - limit;
     const products = await ProductService.getAll(offset, limit, q);
      return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      const {title,img, description,brand,type,size,model,price, hot} = req.body;
      const product = {title,img, description,brand,type,size,model,price,hot}
      await ProductService.createProduct(product);
      return res.json({ message: "created" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;

      await ProductService.delete(id);

      return res.json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await ProductService.getOne(id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    try {
      let { title,img, description,brand,type,size,model,price} = req.body;
      const { id } = req.params;
      await ProductService.update({title,img, description,brand,type,size,model,id,price});
      return res.json({ message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await ProductService.delete(id);
      return res.json({ message: "Product deleted" });
    } catch (error) {
      next(error)
    }
  };
}

module.exports = ProductController;

const { Product } = require("../models/index.js");
const { Op } = require("sequelize");
const ErrorHandler = require("../utils/ErrorHandler.js");

class ProductService {
  static getAll = async (offset, limit, q) => {
   
    if (q) {  
      return await Product.findAndCountAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.iLike]: q + '%',
              },
            },
            {
              type: {
                [Op.iLike]: q + '%',
              },
            },
          ],
        },
        limit,
        offset,
      });
    }

    return await Product.findAndCountAll({ limit, offset });
  };

  static getOne = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product

  };
  static createProduct = async ({title,img,description,brand,type,size,model,hot,price}) => {
    await Product.create({title, img, description,brand,type,size,model,hot,price});
  };

  static update = async (productData) => {
    let { title,img, description,brand,type,size,model,id,price,hot } = productData;
    const product = await Product.findOne({ where: { id } });

    if (!product) throw ErrorHandler.BadRequest("Product not found");
    title = title || product.title;
    img = img || product.img;
    description = description || product.description;
    brand = brand || product.brand;
    type = type || product.type;
    size = size || product.size;
    model = model || product.model;
    hot = hot || product.hot;
    price = price || product.price;
    await Product.update({  title,img, description,brand,type,size,model, hot, price}, { where: { id } });
  };
  static delete = async (id) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw ErrorHandler.BadRequest("Product not found");
    return await Product.destroy({ where: { id } });
  };
}

module.exports = ProductService;

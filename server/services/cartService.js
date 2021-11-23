const { Cart } = require("../models");
const {Product} = require('../models')
const {User} = require('../models')
const ErrorHandler = require("../utils/ErrorHandler.js");
class CartService {
  static getAll = async() => {
    return await Cart.findAll()
  }
  static get = async (userId) => {
    return await User.findOne({
      include: Product,
      where: {id: userId}
    });
  };
  static add = async ({userId, productId, count}) => {
      const product = await Product.findOne({where: productId})
      if(product) {
        throw ErrorHandler.BadRequest('Этот продукт уже в вашей корзине');
      }
      await Cart.create({userId, productId, count})
  }


  static update = async (data) => {
    let {count, id} = data
    const cart = await Cart.findOne({ where: { id } });

    count = count || cart.count;

    await Cart.update({count},{ where: { id } });
  };
  static delete = async(id) => {
      await Cart.destroy({where: {id}})
  }
}

module.exports = CartService;

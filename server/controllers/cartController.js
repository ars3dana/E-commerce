const CartService = require("../services/cartService");

class CartController {
  static getAll = async(req,res,next) => {
    const carts = await CartService.getAll()
    res.json(carts)
  }
  static get = async (req, res, next) => {
    try {
      const {userId} = req.params
      const product = await CartService.get(userId);

      return res.json(product.products);
    } catch (error) {
      next(error);
    }
  };

  static add = async (req, res, next) => {
    try {
      const {
        userId, productId,count
      } = req.body;
      const product = await CartService.add({userId, productId, count});
      console.log(product)
      return res.json({ message: "profile created" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
    
      let { count } = req.body;
      const { id } = req.params;
      await CartService.update({count,id});
      return res.json({ message: "updated" });
    } catch (error) {
      next(error);
    }
  };
  static delete = async(req,res,next) => {
    const {id} = req.params
    await CartService.delete(id)
    res.json({message: "Deleted"})
  }
}

module.exports = CartController;

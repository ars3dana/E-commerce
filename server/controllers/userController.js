const { validationResult } = require("express-validator");
const UserService = require("../services/userService.js");
const ErrorHandler = require("./../utils/ErrorHandler.js");

class UserController {
  static registration = async (req, res, next) => {
    console.log(req.body)
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ErrorHandler.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, password } = req.body;
      const userData = await UserService.registration(email, password);
      return res.json(userData).redirect('/');
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);
      res.json(userData)
      return res.redirect('/');
       
    } catch (error) {
      next(error);
    }
  };



  static getAll = async (req, res, next) => {
    try {
      const users = await UserService.getAll();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { user } = req;

      const userData = await UserService.getOne(id);

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      
      const updateData = {
        id,
        role,
        schoolId,
      };

      await UserService.update(updateData);
      return res.json({ message: "updated" });
    } catch (error) {
      next(error);
    }
  };
  static delete = async(req,res,next) => {
    try {
      const {id} = req.params
      await UserService.delete(id)
      return res.json({message: "deleted"})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;

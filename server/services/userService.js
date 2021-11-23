const { User, Profile } = require("./../models/index.js");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/ErrorHandler.js");
const TokenService = require("./tokenService.js");
const { v4: uuidv4 } = require("uuid");

class UserService {
  static registration = async (email, password) => {
    const oldUser = await User.findOne({where:{email}});
    if (oldUser) {
      throw ErrorHandler.BadRequest(
        "Пользователь с таким email уже существует"
      );
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    const token = TokenService.generateTokens({ id: user.id, email });

    return {
      token,
      email

    };
  };

  static login = async (email, password) => {
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      throw ErrorHandler.BadRequest("Wrong email or password");
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      throw ErrorHandler.BadRequest("Wrong email or password");
    }

    const token = TokenService.generateTokens({
      id: user.id,
      email,
    });
    return {
      token,
      email
    
    };
  };



  static getAll = async () => {

    return await User.findAll();
  };

  static getOne = async (id) => {
    const user = await User.findOne({
      where: { id },
      include: [
        { model: Profile, as: "profile" },
      ],
    });

    if (!user) throw ErrorHandler.BadRequest("User not found");

    return user;
  };

  static update = async ({ id }) => {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw ErrorHandler.BadRequest("User not found");
    }

    await User.update({ role, schoolId }, { where: { id } });
  };

  static delete = async (id) => {

    await User.destroy({where: {id}})
  }
}

module.exports = UserService;
